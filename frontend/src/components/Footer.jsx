import { scrollToHash } from "@/components/Nav";

const LINKS = [
  ["Work", "#work"],
  ["Thinking", "#thinking"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Footer() {
  return (
    <footer data-testid="footer-section" className="border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.25em]">
              Swarangi Yeole<span className="text-ember">.</span>
            </p>
            <p className="mt-3 font-serif text-lg italic text-paper/70">Product Designer</p>
            <p className="mt-1 text-sm text-paper/50">UI/UX · Visual Design · Product Thinking</p>
            <p className="mt-6 font-hand text-xl text-paper/70">Designed with curiosity. Built with care.</p>
          </div>
          <nav className="flex flex-col gap-2.5" aria-label="Footer">
            {LINKS.map(([label, hash]) => (
              <button
                key={hash}
                data-testid={`footer-link-${label.toLowerCase()}`}
                onClick={() => scrollToHash(hash)}
                className="w-fit text-sm text-paper/70 transition-colors duration-200 hover:text-ember"
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper/15 pt-8 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-paper/50">© 2026 Swarangi Yeole</p>
          <p data-testid="footer-easter-egg" className="font-hand text-lg text-paper/50">
            Built from scratch. No template survived.
          </p>
        </div>
      </div>
    </footer>
  );
}
