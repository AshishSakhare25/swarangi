import Reveal from "@/components/Reveal";
import { Note } from "@/components/annotations";

const CONCEPTUAL = [
  ["CURIOSITY", "asking why"],
  ["OBSERVATION", "noticing what's not working"],
  ["STRUCTURE", "making sense of complexity"],
  ["VISUAL THINKING", "communicating ideas"],
  ["CRAFT", "caring about details"],
  ["ITERATION", "knowing the first idea isn't always the right one"],
];

const DIGITAL = [
  ["Figma", "UI design, systems, wireframes and prototypes."],
  ["Adobe Illustrator", "Visual exploration, illustration and brand work."],
  ["Adobe After Effects", "Motion, interaction studies and visual storytelling."],
];

export default function Toolkit() {
  return (
    <section data-testid="toolkit-section" className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">06 — toolkit</p>
        <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
          My actual <span className="italic text-ember">toolkit.</span>
        </h2>
      </Reveal>

      <div data-testid="toolkit-conceptual-grid" className="mt-14 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {CONCEPTUAL.map(([t, d], i) => (
          <Reveal key={t} delay={0.06 * i}>
            <div className="group border-l-2 border-line pl-5 transition-colors duration-300 hover:border-ember">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink">{t}</p>
              <p className="mt-1.5 font-hand text-xl text-smoke transition-colors duration-300 group-hover:text-ember">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-20">
        <Note rotate={-1.5} className="text-2xl">and yes, I use Figma too.</Note>
        <div data-testid="toolkit-digital-grid" className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DIGITAL.map(([t, d], i) => (
            <div
              key={t}
              className="flex items-baseline justify-between gap-6 rounded-md border border-line bg-white px-5 py-4 shadow-paper transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-ink/40"
              data-testid={`tool-card-${i}`}
            >
              <span className="font-serif text-lg italic tracking-tight text-ink">{t}</span>
              <span className="text-right text-sm text-smoke">{d}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
