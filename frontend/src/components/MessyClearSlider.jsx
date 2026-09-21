import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";

const clamp = (v) => Math.min(1, Math.max(0, v));

const TINT_BG = { skywash: "bg-skywash", sage: "bg-sage", lav: "bg-lav" };

const MessyLayer = ({ items, opacity }) => (
  <div className="absolute inset-0 bg-cream" style={{ opacity }} aria-hidden={opacity < 0.5}>
    <div className="relative h-full w-full">
      {items.map((t, i) => {
        const x = 8 + ((i * 37) % 78);
        const y = 10 + ((i * 53) % 74);
        const r = ((i * 29) % 14) - 7;
        return (
          <span
            key={t}
            className="absolute rounded-full border border-ink/40 bg-paper px-3 py-1.5 font-hand text-lg leading-none text-ink shadow-paper sm:text-xl"
            style={{ left: `${x}%`, top: `${y}%`, transform: `rotate(${r}deg)` }}
          >
            {t}
          </span>
        );
      })}
    </div>
  </div>
);

const MentBlueWire = () => (
  <div className="flex h-[74%] w-[84%] max-w-xl overflow-hidden rounded-md border-[1.5px] border-ink/50 bg-white">
    <div className="flex w-[22%] flex-col items-center gap-2 border-r border-ink/15 bg-cream/60 p-2.5">
      <div className="h-7 w-7 rounded-full bg-ink/20" />
      <div className="h-1.5 w-4/5 rounded-full bg-ink/25" />
      <div className="h-3 w-full rounded-full bg-ink/15" />
      <div className="mt-2 w-full space-y-2">
        {[85, 77, 69, 61, 53].map((w) => (
          <div key={w} className="h-1.5 rounded-full bg-ink/15" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
    <div className="flex flex-1 flex-col p-2.5">
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex-1 rounded border border-ink/15 p-2">
            <div className="h-2.5 w-1/3 rounded bg-ink/30" />
            <div className="mt-1 h-1.5 w-2/3 rounded bg-ink/10" />
          </div>
        ))}
        <div className="hidden w-16 flex-col gap-1.5 sm:flex">
          <div className="h-4 rounded-full border border-ink/25" />
          <div className="h-4 rounded-full border border-ink/25" />
        </div>
      </div>
      <div className="mt-2.5 h-1.5 w-1/3 rounded bg-ink/25" />
      <div className="mt-2 grid flex-1 grid-cols-2 gap-2">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="rounded border border-ink/15 p-2">
            <div className="flex items-center gap-1.5">
              <div className="h-4 w-4 shrink-0 rounded-full bg-ink/15" />
              <div className="h-1.5 flex-1 rounded bg-ink/20" />
              <div className="h-3.5 w-9 shrink-0 rounded-full bg-ink/40" />
            </div>
            <div className="mt-1.5 space-y-1">
              <div className="h-1 w-full rounded bg-ink/10" />
              <div className="h-1 w-4/5 rounded bg-ink/10" />
              <div className="h-1 w-3/5 rounded bg-ink/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const WireLayer = ({ label, opacity, children }) => (
  <div className="absolute inset-0 flex items-center justify-center bg-paper" style={{ opacity }} aria-hidden={opacity < 0.5}>
    {children ? (
      <div className="flex flex-col items-center">
        {children}
        <p className="mt-3 font-hand text-xl text-smoke" style={{ transform: "rotate(-1.5deg)" }}>
          {label}
        </p>
      </div>
    ) : (<div className="relative flex h-[72%] w-[74%] max-w-md flex-col gap-3 rounded-md border-[1.5px] border-ink/60 bg-white p-5">
      <div className="h-2.5 w-1/3 rounded-sm bg-ink/70" />
      <div className="space-y-2">
        <div className="h-1.5 w-full rounded-sm bg-ink/15" />
        <div className="h-1.5 w-5/6 rounded-sm bg-ink/15" />
        <div className="h-1.5 w-2/3 rounded-sm bg-ink/15" />
      </div>
      <div className="grid flex-1 grid-cols-2 gap-3">
        <div className="rounded-sm border border-dashed border-ink/35 bg-cream/70" />
        <div className="rounded-sm border border-dashed border-ink/35 bg-cream/70" />
        <div className="col-span-2 rounded-sm border border-dashed border-ink/35 bg-cream/70" />
      </div>
      <div className="h-7 w-1/2 self-center rounded-full border-[1.5px] border-ink/50" />
      <p className="absolute -bottom-10 left-1/2 w-max -translate-x-1/2 font-hand text-xl text-smoke" style={{ transform: "translateX(-50%) rotate(-1.5deg)" }}>
        {label}
      </p>
    </div>
    )}
  </div>
);

