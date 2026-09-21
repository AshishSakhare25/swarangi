import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/data/projects";
import { Note } from "@/components/annotations";

const META = [
  ["problem", (p) => p.problem],
  ["role", (p) => p.role],
  ["platform", (p) => p.platform],
  ["domain", (p) => p.domain],
];

const TINT_BG = { skywash: "bg-skywash", sage: "bg-sage", lav: "bg-lav" };

export default function SelectedWork() {
  return (
    <section id="work" data-testid="selected-work-section" className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">02 — selected work</p>
        <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
          Things I&apos;ve helped make <span className="italic text-ember">clearer.</span>
        </h2>
        <p className="mt-4 text-base text-smoke">Three products, very different problems.</p>
      </Reveal>

      <div className="relative mt-16">
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block" aria-hidden="true">
          <span className="rounded-full border border-dashed border-ink/30 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
            products
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.12} className={i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""}>
              <Link
                to={`/work/${p.slug}`}
                data-testid={`project-card-${p.slug}`}
                className="group block rounded-md border border-line bg-white p-6 shadow-paper transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:-rotate-1 hover:border-ink/40 hover:shadow-lift focus-visible:-translate-y-1.5"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-ash">{p.index}</span>
                  <span className={`h-8 w-8 rounded-full ${TINT_BG[p.tint]} transition-transform duration-300 group-hover:scale-125`} aria-hidden="true" />
                </div>
                <h3 className="mt-8 font-serif text-2xl font-medium tracking-tight sm:text-3xl">{p.name}</h3>
                <p className="mt-1 font-hand text-lg text-ember">{p.domain}</p>

                <div className="mt-6 space-y-3 border-t border-dashed border-line pt-5 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                  {META.map(([k, fn]) => (
                    <div key={k}>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">{k}</p>
                      <p className={`mt-0.5 text-sm ${k === "problem" ? "font-hand text-lg leading-tight text-ink" : "text-smoke"}`}>
                        {fn(p)}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-6 flex items-center gap-1.5 text-sm font-medium text-ink">
                  open the case study
                  <span className="inline-block text-ember transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Note className="mt-10" rotate={-1.5}>each one started as a mess — click to see it become a product</Note>
        </Reveal>
      </div>
    </section>
  );
}
