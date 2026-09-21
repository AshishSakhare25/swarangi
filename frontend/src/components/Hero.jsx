import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { HandArrow } from "@/components/annotations";

const STAGES = ["THOUGHT", "SKETCH", "STRUCTURE", "PRODUCT"];

const MaskLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.span>
  </span>
);

const Stage = ({ progress, range, className = "", children }) => {
  const [a, b, c, d] = range;
  const opacity = useTransform(progress, [a, b, c, d], [0, 1, 1, 0]);
  const scale = useTransform(progress, [a, b, c, d], [0.94, 1, 1, 1.04]);
  return (
    <motion.div style={{ opacity, scale }} className={`absolute inset-0 ${className}`}>
      {children}
    </motion.div>
  );
};

const ThoughtStage = () => (
  <div className="relative h-full w-full">
    {[
      { t: "what if…", x: "12%", y: "16%", r: -6 },
      { t: "why does this feel off?", x: "44%", y: "8%", r: 3 },
      { t: "people first", x: "64%", y: "34%", r: -3 },
      { t: "hmm.", x: "20%", y: "52%", r: 5 },
      { t: "what happens next?", x: "52%", y: "62%", r: -4 },
      { t: "too many things at once", x: "24%", y: "78%", r: 2 },
    ].map((n) => (
      <motion.span
        key={n.t}
        className="absolute font-hand text-xl text-smoke sm:text-2xl"
        style={{ left: n.x, top: n.y }}
        initial={{ opacity: 0, rotate: n.r }}
        animate={{ opacity: 1, rotate: n.r, y: [0, -7, 0] }}
        transition={{
          opacity: { duration: 0.8 },
          y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        {n.t}
      </motion.span>
    ))}
    <svg viewBox="0 0 60 40" className="absolute right-[16%] top-[62%] w-12 opacity-60" aria-hidden="true">
      <circle cx="18" cy="20" r="13" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      <circle cx="42" cy="12" r="4" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      <circle cx="50" cy="26" r="2.5" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
    </svg>
  </div>
);

const SketchStage = ({ progress }) => {
  const draw = useTransform(progress, [0.26, 0.46], [0, 1]);
  return (
    <div className="flex h-full w-full items-center justify-center">
      <svg viewBox="0 0 200 260" className="h-[82%]" fill="none" aria-hidden="true">
        <motion.path
          d="M42 18 C 90 12, 150 16, 158 20 C 166 24, 162 120, 160 236 C 130 244, 70 246, 42 240 C 36 180, 38 60, 42 18 Z"
          stroke="#1A1A1A"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ pathLength: draw }}
        />
        <motion.path d="M52 44 C 90 40, 130 44, 148 42" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" style={{ pathLength: draw }} />
        <motion.path d="M52 70 C 70 66, 96 70, 110 68 M 52 86 C 80 82, 120 88, 146 84 M 52 102 C 72 98, 100 104, 128 100" stroke="#52524E" strokeWidth="1.8" strokeLinecap="round" style={{ pathLength: draw }} />
        <motion.path d="M52 130 C 70 126, 96 130, 108 128 C 112 138, 110 152, 106 156 C 88 158, 66 156, 54 154 C 50 146, 50 136, 52 130 Z" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" style={{ pathLength: draw }} />
        <motion.path d="M120 132 C 134 130, 146 132, 148 134 C 150 142, 148 150, 146 152 M 124 148 l 10 6 M 134 148 l -10 6" stroke="#52524E" strokeWidth="1.8" strokeLinecap="round" style={{ pathLength: draw }} />
        <motion.path d="M60 196 C 84 190, 122 192, 142 194 C 146 202, 144 210, 140 214 C 114 218, 76 218, 60 214 C 56 208, 56 202, 60 196 Z" stroke="#FF5A36" strokeWidth="2.2" strokeLinecap="round" style={{ pathLength: draw }} />
      </svg>
    </div>
  );
};

const WireStage = () => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="flex h-[80%] w-[62%] flex-col gap-2.5 rounded-md border-[1.5px] border-ink/70 bg-white p-3.5">
      <div className="h-2.5 w-2/5 rounded-sm bg-ink/70" />
      <div className="mt-1 space-y-1.5">
        <div className="h-1.5 w-full rounded-sm bg-ink/15" />
        <div className="h-1.5 w-11/12 rounded-sm bg-ink/15" />
        <div className="h-1.5 w-3/5 rounded-sm bg-ink/15" />
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2.5">
        <div className="h-16 rounded-sm border border-ink/25 bg-cream" />
        <div className="h-16 rounded-sm border border-ink/25 bg-cream" />
      </div>
      <div className="mt-auto h-8 w-3/5 self-center rounded-full border-[1.5px] border-ink/60" />
    </div>
  </div>
);

