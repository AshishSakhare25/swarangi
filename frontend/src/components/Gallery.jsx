import Reveal from "@/components/Reveal";
import { Note } from "@/components/annotations";

const PIECES = [
  {
    id: 1, caption: "sketch 01", kind: "pencil on paper",
    art: (
      <svg viewBox="0 0 200 240" className="h-full w-full" aria-hidden="true">
        <rect width="200" height="240" fill="#F5F1E8" />
        <path d="M40 60 C 80 40, 130 50, 160 80 M 50 100 C 90 90, 140 105, 155 130 M 45 150 C 70 140, 120 150, 150 170" stroke="#1A1A1A" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <circle cx="70" cy="185" r="14" fill="none" stroke="#FF5A36" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    id: 2, caption: "colour study", kind: "gouache swatches",
    art: (
      <div className="grid h-full w-full grid-cols-2" aria-hidden="true">
        <div className="bg-lav" /><div className="bg-sage" />
        <div className="bg-skywash" /><div className="bg-ember/80" />
      </div>
    ),
  },
  {
    id: 3, caption: "photograph", kind: "evening light",
    art: (
      <svg viewBox="0 0 200 240" className="h-full w-full" aria-hidden="true">
        <rect width="200" height="240" fill="#E2EBF4" />
        <rect y="150" width="200" height="90" fill="#1A1A1A" />
        <circle cx="140" cy="90" r="30" fill="#FF5A36" opacity="0.9" />
        <path d="M0 150 L 60 110 L 120 150 Z" fill="#52524E" />
      </svg>
    ),
  },
  {
    id: 4, caption: "painting", kind: "acrylic blobs",
    art: (
      <svg viewBox="0 0 200 240" className="h-full w-full" aria-hidden="true">
        <rect width="200" height="240" fill="#FBF9F5" />
        <path d="M60 60 C 90 30, 150 45, 145 85 C 140 120, 80 125, 60 100 C 45 80, 45 75, 60 60 Z" fill="#EADEF0" />
        <path d="M70 140 C 100 120, 160 140, 150 180 C 140 215, 70 210, 55 180 C 45 155, 55 150, 70 140 Z" fill="#E3EDE3" />
        <circle cx="155" cy="70" r="10" fill="#FF5A36" />
      </svg>
    ),
  },
  {
    id: 5, caption: "illustration", kind: "ink figure",
    art: (
      <svg viewBox="0 0 200 240" className="h-full w-full" aria-hidden="true">
        <rect width="200" height="240" fill="#F5F1E8" />
        <circle cx="100" cy="70" r="22" fill="none" stroke="#1A1A1A" strokeWidth="2" />
        <path d="M100 92 L 100 160 M 100 110 L 65 140 M 100 110 L 135 135 M 100 160 L 75 210 M 100 160 L 125 210" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M135 135 C 150 125, 160 110, 158 95" stroke="#FF5A36" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 6, caption: "experiment", kind: "dot grid study",
    art: (
      <svg viewBox="0 0 200 240" className="h-full w-full" aria-hidden="true">
        <rect width="200" height="240" fill="#FBF9F5" />
        {Array.from({ length: 6 }).map((_, r) =>
          Array.from({ length: 5 }).map((__, c) => (
            <circle key={`${r}-${c}`} cx={28 + c * 36} cy={32 + r * 36} r={(r + c) % 4 === 0 ? 6 : 2.5} fill={(r + c) % 4 === 0 ? "#FF5A36" : "#1A1A1A"} opacity={(r + c) % 4 === 0 ? 1 : 0.35} />
          ))
        )}
      </svg>
    ),
  },
];

export default function Gallery() {
  return (
    <section data-testid="art-gallery-section" className="border-y border-line bg-cream/40 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">05 — outside the screen</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Outside the <span className="italic text-ember">screen.</span>
          </h2>
          <p className="mt-4 text-base text-smoke">I still make things with my hands.</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {PIECES.map((p, i) => (
            <Reveal key={p.id} delay={0.06 * i} className={i % 3 === 1 ? "lg:mt-10" : ""}>
              <figure
                data-testid={`gallery-item-${p.id}`}
                className="group overflow-hidden rounded-sm border border-line bg-white shadow-paper transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:rotate-[0.6deg] hover:shadow-lift"
              >
                <div className="aspect-[5/6] overflow-hidden">{p.art}</div>
                <figcaption className="flex items-baseline justify-between px-4 py-3">
                  <span className="font-hand text-lg text-ink">{p.caption}</span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-ash">{p.kind} · placeholder</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Note className="mt-12" rotate={-1.5}>maybe that&apos;s why I notice colour before I notice a button.</Note>
        </Reveal>
      </div>
    </section>
  );
}
