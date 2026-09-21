import { useEffect, useRef, useState } from "react";
import { useLocation, useParams, useNavigate, Link, Navigate } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
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
  goodlives: [["mobile", "wellness app — mobile"], ["dashboard", "web experience"]],
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

const SLOTH_STAGES = ["climbs the tree", "reaches the fruit", "climbs back down", "enjoys it"];

const SlothStory = () => {
  const ref = useRef(null);
  const [stage, setStage] = useState(0);
  const [hasFruit, setHasFruit] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.4"] });
  const rawY = useTransform(scrollYProgress, [0, 0.42, 0.52, 0.85, 1], [76, 14, 14, 60, 68]);
  const y = useSpring(rawY, { stiffness: 80, damping: 18 });
  const left = useTransform(scrollYProgress, [0, 0.42, 0.85, 1], [30, 30, 62, 62]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setHasFruit(v > 0.48);
    setStage(v < 0.42 ? 0 : v < 0.54 ? 1 : v < 0.86 ? 2 : 3);
  });

  return (
    <div data-testid="sloth-scene" className="mt-8">
      <div ref={ref} className="relative h-[380px] overflow-hidden rounded-md border border-line bg-sage/40 sm:h-[420px]">
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M30 100 C 29 70, 31 35, 30 4" stroke="#1A1A1A" strokeOpacity="0.5" strokeWidth="0.7" fill="none" />
          <path d="M30 22 C 36 18, 41 18, 46 21 M 30 40 C 24 36, 19 36, 15 39" stroke="#1A1A1A" strokeOpacity="0.4" strokeWidth="0.5" fill="none" />
          {[[18, 30], [44, 34], [20, 58], [42, 10], [24, 12]].map(([x, yy]) => (
            <ellipse key={`${x}-${yy}`} cx={x} cy={yy} rx="3.4" ry="1.6" fill="#E3EDE3" stroke="#1A1A1A" strokeOpacity="0.35" strokeWidth="0.3" />
          ))}
        </svg>
        <motion.span
          className="absolute h-3.5 w-3.5 rounded-full bg-ember"
          style={{ left: "44%", top: "17%" }}
          animate={{ opacity: hasFruit ? 0 : 1, scale: hasFruit ? 0.4 : 1 }}
          transition={{ duration: 0.35 }}
          aria-hidden="true"
        />
        <motion.div
          className="absolute flex h-12 w-9 -translate-x-1/2 -translate-y-1/2 items-start justify-center rounded-full border-[1.5px] border-ink/60 bg-lav shadow-paper"
          style={{ top: useTransform(y, (v) => `${v}%`), left: useTransform(left, (v) => `${v}%`) }}
          aria-hidden="true"
        >
          <span className="mt-2.5 flex gap-1.5">
            <span className="h-1 w-1 rounded-full bg-ink/70" />
            <span className="h-1 w-1 rounded-full bg-ink/70" />
          </span>
          <motion.span
            className="absolute -right-2 top-0 h-3.5 w-3.5 rounded-full bg-ember"
            animate={{ opacity: hasFruit ? 1 : 0, scale: hasFruit ? 1 : 0.3 }}
            transition={{ duration: 0.35 }}
          />
        </motion.div>
        {stage === 3 && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-[18%] top-[52%] font-hand text-2xl text-ember"
            style={{ transform: "rotate(-3deg)" }}
          >
            mmm. worth the climb.
          </motion.p>
        )}
        <p className="absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[0.2em] text-ash">
          the signup, retold — scroll to move the sloth
        </p>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1.5">
        {SLOTH_STAGES.map((s, i) => (
          <span key={s} className={`flex items-center gap-1.5 font-hand text-lg transition-colors duration-300 ${stage === i ? "text-ember" : "text-ash/60"}`}>
            <span className="font-mono text-[9px]">{i + 1}</span>
            {s}
          </span>
        ))}
      </div>
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
              {MOCK_VARIANTS[project.slug].map(([variant, caption]) => (
                <MockFrame key={variant} project={project} variant={variant} caption={caption} />
              ))}
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
