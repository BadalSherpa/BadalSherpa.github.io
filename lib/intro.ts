"use client";

// The preloader announces when the page should start its entrance animations.
// A sticky flag lets late subscribers run immediately instead of missing the event.
let revealed = false;
const listeners = new Set<() => void>();

export function markIntroRevealed() {
  if (revealed) return;
  revealed = true;
  // Run on the next frame, outside the caller's GSAP callback. Otherwise any
  // animations listeners create get recorded into the preloader's gsap.context
  // and are reverted when the preloader unmounts.
  requestAnimationFrame(() => {
    listeners.forEach((fn) => fn());
    listeners.clear();
  });
}

export function onIntroReveal(fn: () => void) {
  if (revealed) {
    fn();
    return () => {};
  }
  listeners.add(fn);
  return () => listeners.delete(fn);
}
