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

const CARD_IMG = {
  mentblue: "/work-mentblue.jpg",
  goodlives: "/work-goodlives.jpg",
  tx: "/work-tx.jpg",
};

const CARD_ALT = {
  mentblue: "MentBlue landing page on a laptop — deep blue legal career platform",
  goodlives: "GoodLives dashboard on a laptop — green mental wellness product",
  tx: "TX event type selection on a laptop — AI event planning assistant",
};

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
          <span className="rounded-full border border-dashed border-ink/30 bg-paper px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-ash">
            products
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.12} className={i === 1 ? "md:mt-16" : i === 2 ? "md:mt-32" : ""}>
              <Link
                to={`/work/${p.slug}`}
                data-testid={`project-card-${p.slug}`}
                className="group block overflow-hidden rounded-md border border-line bg-white shadow-paper transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:-rotate-1 hover:border-ink/40 hover:shadow-lift focus-visible:-translate-y-1.5"
              >
                <div className="overflow-hidden border-b border-line bg-cream">
                  <img
                    src={CARD_IMG[p.slug]}
                    alt={CARD_ALT[p.slug]}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-xs text-ash">{p.index}</span>
                    <span className="font-hand text-lg leading-none text-ember">{p.domain}</span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight sm:text-[1.7rem]">{p.name}</h3>

                  <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] md:group-focus-visible:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <div className="space-y-3 pt-4 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                        {META.map(([k, fn]) => (
                          <div key={k}>
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ash">{k}</p>
                            <p className={`mt-0.5 ${k === "problem" ? "font-hand text-lg leading-tight text-ink" : "text-sm text-smoke"}`}>
                              {fn(p)}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 flex items-center gap-1.5 border-t border-dashed border-line pt-4 text-sm font-medium text-ink">
                    open the case study
                    <span className="inline-block text-ember transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </p>
                </div>
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
