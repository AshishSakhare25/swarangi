import Reveal from "@/components/Reveal";
import { HandArrow } from "@/components/annotations";

const STEPS = [
  { id: "understand", label: "UNDERSTAND", note: "ask a lot of questions" },
  { id: "structure", label: "STRUCTURE", note: "find the thread" },
  { id: "explore", label: "EXPLORE", note: "try the weird idea too" },
  { id: "design", label: "DESIGN", note: "make it real" },
  { id: "refine", label: "REFINE", note: "obsess over the last 2%" },
];

export default function Process() {
  return (
    <section data-testid="process-section" className="border-t border-line py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">08 — process</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Roughly how it <span className="italic text-ember">goes.</span>
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-10 md:flex-row md:items-start md:gap-0">
          {STEPS.map((s, i) => (
            <Reveal key={s.id} delay={0.1 * i} className="flex-1">
              <div data-testid={`process-step-${s.id}`} className="relative flex items-center gap-5 md:flex-col md:items-start md:gap-0 md:pr-8">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[1.5px] border-ink font-mono text-xs">
                    {i + 1}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-ink md:hidden">{s.label}</span>
                </div>
                <p className="mt-0 hidden font-mono text-xs uppercase tracking-[0.22em] text-ink md:mt-5 md:block">{s.label}</p>
                <p className="font-hand text-xl text-ember md:mt-2" style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}>
                  {s.note}
                </p>
                {i < STEPS.length - 1 && (
                  <HandArrow className="absolute -right-2 top-8 hidden w-16 opacity-50 md:block" />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 max-w-2xl text-base leading-relaxed text-smoke">
            Every project is different, but I usually start by understanding the problem, making sense of the
            complexity, exploring possible directions, and refining the details until the experience feels right.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
