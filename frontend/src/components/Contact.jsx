import Reveal from "@/components/Reveal";
import { HandUnderline, ScribbleCircle } from "@/components/annotations";

export default function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="border-t border-line bg-cream/40 py-32 sm:py-44">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-ash">09 — last page</p>
          <h2 className="mt-6 font-serif text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Have a <span className="relative inline-block italic text-ember">messy
              <ScribbleCircle className="absolute -inset-x-4 -inset-y-2 w-[calc(100%+2rem)]" />
            </span> idea?
          </h2>
          <p className="mt-6 inline-block font-serif text-2xl italic tracking-tight text-ink sm:text-3xl">
            Let&apos;s make sense of it.
            <HandUnderline className="mx-auto mt-1 w-48 sm:w-64" />
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-md text-base leading-relaxed text-smoke">
            I&apos;m always open to interesting products, design problems, and opportunities to build better digital
            experiences.
          </p>
          <a
            data-testid="contact-cta-button"
            href="mailto:hello@swarangiyeole.com"
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base text-paper transition-colors duration-300 hover:bg-ember"
          >
            Let&apos;s talk
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-dashed border-line pt-10 sm:flex-row sm:gap-14">
            <a
              data-testid="contact-email-link"
              href="mailto:hello@swarangiyeole.com"
              className="group font-mono text-sm tracking-wide text-ink"
            >
              <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">email</span>
              <span className="border-b border-transparent transition-colors duration-200 group-hover:border-ember group-hover:text-ember">
                hello@swarangiyeole.com
              </span>
            </a>
            <a
              data-testid="contact-linkedin-link"
              href="https://www.linkedin.com/in/swarangiyeole"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-mono text-sm tracking-wide text-ink"
            >
              <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">linkedin</span>
              <span className="border-b border-transparent transition-colors duration-200 group-hover:border-ember group-hover:text-ember">
                /swarangiyeole
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