const ProductStage = () => (
  <div className="flex h-full w-full items-center justify-center">
    <div className="flex h-[80%] w-[62%] flex-col gap-2.5 overflow-hidden rounded-xl border border-line bg-white p-3.5 shadow-lift">
      <div className="-m-3.5 mb-0 flex items-center gap-2 bg-lav px-3.5 py-2.5">
        <div className="h-4 w-4 rounded-full bg-ember" />
        <div className="h-2 w-16 rounded-full bg-ink/60" />
        <div className="ml-auto h-2 w-8 rounded-full bg-ink/20" />
      </div>
      <div className="mt-1.5 h-2.5 w-3/5 rounded-full bg-ink/80" />
      <div className="space-y-1.5">
        <div className="h-1.5 w-full rounded-full bg-ink/15" />
        <div className="h-1.5 w-2/3 rounded-full bg-ink/15" />
      </div>
      <div className="mt-1 grid grid-cols-2 gap-2.5">
        <div className="flex h-16 flex-col justify-end rounded-lg bg-sage p-2">
          <div className="h-1.5 w-3/4 rounded-full bg-ink/40" />
        </div>
        <div className="flex h-16 flex-col justify-end rounded-lg bg-skywash p-2">
          <div className="h-1.5 w-1/2 rounded-full bg-ink/40" />
        </div>
      </div>
      <div className="mt-auto flex h-8 w-3/5 items-center justify-center self-center rounded-full bg-ember">
        <div className="h-1.5 w-10 rounded-full bg-white/90" />
      </div>
    </div>
  </div>
);

export default function Hero() {
  const ref = useRef(null);
  const [phase, setPhase] = useState(0);
  const [stageIdx, setStageIdx] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const noteY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const canvasY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = v < 0.24 ? 0 : v < 0.5 ? 1 : v < 0.74 ? 2 : 3;
    setStageIdx(idx);
  });

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2400);
    return () => clearTimeout(t1);
  }, []);

  return (
    <section ref={ref} data-testid="hero-section" className="relative h-[340vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-6 pt-20 md:grid-cols-2 md:gap-6">
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-ash"
            >
              my brain is a canvas
            </motion.p>

            <h1 data-testid="hero-headline" className="font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              <AnimatePresence mode="wait">
                {phase === 0 ? (
                  <motion.span
                    key="l1"
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.5 }}
                    className="block"
                  >
                    <MaskLine delay={0.45}>I don&apos;t just</MaskLine>
                    <MaskLine delay={0.58}>
                      design <span className="italic text-ember">screens.</span>
                    </MaskLine>
                  </motion.span>
                ) : (
                  <motion.span
                    key="l2"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    I explore <span className="italic text-ember">ideas.</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7"
            >
              <p className="font-serif text-2xl italic tracking-tight text-ink sm:text-3xl">Swarangi Yeole</p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-smoke">Product Designer</p>
              <p className="mt-5 max-w-md text-base leading-relaxed text-smoke">
                Product Designer with 2+ years of experience designing web and mobile experiences across
                healthcare, professional networking, AI, and SaaS.
              </p>
            </motion.div>

            <motion.div
              style={{ y: noteY }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.8 }}
              className="mt-8 flex items-start gap-1"
            >
              <p data-testid="hero-annotation" className="max-w-[220px] font-hand text-xl leading-snug text-ember" style={{ transform: "rotate(-2deg)" }}>
                this is where the messy ideas begin
              </p>
              <HandArrow className="mt-4 w-14 shrink-0" stroke="#FF5A36" />
            </motion.div>
          </div>

          <motion.div
            data-testid="hero-kinetic-canvas"
            style={{ y: canvasY }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px]"
          >
            <div className="scribble-border absolute -inset-3 opacity-25" aria-hidden="true" />
            <div className="absolute inset-0 overflow-hidden rounded-sm border border-line bg-cream/60">
              <Stage progress={scrollYProgress} range={[-0.01, 0.01, 0.2, 0.28]}>
                <ThoughtStage />
              </Stage>
              <Stage progress={scrollYProgress} range={[0.22, 0.3, 0.46, 0.54]}>
                <SketchStage progress={scrollYProgress} />
              </Stage>
              <Stage progress={scrollYProgress} range={[0.48, 0.56, 0.7, 0.78]}>
                <WireStage />
              </Stage>
              <Stage progress={scrollYProgress} range={[0.72, 0.8, 2, 2]}>
                <ProductStage />
              </Stage>
            </div>

            <div className="absolute -bottom-12 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap">
              {STAGES.map((s, i) => (
                <span key={s} className="flex items-center gap-2">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                      stageIdx === i ? "text-ember" : "text-ash/60"
                    }`}
                  >
                    {s}
                  </span>
                  {i < STAGES.length - 1 && <span className="text-ash/40">→</span>}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6, duration: 1 }}
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5"
        >
          <span className="font-hand text-lg text-smoke">scroll to see how I think</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="text-ember"
            aria-hidden="true"
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
