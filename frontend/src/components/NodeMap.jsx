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
            <div className="flex w-44 flex-col gap-2 rounded-lg border-[1.5px] border-ink/70 bg-white p-3 shadow-paper">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-ember" />
                <span className="h-2 w-2 rounded-full bg-lav" />
                <span className="h-2 w-2 rounded-full bg-sage" />
              </div>
              <div className="h-1.5 w-3/4 rounded-full bg-ink/60" />
              <div className="h-1.5 w-1/2 rounded-full bg-ink/20" />
              <div className="mt-1 h-6 w-2/3 rounded-full bg-ember/90" />
              <p className="mt-1 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-ash">the screen</p>
            </div>
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
      <div className="mt-12 space-y-3 md:hidden">
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
