import { motion } from "framer-motion";

export const HandUnderline = ({ className = "", stroke = "#FF5A36", delay = 0 }) => (
  <svg viewBox="0 0 220 14" fill="none" className={className} aria-hidden="true">
    <motion.path
      d="M3 9 C 40 4, 80 12, 118 7 S 190 5, 217 8"
      stroke={stroke}
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
    />
  </svg>
);

export const HandArrow = ({ className = "", stroke = "#1A1A1A", flip = false }) => (
  <svg
    viewBox="0 0 90 40"
    fill="none"
    className={className}
    style={flip ? { transform: "scaleX(-1)" } : undefined}
    aria-hidden="true"
  >
    <motion.path
      d="M4 8 C 30 4, 55 10, 74 26 M 74 26 l -11 -3 M 74 26 l -2 -11"
      stroke={stroke}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    />
  </svg>
);

export const ScribbleCircle = ({ className = "", stroke = "#FF5A36" }) => (
  <svg viewBox="0 0 200 80" fill="none" className={className} aria-hidden="true">
    <motion.path
      d="M100 6 C 40 6, 8 22, 8 40 C 8 60, 55 76, 105 74 C 155 72, 192 58, 191 38 C 190 20, 150 5, 92 7"
      stroke={stroke}
      strokeWidth="2.5"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
    />
  </svg>
);

export const Note = ({ children, className = "", rotate = -2 }) => (
  <span
    className={`inline-block font-hand text-xl leading-snug text-ember ${className}`}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    {children}
  </span>
);
