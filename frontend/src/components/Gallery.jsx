import Reveal from "@/components/Reveal";
import { Note } from "@/components/annotations";

const PIECES = [
  { id: 1, src: "/art-5.jpg", caption: "the sketchbook, outdoors", kind: "pencil on paper", alt: "Pencil sketch of a resting woman's face in an open sketchbook, held up against green plants" },
  { id: 2, src: "/art-4.jpg", caption: "lotus, in two moods", kind: "watercolour", alt: "Watercolour painting of a white lotus between a warm orange wash and a cool blue wash, paint palette beside it" },
  { id: 3, src: "/art-3.jpg", caption: "sunflowers, painted in the park", kind: "watercolour · plein air", alt: "Small sunflower field watercolour in a sketchbook lying on grass next to a paint tin and brushes" },
  { id: 4, src: "/art-2.jpg", caption: "a gate in mathura", kind: "photograph", alt: "Photograph of an ornate rusted iron gate with intricate scrollwork in Mathura" },
  { id: 5, src: "/art-1.jpg", caption: "radha's feet, krishna's hands", kind: "acrylic on canvas", alt: "Acrylic painting of Krishna's blue hands holding Radha's feet, with a pink lotus beside them" },
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
    </section>
  );
}
