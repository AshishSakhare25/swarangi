import Reveal from "@/components/Reveal";
import { HandArrow, Note } from "@/components/annotations";

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
      <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2 md:gap-10">
        <Reveal className="relative order-2 md:order-1">
          <div data-testid="about-portrait" className="relative mx-auto aspect-[4/5] max-w-sm">
            <div className="scribble-border absolute -inset-3 opacity-30" aria-hidden="true" />
            <div className="relative h-full w-full overflow-hidden rounded-sm border border-line bg-cream">
              <img
                src="/portrait.jpg"
                alt="Swarangi Yeole — Product Designer, smiling at a café table"
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-full bg-paper/85 px-3 py-1 font-hand text-base text-ink" style={{ transform: "rotate(-2deg)" }}>
                hi, that&apos;s me
              </span>
            </div>

            <div data-testid="about-annotations" className="pointer-events-none absolute inset-0" aria-hidden="true">
              <Note className="absolute -left-6 top-8 sm:-left-12" rotate={-6}>art school brain</Note>
              <Note className="absolute -right-4 top-1/3 sm:-right-14" rotate={4}>notices colour first</Note>
              <Note className="absolute -left-2 bottom-16 sm:-left-10" rotate={3}>systems person</Note>
              <HandArrow className="absolute -left-3 top-20 w-12 sm:-left-8" stroke="#FF5A36" />
              <HandArrow className="absolute -right-2 bottom-28 w-12 sm:-right-6" stroke="#FF5A36" flip />
            </div>
          </div>
        </Reveal>

        <div className="order-1 md:order-2">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">04 — about</p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              I&apos;m equal parts <span className="italic text-ember">structure</span> and <span className="italic">scribble.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div data-testid="about-bio-text" className="mt-8 space-y-5 text-base leading-relaxed text-smoke">
              <p>
                I&apos;m a Product Designer with 2+ years of experience designing digital products across web and mobile.
              </p>
              <p>
                I enjoy taking complicated requirements, finding the thread that connects them, and turning them into
                experiences that feel clear and considered.
              </p>
              <p>
                My background in art naturally influences the way I think about products — composition, colour,
                movement, detail, and emotion all matter to me.
              </p>
              <p className="font-serif text-lg italic text-ink">
                I like systems, but I also like getting lost in colour.
              </p>
              <p className="border-t border-dashed border-line pt-5 font-mono text-xs uppercase tracking-[0.2em] text-ash">
                Gurgaon, India · B.Des — Product &amp; Industrial Design
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
