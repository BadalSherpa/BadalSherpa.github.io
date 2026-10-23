/**
 * Scroll helpers. Native smooth scrolling (enabled in globals.css only when
 * motion is welcome) replaces the old Lenis setup.
 */
export function scrollToTarget(target: string | number) {
  if (typeof target === "number") {
    window.scrollTo({ top: target });
    return;
  }
  const el = document.querySelector<HTMLElement>(target);
  if (!el) return;
  el.scrollIntoView();
  // Move focus with the scroll so keyboard users land in the section.
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
}

export function setScrollLocked(locked: boolean) {
  document.documentElement.style.overflow = locked ? "hidden" : "";
}