const ClearLayer = ({ label, tint, opacity, image }) => {
  if (image)
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream/60" style={{ opacity }} aria-hidden={opacity < 0.5}>
        <div className="h-[78%] w-[88%] max-w-2xl overflow-hidden rounded-md border border-line bg-white shadow-lift">
          <img src={image} alt="Final product screen" className="h-full w-full object-cover object-top" />
        </div>
        <p className="mt-4 font-hand text-xl text-ember" style={{ transform: "rotate(1.5deg)" }}>
          {label}
        </p>
      </div>
    );
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white" style={{ opacity }} aria-hidden={opacity < 0.5}>
    <div className="relative flex h-[72%] w-[74%] max-w-md flex-col gap-3 overflow-hidden rounded-xl border border-line bg-white p-5 shadow-lift">
      <div className={`-m-5 mb-0 flex items-center gap-2 px-5 py-3 ${TINT_BG[tint]}`}>
        <span className="h-3.5 w-3.5 rounded-full bg-ember" />
        <span className="h-2 w-20 rounded-full bg-ink/60" />
        <span className="ml-auto h-2 w-10 rounded-full bg-ink/20" />
      </div>
      <div className="mt-2 h-3 w-1/2 rounded-full bg-ink/85" />
      <div className="h-1.5 w-2/3 rounded-full bg-ink/15" />
      <div className="grid flex-1 grid-cols-2 gap-3">
        <div className={`rounded-lg ${TINT_BG[tint]} p-3`}>
          <div className="mt-auto h-1.5 w-3/4 rounded-full bg-ink/40" />
        </div>
        <div className="rounded-lg bg-cream p-3">
          <div className="h-1.5 w-2/3 rounded-full bg-ink/30" />
        </div>
        <div className="col-span-2 flex items-center gap-3 rounded-lg border border-line p-3">
          <span className="h-6 w-6 rounded-full bg-ember/85" />
          <div className="flex-1 space-y-1.5">
            <div className="h-1.5 w-3/4 rounded-full bg-ink/25" />
            <div className="h-1.5 w-1/2 rounded-full bg-ink/15" />
          </div>
        </div>
      </div>
      <div className="flex h-8 w-1/2 items-center justify-center self-center rounded-full bg-ember">
        <div className="h-1.5 w-12 rounded-full bg-white/90" />
      </div>
      <p className="absolute -bottom-10 left-1/2 w-max font-hand text-xl text-ember" style={{ transform: "translateX(-50%) rotate(1.5deg)" }}>
        {label}
      </p>
    </div>
  </div>
);
};

export default function MessyClearSlider({ project }) {
  const [p, setP] = useState(0.5);
  const trackRef = useRef(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect) return;
    setP(clamp((clientX - rect.left) / rect.width));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (dragging.current) setFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setP((v) => clamp(v - 0.08));
    if (e.key === "ArrowRight") setP((v) => clamp(v + 0.08));
  };

  const messyOp = clamp(1 - p * 2.2);
  const wireOp = clamp(1 - Math.abs(p - 0.5) * 2.4);
  const clearOp = clamp((p - 0.45) * 2.2);

  return (
    <div data-testid="messy-clear-slider" className="select-none">
      <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em]">
        <span className={p < 0.4 ? "text-ember" : "text-ash"}>messy</span>
        <span className="text-ash/70" aria-hidden="true">←—— drag ——→</span>
        <span className={p > 0.6 ? "text-emerald-600" : "text-ash"}>clear</span>
      </div>

      <div
        ref={trackRef}
        role="slider"
        tabIndex={0}
        aria-label="Messy to clear transformation slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(p * 100)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onKeyDown={onKeyDown}
        className="relative h-[380px] cursor-ew-resize touch-none overflow-hidden rounded-md border border-line sm:h-[440px]"
      >
        <ClearLayer label={project.slider.clearLabel} tint={project.tint} opacity={clearOp} image={project.slider.clearImage} />
        <WireLayer label={project.slider.wireLabel} opacity={wireOp}>
          {project.slug === "mentblue" ? <MentBlueWire /> : null}
        </WireLayer>
        <MessyLayer items={project.slider.messy} opacity={messyOp} />

        <div className="absolute inset-y-0 z-10" style={{ left: `${p * 100}%` }} aria-hidden="true">
          <div className="absolute inset-y-0 -left-px w-[2px] bg-ink" />
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[1.5px] border-ink bg-paper shadow-lift"
          >
            <span className="font-mono text-[11px] tracking-tight text-ink">⇔</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
