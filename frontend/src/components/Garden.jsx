import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const PLANTS = [
  { id: "product-thinking", label: "PRODUCT THINKING", desc: "asking what problem we're actually solving", variant: 0 },
  { id: "ui", label: "UI DESIGN", desc: "interfaces that explain themselves", variant: 1 },
  { id: "visual", label: "VISUAL DESIGN", desc: "composition, colour, rhythm, emotion", variant: 2 },
  { id: "systems", label: "DESIGN SYSTEMS", desc: "patterns that scale without going stale", variant: 0 },
  { id: "motion", label: "MOTION", desc: "movement that means something", variant: 1 },
  { id: "art", label: "ART", desc: "the oldest habit I have", variant: 2 },
];

const Plant = ({ variant, active }) => {
  const stroke = active ? "#FF5A36" : "#1A1A1A";
  if (variant === 0)
    return (
      <svg viewBox="0 0 60 90" className="h-24 w-16 transition-colors duration-300" aria-hidden="true">
        <path d="M30 86 C 30 60, 30 40, 30 22" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M30 56 C 18 52, 12 42, 12 34 C 22 36, 30 44, 30 56 Z" fill={active ? "#E3EDE3" : "none"} stroke={stroke} strokeWidth="1.8" />
        <path d="M30 44 C 42 40, 48 30, 48 22 C 38 24, 30 32, 30 44 Z" fill={active ? "#E3EDE3" : "none"} stroke={stroke} strokeWidth="1.8" />
        <circle cx="30" cy="16" r="5" fill={active ? "#FF5A36" : "none"} stroke={stroke} strokeWidth="1.8" />
      </svg>
    );
  if (variant === 1)
    return (
      <svg viewBox="0 0 60 90" className="h-24 w-16" aria-hidden="true">
        <path d="M30 86 C 28 66, 34 50, 26 34 C 22 26, 26 16, 32 10" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
        <ellipse cx="20" cy="40" rx="8" ry="4.5" transform="rotate(-30 20 40)" fill={active ? "#EADEF0" : "none"} stroke={stroke} strokeWidth="1.8" />
        <ellipse cx="40" cy="28" rx="8" ry="4.5" transform="rotate(25 40 28)" fill={active ? "#EADEF0" : "none"} stroke={stroke} strokeWidth="1.8" />
        <ellipse cx="33" cy="12" rx="6" ry="4" transform="rotate(-15 33 12)" fill={active ? "#FF5A36" : "none"} stroke={stroke} strokeWidth="1.8" />
      </svg>
    );
  return (
    <svg viewBox="0 0 60 90" className="h-24 w-16" aria-hidden="true">
      <path d="M30 86 C 30 70, 30 56, 30 44" stroke={stroke} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M30 44 C 16 40, 10 26, 14 12 C 26 16, 32 28, 30 44 Z" fill={active ? "#E2EBF4" : "none"} stroke={stroke} strokeWidth="1.8" />
      <path d="M30 44 C 44 40, 50 26, 46 12 C 34 16, 28 28, 30 44 Z" fill={active ? "#E2EBF4" : "none"} stroke={stroke} strokeWidth="1.8" />
    </svg>
  );
};

export default function Garden() {
  const [active, setActive] = useState(null);

  return (
    <section data-testid="garden-section" className="border-y border-line bg-cream/40 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">07 — practice</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Things I&apos;ve <span className="italic text-ember">grown.</span>
          </h2>
          <p className="mt-5 max-w-md font-hand text-2xl leading-snug text-smoke">
            Some skills are tools.<br />Others are things I&apos;ve grown.
          </p>
        </Reveal>

        <div className="no-scrollbar mt-14 flex gap-4 overflow-x-auto pb-4 md:grid md:grid-cols-6 md:gap-6 md:overflow-visible">
          {PLANTS.map((p, i) => (
            <Reveal key={p.id} delay={0.07 * i} className="shrink-0">
              <motion.button
                data-testid={`garden-plant-${p.id}`}
                onMouseEnter={() => setActive(p.id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(p.id)}
                onBlur={() => setActive(null)}
                onClick={() => setActive(active === p.id ? null : p.id)}
                whileHover={{ y: -4 }}
                className={`flex w-36 flex-col items-center rounded-xl border bg-white px-3 pb-5 pt-6 shadow-paper transition-colors duration-300 md:w-auto ${
                  active === p.id ? "border-ember/60" : "border-line"
                }`}
              >
                <motion.div animate={active === p.id ? { scale: 1.12, rotate: -2 } : { scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 260, damping: 16 }}>
                  <Plant variant={p.variant} active={active === p.id} />
                </motion.div>
                <div className="mt-3 h-px w-10 bg-ink/20" aria-hidden="true" />
                <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-ink">{p.label}</p>
                <p className={`mt-1.5 text-center font-hand text-base leading-tight text-smoke transition-opacity duration-300 ${active === p.id ? "opacity-100" : "opacity-0 md:opacity-0"}`}>
                  {p.desc}
                </p>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
