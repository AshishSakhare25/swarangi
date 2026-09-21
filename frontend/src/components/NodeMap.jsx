import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { Note } from "@/components/annotations";

const NODES = [
  { id: "people", label: "PEOPLE", thought: "Who is actually using this?", x: 14, y: 14, testid: "node-item-people" },
  { id: "goals", label: "GOALS", thought: "What are they trying to accomplish?", x: 50, y: 5, testid: "node-item-goals" },
  { id: "content", label: "CONTENT", thought: "What actually needs to be visible?", x: 85, y: 17, testid: "node-item-content" },
  { id: "flow", label: "FLOW", thought: "What should happen next?", x: 87, y: 70, testid: "node-item-flow" },
  { id: "constraints", label: "CONSTRAINTS", thought: "What can't we change?", x: 48, y: 92, testid: "node-item-constraints" },
  { id: "visual", label: "VISUAL LANGUAGE", thought: "What should this experience feel like?", x: 13, y: 72, testid: "node-item-visual" },
  { id: "edge", label: "EDGE CASES", thought: "What happens when things don't go as planned?", x: 9, y: 41, testid: "node-item-edge-cases" },
];

const COLLAGE = [
  { src: "/screen-mentblue-home.jpg", alt: "MentBlue landing page", cls: "-left-16 top-1 w-36 -rotate-6 group-hover:-rotate-12 group-hover:-translate-x-3 group-hover:-translate-y-1" },
  { src: "/screen-tx-events.jpg", alt: "TX event type selection", cls: "-right-16 -top-3 w-36 rotate-6 group-hover:rotate-12 group-hover:translate-x-3 group-hover:-translate-y-2" },
  { src: "/screen-goodlives-dashboard.jpg", alt: "GoodLives dashboard", cls: "-left-12 bottom-0 w-32 rotate-3 group-hover:rotate-6 group-hover:-translate-x-2 group-hover:translate-y-2" },
  { src: "/screen-mentblue-dashboard.jpg", alt: "MentBlue dashboard", cls: "-right-14 bottom-2 w-32 -rotate-3 group-hover:-rotate-6 group-hover:translate-x-2 group-hover:translate-y-2" },
];

const ScreenCollage = ({ compact = false }) => (
  <div
    data-testid={compact ? "node-map-collage-mobile" : "node-map-collage"}
    className={`group relative ${compact ? "mx-auto h-40 w-64" : "h-44 w-56"}`}
  >
    {COLLAGE.map((s) => (
      <img
        key={s.src}
        src={s.src}
        alt={s.alt}
        loading="lazy"
        className={`absolute rounded-md border-2 border-white object-cover shadow-lift transition-all duration-500 ease-out ${s.cls}`}
      />
    ))}
    <img
      src="/screen-goodlives-signup.jpg"
      alt="GoodLives signup with the sloth"
      loading="lazy"
      className="absolute left-1/2 top-1/2 h-36 -translate-x-1/2 -translate-y-1/2 -rotate-2 rounded-md border-2 border-white object-cover shadow-lift transition-all duration-500 ease-out group-hover:rotate-0 group-hover:scale-105"
    />
    <p className="absolute -bottom-9 left-1/2 w-max -translate-x-1/2 font-hand text-lg text-smoke" style={{ transform: "translateX(-50%) rotate(-1.5deg)" }}>
      the screens so far
    </p>
  </div>
);

export default function NodeMap() {
  const [active, setActive] = useState(null);
  const activeNode = NODES.find((n) => n.id === active);

  return (
    <section id="thinking" data-testid="node-map-section" className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">01 — thinking</p>
        <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
          How I see a <span className="italic text-ember">product.</span>
        </h2>
        <p className="mt-4 max-w-md text-base text-smoke">A screen is only one small part of the experience.</p>
        <Note className="mt-3" rotate={-1}>hover the nodes — these are the questions in my head</Note>
      </Reveal>

      {/* Desktop radial map */}
      <Reveal delay={0.15} className="mt-14 hidden md:block">
        <div data-testid="node-map-container" className="relative h-[560px]">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {NODES.map((n) => (
              <motion.line
                key={n.id}
                x1="50" y1="50" x2={n.x} y2={n.y}
                stroke={active === n.id ? "#FF5A36" : "#1A1A1A"}
                strokeOpacity={active === n.id ? 0.7 : 0.18}
                strokeWidth="0.28"
                strokeDasharray="1.4 1"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: "easeOut" }}
                style={{ vectorEffect: "non-scaling-stroke" }}
              />
            ))}
          </svg>

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <ScreenCollage />
          </div>

          {NODES.map((n) => (
            <div key={n.id} className="absolute" style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)" }}>
              <motion.button
                data-testid={n.testid}
                onMouseEnter={() => setActive(n.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(n.id)}
                onBlur={() => setActive(null)}
                whileHover={{ scale: 1.06, rotate: -1 }}
                whileTap={{ scale: 0.97 }}
                className={`whitespace-nowrap rounded-full border-[1.5px] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 ${
                  active === n.id ? "border-ember bg-ember text-paper" : "border-ink/60 bg-paper text-ink hover:border-ember"
                }`}
              >
                {n.label}
              </motion.button>
              {active === n.id && (
                <motion.div
                  data-testid="node-thought-modal"
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute left-1/2 top-full z-20 mt-3 w-52 -translate-x-1/2 rounded-xl rounded-tl-sm border border-line bg-white p-4 shadow-lift"
                >
                  <p className="font-hand text-xl leading-snug text-ink">{n.thought}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </Reveal>

      {/* Mobile vertical story */}
      <div className="mt-12 md:hidden">
        <ScreenCollage compact />
      </div>
      <div className="mt-14 space-y-3 md:hidden">
        {NODES.map((n, i) => (
          <Reveal key={n.id} delay={i * 0.05}>
            <button
              data-testid={`${n.testid}-mobile`}
              onClick={() => setActive(active === n.id ? null : n.id)}
              aria-expanded={active === n.id}
              className={`w-full rounded-xl border-[1.5px] p-4 text-left transition-colors duration-200 ${
                active === n.id ? "border-ember bg-white" : "border-line bg-cream/50"
              }`}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink">{n.label}</span>
              {active === n.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-2 font-hand text-xl leading-snug text-smoke"
                >
                  {n.thought}
                </motion.p>
              )}
            </button>
          </Reveal>
        ))}
        {activeNode && <p className="sr-only">{activeNode.thought}</p>}
      </div>
    </section>
  );
}
