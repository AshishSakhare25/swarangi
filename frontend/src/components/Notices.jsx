import Reveal from "@/components/Reveal";
import { HandUnderline } from "@/components/annotations";
import { Search, Filter, Bookmark, MessageCircle, Share2 } from "lucide-react";

const ScribbleRing = ({ className = "" }) => (
  <svg viewBox="0 0 130 44" fill="none" className={className} aria-hidden="true">
    <path
      d="M65 4 C 24 4, 5 12, 5 22 C 5 33, 34 41, 68 40 C 102 39, 126 31, 125 21 C 124 11, 98 3, 58 5"
      stroke="#FF5A36"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeDasharray="3 4"
    />
  </svg>
);

const Specimen = ({ num, cat, obs, note, children, className = "", testid }) => (
  <div
    data-testid={testid}
    className={`group w-full rounded-md border border-line bg-white p-4 shadow-paper transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-lift md:w-64 ${className}`}
  >
    <div className="flex items-baseline justify-between">
      <span className="font-mono text-xs font-medium text-ember">{num}</span>
      <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-ash">{cat}</span>
    </div>
    <div className="mt-3">{children}</div>
    <p className="mt-4 font-hand text-xl leading-snug text-ink">{obs}</p>
    <p className="mt-1.5 font-hand text-lg leading-tight text-ember transition-all duration-300 md:translate-y-1.5 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
      {note}
    </p>
  </div>
);

const MiniChrome = () => (
  <div className="mb-2 flex gap-1" aria-hidden="true">
    <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
    <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
    <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
  </div>
);

const SpecimenButton = () => (
  <div className="relative flex h-24 items-center justify-center rounded-sm border border-dashed border-line bg-cream/50">
    <span className="relative flex items-center rounded-full border border-ink/25 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ash transition-all duration-300 group-hover:border-ember group-hover:bg-ember group-hover:text-paper">
      continue
      <span className="max-w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:ml-1.5 group-hover:max-w-[14px] group-hover:opacity-100" aria-hidden="true">→</span>
      <ScribbleRing className="absolute -inset-x-2 -inset-y-2 h-[calc(100%+16px)] w-[calc(100%+16px)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </span>
  </div>
);

const SpecimenEmpty = () => (
  <div className="h-28 rounded-sm border border-dashed border-line bg-cream/50 p-2.5">
    <MiniChrome />
    <div className="flex h-16 items-center justify-center">
      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-ash/70 underline decoration-transparent decoration-2 underline-offset-4 transition-all duration-300 group-hover:text-ember group-hover:decoration-ember">
        no results
      </span>
    </div>
  </div>
);

const HIERARCHY_BTNS = [
  { l: "search", Icon: Search, c: "group-hover:border-ember/70 group-hover:text-ember" },
  { l: "filter", Icon: Filter, c: "group-hover:border-violet-400 group-hover:text-violet-500" },
  { l: "save", Icon: Bookmark, c: "group-hover:border-sky-500 group-hover:text-sky-600" },
  { l: "apply", Icon: null, c: "group-hover:border-ink group-hover:text-ink" },
  { l: "message", Icon: MessageCircle, c: "group-hover:border-emerald-500 group-hover:text-emerald-600" },
  { l: "share", Icon: Share2, c: "group-hover:border-amber-500 group-hover:text-amber-600" },
];

const SpecimenHierarchy = () => (
  <div className="rounded-sm border border-dashed border-line bg-cream/50 p-3">
    <MiniChrome />
    <div className="grid grid-cols-3 gap-2">
      {HIERARCHY_BTNS.map(({ l, Icon, c }, i) => (
        <span
          key={l}
          style={{ transitionDelay: `${i * 55}ms` }}
          className={`flex items-center justify-center gap-1 rounded-full border border-ink/30 bg-white px-1 py-1.5 text-center font-mono text-[9px] uppercase tracking-[0.12em] text-ink/70 transition-all duration-200 group-hover:-translate-y-0.5 ${c}`}
        >
          {Icon && <Icon size={10} aria-hidden="true" />}
          {l}
        </span>
      ))}
    </div>
  </div>
);

const SpecimenMotion = () => (
  <div className="flex h-24 flex-col items-center justify-center gap-2.5 rounded-sm border border-dashed border-line bg-cream/50">
    <span className="flex items-center gap-2 rounded-full bg-ink px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-paper">
      <span className="hidden h-3 w-3 animate-spin rounded-full border border-paper/30 border-t-paper group-hover:inline-block" aria-hidden="true" />
      <span className="group-hover:hidden">send</span>
      <span className="hidden group-hover:inline">sending…</span>
    </span>
    <span className="font-mono text-[9px] tracking-wide text-ash opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      3.2s of sparkle later
    </span>
  </div>
);

