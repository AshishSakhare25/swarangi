const ITEMS = ["thought", "sketch", "structure", "product"];

export default function Marquee() {
  const row = (
    <>
      {ITEMS.map((w) => (
        <span key={w} className="mx-6 flex items-center gap-12">
          <span className="font-serif text-3xl italic tracking-tight text-ink/80 sm:text-4xl">{w}</span>
          <span className="font-hand text-2xl text-ember" aria-hidden="true">→</span>
        </span>
      ))}
      <span className="mx-6 font-serif text-3xl italic tracking-tight text-ember sm:text-4xl">repeat</span>
      <span className="font-hand text-2xl text-ember" aria-hidden="true">→</span>
    </>
  );

  return (
    <div data-testid="editorial-marquee" className="overflow-hidden border-y border-line bg-cream/50 py-5" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center">
        <div className="flex items-center">{row}{row}</div>
        <div className="flex items-center">{row}{row}</div>
      </div>
    </div>
  );
}
