import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MessyClearSlider from "@/components/MessyClearSlider";
import Reveal from "@/components/Reveal";
import { HandUnderline } from "@/components/annotations";
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

const MockDashboard = ({ tint }) => (
  <div className="flex h-full w-full overflow-hidden rounded-md border border-line bg-paper">
    <div className="flex w-[18%] flex-col gap-2 border-r border-line bg-cream/70 p-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-ember" />
      <div className="mt-2 space-y-1.5">
        {[80, 60, 70, 50].map((w) => (
          <div key={w} className="h-1.5 rounded-full bg-ink/20" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
    <div className="flex flex-1 flex-col gap-2 p-2.5">
      <div className={`flex items-center gap-2 rounded px-2 py-1.5 ${TINT_BG[tint]}`}>
        <div className="h-1.5 w-16 rounded-full bg-ink/60" />
        <div className="ml-auto h-3.5 w-10 rounded-full bg-ember/90" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className={`h-10 rounded ${TINT_BG[tint]}`} />
        <div className="h-10 rounded bg-cream" />
        <div className="h-10 rounded bg-cream" />
      </div>
      <div className="flex-1 space-y-1.5 rounded border border-line bg-white p-2">
        {[90, 75, 82].map((w) => (
          <div key={w} className="flex items-center gap-2">
            <span className="h-3 w-3 shrink-0 rounded-full bg-ink/15" />
            <div className="h-1.5 rounded-full bg-ink/15" style={{ width: `${w * 0.7}%` }} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MockMobile = ({ tint }) => (
  <div className="flex h-full w-full items-center justify-center rounded-md border border-line bg-cream/50 p-3">
    <div className="flex h-full w-[46%] flex-col gap-2 overflow-hidden rounded-2xl border-[1.5px] border-ink/60 bg-white p-2">
      <div className={`rounded-lg px-2 py-2.5 ${TINT_BG[tint]}`}>
        <div className="h-2 w-2/3 rounded-full bg-ink/70" />
        <div className="mt-1 h-1.5 w-1/2 rounded-full bg-ink/25" />
      </div>
      <div className="rounded-lg bg-sage/70 p-2">
        <div className="h-1.5 w-3/4 rounded-full bg-ink/30" />
      </div>
      <div className="rounded-lg border border-line p-2">
        <div className="h-1.5 w-2/3 rounded-full bg-ink/20" />
        <div className="mt-1 h-1.5 w-1/2 rounded-full bg-ink/15" />
      </div>
      <div className="mt-auto flex h-6 items-center justify-center rounded-full bg-ember">
        <div className="h-1.5 w-8 rounded-full bg-white/90" />
      </div>
      <div className="flex justify-center gap-2 pt-1">
        {[0, 1, 2].map((d) => (
          <span key={d} className={`h-1.5 w-1.5 rounded-full ${d === 0 ? "bg-ink/70" : "bg-ink/20"}`} />
        ))}
      </div>
    </div>
  </div>
);

const MockAssistant = ({ tint }) => (
  <div className="flex h-full w-full flex-col gap-2 overflow-hidden rounded-md border border-line bg-paper p-3">
    <div className={`flex items-center gap-2 rounded px-2.5 py-2 ${TINT_BG[tint]}`}>
      <span className="h-3 w-3 rounded-full bg-ink/80" />
      <div className="h-1.5 w-20 rounded-full bg-ink/60" />
      <span className="ml-auto font-mono text-[8px] uppercase tracking-[0.15em] text-ink/50">ai</span>
    </div>
    <div className="flex-1 space-y-2 pt-1">
      <div className="ml-auto w-3/5 rounded-xl rounded-br-sm bg-ink p-2">
        <div className="h-1.5 w-full rounded-full bg-paper/50" />
        <div className="mt-1 h-1.5 w-2/3 rounded-full bg-paper/30" />
      </div>
      <div className={`w-3/4 rounded-xl rounded-bl-sm p-2 ${TINT_BG[tint]}`}>
        <div className="h-1.5 w-full rounded-full bg-ink/30" />
        <div className="mt-1 h-1.5 w-4/5 rounded-full bg-ink/20" />
        <div className="mt-1 h-1.5 w-1/2 rounded-full bg-ink/20" />
      </div>
      <div className="flex w-1/4 items-center gap-1 rounded-xl rounded-bl-sm border border-line bg-white p-2">
        {[0, 1, 2].map((d) => (
          <span key={d} className="h-1 w-1 animate-pulse rounded-full bg-ink/40" style={{ animationDelay: `${d * 0.2}s` }} />
        ))}
      </div>
    </div>
    <div className="flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5">
      <div className="h-1.5 flex-1 rounded-full bg-ink/15" />
      <span className="h-4 w-4 rounded-full bg-ember" />
    </div>
  </div>
);

const MOCK_VARIANTS = {
  mentblue: [["dashboard", "web dashboard — desktop"], ["mobile", "dashboard — mobile view"]],
  tx: [["assistant", "the assistant"], ["dashboard", "planner workspace"]],
};

const MockFrame = ({ project, variant, caption }) => (
  <figure className="group rounded-md border border-line bg-white p-4 shadow-paper transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift">
    <div className="aspect-[4/3] overflow-hidden">
      {variant === "dashboard" && <MockDashboard tint={project.tint} />}
      {variant === "mobile" && <MockMobile tint={project.tint} />}
      {variant === "assistant" && <MockAssistant tint={project.tint} />}
    </div>
    <figcaption className="mt-3 flex items-baseline justify-between">
      <span className="font-hand text-lg text-ink">{caption}</span>
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ash">screen placeholder</span>
    </figcaption>
  </figure>
);

const InterfaceCarousel = ({ shots, liveUrl }) => {
  const [idx, setIdx] = useState(0);
  const go = (d) => setIdx((i) => (i + d + shots.length) % shots.length);
  const shot = shots[idx];

  return (
    <figure data-testid="interface-carousel" className="group overflow-hidden rounded-md border border-line bg-white p-3 shadow-paper">
      <div className="relative overflow-hidden rounded-sm border border-line">
        <AnimatePresence mode="wait">
          <motion.img
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -26 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="max-h-[520px] w-full object-cover object-top"
          />
        </AnimatePresence>
        <button
          data-testid="carousel-prev"
          onClick={() => go(-1)}
          aria-label="Previous screen"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper/90 text-ink shadow-paper backdrop-blur transition-colors hover:border-ember hover:text-ember"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          data-testid="carousel-next"
          onClick={() => go(1)}
          aria-label="Next screen"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper/90 text-ink shadow-paper backdrop-blur transition-colors hover:border-ember hover:text-ember"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-3 px-1 pt-3">
        <span className="font-hand text-lg text-ink">{shot.caption}</span>
        <span className="flex items-center gap-1.5">
          {shots.map((_, i) => (
            <button
              key={i}
              data-testid={`carousel-dot-${i}`}
              onClick={() => setIdx(i)}
              aria-label={`Go to screen ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-5 bg-ember" : "w-1.5 bg-ink/20 hover:bg-ink/40"}`}
            />
          ))}
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ember">real screens · {idx + 1}/{shots.length}</span>
      </figcaption>
      {liveUrl && (
        <p className="px-1 pb-1 pt-2">
          <a
            data-testid="case-study-live-link"
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/live font-hand text-lg text-smoke transition-colors hover:text-ember"
          >
            visit <span className="border-b border-ember/50 text-ember">mentblue.com&nbsp;↗</span> to see the product live
          </a>
        </p>
      )}
    </figure>
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
            {project.interfaceShots || project.interfaceCarousel ? (
              <div className="mt-8 space-y-6">
                {project.interfaceCarousel && (
                  <InterfaceCarousel shots={project.interfaceCarousel} liveUrl={project.liveUrl} />
                )}
                {(project.interfaceShots || []).map((s) => (
                  <figure key={s.src} className="group overflow-hidden rounded-md border border-line bg-white p-3 shadow-paper transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift">
                    {s.scroll ? (
                      <div className="relative overflow-hidden rounded-sm border border-line bg-cream/60">
                        <div data-testid="website-scroll-box" className="max-h-[480px] overflow-y-auto">
                          <img src={s.src} alt={s.alt} loading="lazy" className="w-full object-top" />
                        </div>
                        <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-ink/80 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-paper">
                          scroll inside ↓
                        </span>
                      </div>
                    ) : (
                      <div className="overflow-hidden rounded-sm border border-line">
                        <img src={s.src} alt={s.alt} loading="lazy" className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]" />
                      </div>
                    )}
                    <figcaption className="flex items-baseline justify-between px-1 pt-3">
                      <span className="font-hand text-lg text-ink">{s.caption}</span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ember">real screen</span>
                    </figcaption>
                    {project.liveUrl && (
                      <p className="px-1 pb-1 pt-1.5">
                        <a
                          data-testid="case-study-live-link-website"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-hand text-lg text-smoke transition-colors hover:text-ember"
                        >
                          visit <span className="border-b border-ember/50 text-ember">mentblue.com&nbsp;↗</span> to see the product live
                        </a>
                      </p>
                    )}
                  </figure>
                ))}
              </div>
            ) : MOCK_VARIANTS[project.slug] ? (
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {MOCK_VARIANTS[project.slug].map(([variant, caption]) => (
                <MockFrame key={variant} project={project} variant={variant} caption={caption} />
              ))}
            </div>
            ) : null}
          </Chapter>

          <Chapter num="05" title="The experience">
            <p className="text-base leading-relaxed text-smoke sm:text-lg">{c.experience}</p>
            {project.slug === "goodlives" && (
              <>
                <div className="mt-8 flex justify-center">
                  <video
                    data-testid="gl-onboarding-video"
                    src="/gl-onboarding.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full max-w-sm rounded-xl border border-line bg-ink shadow-lift"
                  />
                </div>
                <p className="mt-6 text-center font-hand text-xl text-smoke" style={{ transform: "rotate(-1deg)" }}>
                  download the GoodLives app to see it live
                </p>
                <p className="mt-2 text-center font-hand text-lg text-smoke">
                  visit{" "}
                  <a
                    data-testid="goodlives-live-link"
                    href="https://goodlives.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-ember/50 text-ember transition-colors hover:text-emberdeep"
                  >
                    goodlives.in&nbsp;↗
                  </a>{" "}
                  to experience the web dashboard
                </p>
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
