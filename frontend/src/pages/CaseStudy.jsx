import { useEffect } from "react";
import { useLocation, useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MessyClearSlider from "@/components/MessyClearSlider";
import Reveal from "@/components/Reveal";
import { HandUnderline, Note } from "@/components/annotations";
import { PROJECTS, getProject } from "@/data/projects";

const TINT_BG = { skywash: "bg-skywash", sage: "bg-sage", lav: "bg-lav" };

const Chapter = ({ num, title, children }) => (
  <Reveal className="grid grid-cols-1 gap-4 border-t border-line py-12 md:grid-cols-[220px_1fr] md:gap-10">
    <div className="flex items-baseline gap-3 md:flex-col md:gap-2">
      <span className="font-mono text-xs text-ember">{num}</span>
      <h2 className="font-mono text-xs uppercase tracking-[0.28em] text-ink">{title}</h2>
    </div>
    <div className="max-w-2xl">{children}</div>
  </Reveal>
);

const MockFrame = ({ tint, caption }) => (
  <figure className="group rounded-md border border-line bg-white p-4 shadow-paper transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift">
    <div className="flex aspect-[4/3] flex-col gap-2 overflow-hidden rounded-md border border-line bg-paper p-3">
      <div className={`-m-3 mb-0 flex items-center gap-1.5 px-3 py-2 ${TINT_BG[tint]}`}>
        <span className="h-2 w-2 rounded-full bg-ember" />
        <span className="h-1.5 w-12 rounded-full bg-ink/50" />
      </div>
      <div className="mt-1.5 h-2 w-1/2 rounded-full bg-ink/70" />
      <div className="h-1.5 w-3/4 rounded-full bg-ink/15" />
      <div className="grid flex-1 grid-cols-3 gap-2">
        <div className={`rounded ${TINT_BG[tint]}`} />
        <div className="rounded bg-cream" />
        <div className="rounded bg-cream" />
      </div>
      <div className="h-5 w-2/5 self-end rounded-full bg-ember/90" />
    </div>
    <figcaption className="mt-3 flex items-baseline justify-between">
      <span className="font-hand text-lg text-ink">{caption}</span>
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ash">screen placeholder</span>
    </figcaption>
  </figure>
);

const SlothStory = () => {
  const steps = [
    { c: "climbs the tree", slothY: "62%" },
    { c: "reaches the fruit", slothY: "18%", fruit: true },
    { c: "climbs back down", slothY: "48%", fruit: true },
    { c: "enjoys it", slothY: "70%", fruit: true, eat: true },
  ];
  return (
    <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {steps.map((s, i) => (
        <motion.div
          key={s.c}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
          className="relative aspect-[3/4] overflow-hidden rounded-md border border-line bg-sage/50"
        >
          <div className="absolute bottom-0 left-1/2 top-0 w-[3px] -translate-x-1/2 bg-ink/25" aria-hidden="true" />
          <div className="absolute left-1/2 top-[14%] h-2.5 w-2.5 -translate-x-6 rounded-full bg-ember" aria-hidden="true" />
          <div
            className="absolute h-8 w-6 -translate-x-1/2 rounded-full border-[1.5px] border-ink/60 bg-lav transition-all"
            style={{ left: "50%", top: s.slothY }}
            aria-hidden="true"
          >
            {s.fruit && <span className="absolute -right-2 -top-1 h-2.5 w-2.5 rounded-full bg-ember" />}
          </div>
          <p className="absolute inset-x-2 bottom-2 text-center font-hand text-base leading-tight text-ink">{s.c}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (!project) return <Navigate to="/" replace />;

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const c = project.chapters;

  return (
    <div data-testid="case-study-page">
      <Nav />
      <main className="mx-auto max-w-5xl px-6 pt-32 sm:pt-40">
        <button
          data-testid="case-study-close-btn"
          onClick={() => navigate("/", { state: { scrollTo: "#work" } })}
          className="group font-mono text-xs uppercase tracking-[0.25em] text-smoke transition-colors hover:text-ember"
        >
          <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true">←</span> all work
        </button>

        <Reveal className="mt-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">
            {project.index} — {project.domain}
          </p>
          <h1 className="mt-4 font-serif text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-xl italic leading-snug text-smoke sm:text-2xl">
            {project.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid grid-cols-2 gap-6 border-y border-line py-8 sm:grid-cols-4">
          {[["role", project.role], ["platform", project.platform], ["domain", project.domain], ["timeline", project.timeline]].map(([k, v]) => (
            <div key={k}>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">{k}</p>
              <p className="mt-1.5 text-sm font-medium text-ink">{v}</p>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.12} className="mt-16">
          <p className="mb-6 text-center font-hand text-2xl text-smoke" style={{ transform: "rotate(-1deg)" }}>
            drag to watch the mess become a product
          </p>
          <MessyClearSlider project={project} />
        </Reveal>

        <div className="mt-24">
          <Chapter num="01" title="The mess">
            <p className="text-base leading-relaxed text-smoke sm:text-lg">{c.mess}</p>
          </Chapter>

          <Chapter num="02" title="The questions">
            <ul className="space-y-4">
              {c.questions.map((q, i) => (
                <li key={q} className="flex items-baseline gap-4">
                  <span className="shrink-0 font-mono text-xs text-ember">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-hand text-2xl leading-snug text-ink">{q}</span>
                </li>
              ))}
            </ul>
          </Chapter>

          <Chapter num="03" title="The structure">
            <p className="text-base leading-relaxed text-smoke sm:text-lg">{c.structure}</p>
            <div className="mt-8 rounded-md border border-dashed border-ink/30 bg-cream/50 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ash">structure sketch — placeholder</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {["entry", "decision", "flow", "system", "handoff"].map((s, i) => (
                  <span key={s} className="flex items-center gap-3">
                    <span className="rounded-full border-[1.5px] border-ink/50 bg-white px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em]">{s}</span>
                    {i < 4 && <span className="text-ember" aria-hidden="true">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </Chapter>

          <Chapter num="04" title="The interface">
            <p className="text-base leading-relaxed text-smoke sm:text-lg">{c.interface}</p>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <MockFrame tint={project.tint} caption="primary view" />
              <MockFrame tint={project.tint} caption="secondary view" />
            </div>
          </Chapter>

          <Chapter num="05" title="The experience">
            <p className="text-base leading-relaxed text-smoke sm:text-lg">{c.experience}</p>
            {project.slug === "goodlives" && (
              <>
                <Note className="mt-6" rotate={-1.5}>the sloth carries the whole signup — slow on purpose</Note>
                <SlothStory />
              </>
            )}
          </Chapter>

          <Chapter num="06" title="What changed">
            <p className="font-serif text-xl italic leading-relaxed text-ink sm:text-2xl">{c.changed}</p>
            <HandUnderline className="mt-2 w-52" />
            {c.note && (
              <p className="mt-8 rounded-md border border-line bg-cream/50 p-5 font-hand text-xl leading-snug text-smoke">
                note: {c.note}
              </p>
            )}
          </Chapter>
        </div>

        <Reveal className="mt-10 border-t border-line py-16 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">next project</p>
          <Link
            data-testid="case-study-next-link"
            to={`/work/${next.slug}`}
            className="group mt-4 inline-block font-serif text-3xl italic tracking-tight text-ink transition-colors duration-300 hover:text-ember sm:text-4xl"
          >
            {next.name}
            <span className="ml-2 inline-block not-italic transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