const SpecimenDetail = () => (
  <div className="flex h-24 items-center justify-center rounded-sm border border-dashed border-line bg-cream/50">
    <div className="flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 shadow-paper transition-all duration-300 group-hover:border-sage group-hover:shadow-lift">
      <Bookmark size={10} className="text-ash transition-colors duration-300 group-hover:text-emerald-600" aria-hidden="true" />
      <span className="h-1.5 w-1.5 rounded-full bg-ash transition-colors duration-300 group-hover:bg-emerald-500" aria-hidden="true" />
      <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-smoke group-hover:hidden">unsaved</span>
      <span className="hidden font-mono text-[9px] uppercase tracking-[0.18em] text-smoke group-hover:inline">saved · just now</span>
    </div>
  </div>
);

export default function Notices() {
  return (
    <section data-testid="sketchbook-section" className="border-y border-line bg-cream/40 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">03 / observations</p>
          <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Things I <span className="italic text-ember">notice.</span>
          </h2>
          <p className="mt-4 max-w-md text-base text-smoke">Little clues that tell me something isn&apos;t working.</p>
        </Reveal>

        {/* Desktop: scattered observation wall */}
        <div className="relative mt-10 hidden min-h-[920px] md:block">
          <Reveal className="absolute left-0 top-0" delay={0.05}>
            <Specimen testid="sketchbook-card-1" num="01" cat="interaction" obs="The button that's technically correct but doesn't feel clickable." note="would you click this?" className="md:-rotate-1">
              <SpecimenButton />
            </Specimen>
          </Reveal>
          <Reveal className="absolute right-0 top-8" delay={0.15}>
            <Specimen testid="sketchbook-card-2" num="02" cat="empty states" obs="The empty state nobody thought about." note="okay… now what?" className="md:rotate-1">
              <SpecimenEmpty />
            </Specimen>
          </Reveal>
          <Reveal className="absolute left-1/2 top-[34%] -translate-x-1/2" delay={0.25}>
            <Specimen testid="sketchbook-card-3" num="03" cat="hierarchy" obs="The screen with six equally important things." note="where do I look first?" className="md:w-[22rem] md:-rotate-[0.5deg]">
              <SpecimenHierarchy />
            </Specimen>
          </Reveal>
          <Reveal className="absolute bottom-2 left-[5%]" delay={0.35}>
            <Specimen testid="sketchbook-card-4" num="04" cat="motion" obs="The interaction that looks beautiful but slows the user down." note="pretty ≠ useful." className="md:rotate-1">
              <SpecimenMotion />
            </Specimen>
          </Reveal>
          <Reveal className="absolute bottom-10 right-[3%]" delay={0.45}>
            <Specimen testid="sketchbook-card-5" num="05" cat="detail" obs="The tiny detail that makes a product feel alive." note="the little things matter." className="md:-rotate-1">
              <SpecimenDetail />
            </Specimen>
          </Reveal>
        </div>

        {/* Mobile: stacked story */}
        <div className="mt-12 space-y-6 md:hidden">
          <Reveal delay={0.05}>
            <Specimen testid="sketchbook-card-1-mobile" num="01" cat="interaction" obs="The button that's technically correct but doesn't feel clickable." note="would you click this?">
              <SpecimenButton />
            </Specimen>
          </Reveal>
          <Reveal delay={0.1}>
            <Specimen testid="sketchbook-card-2-mobile" num="02" cat="empty states" obs="The empty state nobody thought about." note="okay… now what?">
              <SpecimenEmpty />
            </Specimen>
          </Reveal>
          <Reveal delay={0.15}>
            <Specimen testid="sketchbook-card-3-mobile" num="03" cat="hierarchy" obs="The screen with six equally important things." note="where do I look first?">
              <SpecimenHierarchy />
            </Specimen>
          </Reveal>
          <Reveal delay={0.2}>
            <Specimen testid="sketchbook-card-4-mobile" num="04" cat="motion" obs="The interaction that looks beautiful but slows the user down." note="pretty ≠ useful.">
              <SpecimenMotion />
            </Specimen>
          </Reveal>
          <Reveal delay={0.25}>
            <Specimen testid="sketchbook-card-5-mobile" num="05" cat="detail" obs="The tiny detail that makes a product feel alive." note="the little things matter.">
              <SpecimenDetail />
            </Specimen>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-24 text-center">
          <p className="inline-block font-serif text-3xl font-medium tracking-tight text-ink sm:text-5xl">
            Before I design, I{" "}
            <span className="relative inline-block italic text-ember">
              notice.
              <HandUnderline className="absolute -bottom-2 left-0 w-full" />
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
