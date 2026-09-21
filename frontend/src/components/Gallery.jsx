import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Note } from "@/components/annotations";

const PIECES = [
  {
    id: 1, src: "/art-5.jpg", caption: "the sketchbook, outdoors", kind: "pencil on paper",
    note: "Pencil on paper, drawn outside with plants for company. The sketchbook goes where I go.",
    alt: "Pencil sketch of a young woman shielding her eyes, in an open sketchbook held up against green plants",
  },
  {
    id: 2, src: "/art-4.jpg", caption: "lotus, in two moods", kind: "watercolour",
    note: "One lotus, two moods — warm above, cool below. Painted slowly, water doing most of the talking.",
    alt: "Watercolour painting of a white lotus between a warm orange wash and a cool blue wash, paint palette beside it",
  },
  {
    id: 3, src: "/art-3.jpg", caption: "sunflowers, painted in the park", kind: "watercolour · plein air",
    note: "Painted in the park — sunflowers from life, grass for a desk, paint tin within reach.",
    alt: "Small sunflower field watercolour in a sketchbook lying on grass next to a paint tin and brushes",
  },
  {
    id: 4, src: "/art-2.jpg", caption: "a gate in mathura", kind: "photograph",
    note: "Photographed in Mathura. Someone designed this gate decades ago — it still out-designs most doors.",
    alt: "Photograph of a tall ornate rusted iron gate with intricate scrollwork in Mathura",
  },
  {
    id: 5, src: "/art-1.jpg", caption: "radha's feet, krishna's hands", kind: "acrylic on canvas",
    note: "Acrylic on canvas — Radha's feet in Krishna's hands. The most patient thing I've painted.",
    alt: "Acrylic painting of Krishna's blue hands holding Radha's feet, with a pink lotus beside them",
  },
];

export default function Gallery() {
  const [openId, setOpenId] = useState(null);
  const openPiece = PIECES.find((p) => p.id === openId);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenId(null);
    if (openId) {
      document.body.style.overflow = "hidden";
      window.__lenis?.stop();
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      window.__lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [openId]);

  return (
    <section data-testid="art-gallery-section" className="border-y border-line bg-cream/40 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">05 — outside the screen</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Outside the <span className="italic text-ember">screen.</span>
          </h2>
          <p className="mt-4 text-base text-smoke">I still make things with my hands.</p>
          <Note className="mt-2" rotate={-1}>tap any piece to see it properly</Note>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {PIECES.map((p, i) => (
            <Reveal key={p.id} delay={0.06 * i} className={i % 3 === 1 ? "lg:mt-10" : ""}>
              <figure
                data-testid={`gallery-item-${p.id}`}
                role="button"
                tabIndex={0}
                aria-label={`View ${p.caption} full screen`}
                onClick={() => setOpenId(p.id)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpenId(p.id)}
                className="group cursor-pointer overflow-hidden rounded-sm border border-line bg-white shadow-paper transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:rotate-[0.6deg] hover:shadow-lift"
              >
                <div className="flex aspect-[5/6] items-center justify-center overflow-hidden bg-cream p-3">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="max-h-full max-w-full rounded-[2px] object-contain shadow-paper transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="flex items-baseline justify-between gap-3 px-4 py-3">
                  <span className="font-hand text-lg leading-tight text-ink">{p.caption}</span>
                  <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.15em] text-ash">{p.kind}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Note className="mt-12" rotate={-1.5}>maybe that&apos;s why I notice colour before I notice a button.</Note>
        </Reveal>
      </div>

      <AnimatePresence>
        {openPiece && (
          <motion.div
            data-testid="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setOpenId(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={openPiece.caption}
          >
            <button
              data-testid="lightbox-close-button"
              onClick={() => setOpenId(null)}
              aria-label="Close artwork view"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-paper/30 text-paper transition-colors hover:border-ember hover:text-ember"
            >
              <X size={18} />
            </button>
            <motion.figure
              initial={{ opacity: 0, y: 26, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full flex-col items-center"
            >
              <img
                src={openPiece.src}
                alt={openPiece.alt}
                className="max-h-[68vh] max-w-full rounded-sm border-4 border-paper object-contain shadow-lift"
              />
              <figcaption className="mt-5 max-w-md text-center">
                <p className="font-hand text-2xl text-paper">{openPiece.caption}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">{openPiece.kind}</p>
                <p data-testid="lightbox-note" className="mt-3 text-sm leading-relaxed text-paper/75">{openPiece.note}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
