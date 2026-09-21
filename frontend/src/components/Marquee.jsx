const ITEMS = [
  { w: "Product Design", ember: false },
  { w: "UI/UX", ember: true },
  { w: "Visual Thinking", ember: false },
  { w: "Product Thinking", ember: true },
  { w: "Interaction", ember: false },
  { w: "Design Systems", ember: true },
  { w: "Motion", ember: false },
  { w: "Prototyping", ember: false },
  { w: "Creative Exploration", ember: true },
];

const Row = () => (
  <>
    {ITEMS.map((item) => (
      <span key={item.w} className="mx-6 flex items-center gap-12">
        <span
          className={`font-serif text-3xl italic tracking-tight sm:text-4xl ${
            item.ember ? "text-ember" : "text-ink/80"
          }`}
        >
          {item.w}
        </span>
        <span className="text-xl text-ash/50" aria-hidden="true">·</span>
      </span>
    ))}
  </>
);

export default function Marquee() {
  return (
    <div data-testid="editorial-marquee" className="overflow-hidden border-y border-line bg-cream/50 py-5" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center">
        <div className="flex items-center"><Row /><Row /></div>
        <div className="flex items-center"><Row /><Row /></div>
      </div>
    </div>
  );
}
