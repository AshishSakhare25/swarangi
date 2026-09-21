import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Work", hash: "#work", testid: "nav-link-work" },
  { label: "Thinking", hash: "#thinking", testid: "nav-link-thinking" },
  { label: "About", hash: "#about", testid: "nav-link-about" },
  { label: "Contact", hash: "#contact", testid: "nav-link-contact" },
];

export const scrollToHash = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -90 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const go = (hash) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: hash } });
    } else {
      scrollToHash(hash);
    }
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        data-testid="nav-bar"
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-line bg-paper/85 py-2 pl-4 pr-2 shadow-paper backdrop-blur-md">
          <button
            data-testid="nav-logo"
            onClick={() => (location.pathname !== "/" ? navigate("/") : window.__lenis?.scrollTo(0))}
            className="group flex items-center gap-2.5"
            aria-label="Swarangi Yeole — home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink font-serif text-sm italic text-paper transition-colors duration-300 group-hover:bg-ember">
              S
            </span>
            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em]">
              Swarangi<span className="text-ember">.</span>
            </span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <button
                key={l.hash}
                data-testid={l.testid}
                onClick={() => go(l.hash)}
                className="rounded-full px-3.5 py-1.5 text-sm text-smoke transition-colors duration-200 hover:bg-cream hover:text-ink"
              >
                {l.label}
              </button>
            ))}
            <button
              data-testid="nav-cta-button"
              onClick={() => go("#contact")}
              className="group ml-2 flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-sm text-paper transition-colors duration-300 hover:bg-ember"
            >
              Let&apos;s talk
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </button>
          </div>

          <button
            data-testid="nav-mobile-menu-button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={17} /> : <Menu size={17} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="nav-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-paper md:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.button
                key={l.hash}
                data-testid={`nav-mobile-${l.label.toLowerCase()}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.4 }}
                onClick={() => go(l.hash)}
                className="font-serif text-4xl tracking-tight text-ink"
              >
                {l.label}
              </motion.button>
            ))}
            <motion.button
              data-testid="nav-mobile-cta"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.4 }}
              onClick={() => go("#contact")}
              className="mt-6 rounded-full bg-ink px-7 py-3 text-paper"
            >
              Let&apos;s talk →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
