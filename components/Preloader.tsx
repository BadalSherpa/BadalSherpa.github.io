/**
 * Intro screen: name rises in, a counter runs to 100% and the panel lifts away.
 * Entirely CSS-driven (see globals.css) so it starts at first paint instead of
 * waiting for JavaScript, and it's skipped on phones and for reduced motion.
 */
export default function Preloader() {
  return (
    <div
      className="preloader pointer-events-none fixed inset-0 z-[90] flex flex-col justify-between bg-ink p-6 sm:p-10"
      aria-hidden
    >
      <div className="flex justify-between font-mono text-xs uppercase tracking-[0.3em] text-muted">
        <span>Portfolio</span>
        <span>Badal Sherpa</span>
      </div>
      <div className="flex items-end justify-between gap-6">
        <div className="overflow-hidden pb-[0.1em] text-5xl font-medium tracking-tight sm:text-8xl">
          <span className="pl-word inline-block">Badal</span>{" "}
          <span className="pl-word inline-block pr-[0.08em] font-serif italic text-gradient">Sherpa</span>
        </div>
        <span className="pl-count font-mono text-4xl tabular-nums text-fg/80 sm:text-6xl" />
      </div>
      <div className="h-px w-full bg-fg/10">
        <div className="pl-bar h-full origin-left bg-accent" />
      </div>
    </div>
  );
}
