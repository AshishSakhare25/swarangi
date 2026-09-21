import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const INGREDIENTS = [
  ["1 cup", "clarity"],
  ["2 spoons", "curiosity"],
  ["a little", "visual personality"],
  ["a lot of", "iteration"],
  ["zero", "unnecessary complexity"],
];

export default function Recipe() {
  return (
    <div data-testid="recipe-card-section" className="w-full">
      <Reveal className="flex flex-col items-center">
        <motion.div
          whileHover={{ rotate: 0, scale: 1.015 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="ruled-paper relative w-full max-w-md rounded-sm border border-line bg-white p-8 shadow-paper"
          style={{ rotate: -1.5 }}
          data-testid="recipe-card"
        >
          <img
            src="/recipe-coffee.jpg"
            alt="Coffee and a laptop mid-design — where the recipe gets tested"
            data-testid="recipe-coffee-photo"
            className="absolute -right-3 -top-7 w-24 rotate-3 rounded-[2px] border-4 border-white object-cover shadow-lift sm:-right-5 sm:w-28"
          />
          <span className="absolute -top-1 right-10 h-4 w-12 rotate-[38deg] rounded-[1px] bg-cream/90 shadow-paper" aria-hidden="true" />
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ash">from the sketchbook —</p>
          <h3 className="mt-2 max-w-[70%] font-serif text-2xl italic tracking-tight text-ink sm:text-3xl">
            A recipe for a good interface
          </h3>
          <ul data-testid="recipe-ingredients-list" className="mt-7 space-y-[13px]">
            {INGREDIENTS.map(([qty, item]) => (
              <li key={item} className="flex items-baseline gap-3 font-hand text-2xl leading-[28px] text-ink">
                <span className="w-24 shrink-0 text-ember">{qty}</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-dashed border-line pt-5 font-serif text-base italic text-smoke">
            Mix until the user doesn&apos;t have to think about the interface.
          </p>
        </motion.div>
      </Reveal>
    </div>
  );
}
