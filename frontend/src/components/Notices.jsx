import Reveal from "@/components/Reveal";
import { HandUnderline } from "@/components/annotations";

const NOTES = [
  "The button that's technically correct but doesn't feel clickable.",
  "The empty state nobody thought about.",
  "The screen with six equally important things.",
  "The interaction that looks beautiful but slows the user down.",
  "The tiny detail that makes a product feel alive.",
];

export default function Notices() {
  return (
    <section data-testid="sketchbook-section" className="border-y border-line bg-cream/40 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">03 — observations</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Things I <span className="italic text-ember">notice.</span>
          </h2>
          <p className="mt-4 text-base text-smoke">Usually, these are where I start.</p>
        </Reveal>

        <div className="mt-16 space-y-10 sm:space-y-14">
          {NOTES.map((n, i) => (
            <Reveal key={n} delay={0.05 * i} className={i % 2 === 1 ? "sm:pl-24" : "sm:pr-24"}>
              <div data-testid={`sketchbook-card-${i + 1}`} className="flex items-baseline gap-4">
                <span className="shrink-0 font-mono text-xs text-ash">{String(i + 1).padStart(2, "0")}</span>
                <p
                  className="font-hand text-2xl leading-snug text-ink sm:text-3xl"
                  style={{ transform: `rotate(${i % 2 === 0 ? -0.8 : 0.8}deg)` }}
                >
                  {n}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-20 text-center">
          <p className="inline-block font-serif text-2xl italic tracking-tight text-ink sm:text-3xl">
            Good design often starts with noticing.
            <HandUnderline className="mx-auto mt-1 w-56 sm:w-72" />
          </p>
        </Reveal>
      </div>
    </section>
  );
}
