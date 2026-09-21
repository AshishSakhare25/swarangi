import Reveal from "@/components/Reveal";
import { HandUnderline, ScribbleCircle } from "@/components/annotations";
import { Mail, Linkedin } from "lucide-react";
import { toast } from "sonner";

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText("swarangi.design@gmail.com");
    toast("email copied — swarangi.design@gmail.com");
  } catch {
    toast("swarangi.design@gmail.com");
  }
};

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
          <div className="group relative mt-10 inline-block">
            <div className="pointer-events-none absolute -top-[4.2rem] left-1/2 flex -translate-x-1/2 translate-y-2 items-center gap-3 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <button
                data-testid="contact-copy-email-button"
                onClick={copyEmail}
                aria-label="Copy email address"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-lift transition-colors duration-200 hover:border-ember hover:text-ember"
              >
                <Mail size={17} />
              </button>
              <a
                data-testid="contact-linkedin-icon"
                href="https://www.linkedin.com/in/swarangi-yeole/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink shadow-lift transition-colors duration-200 hover:border-ember hover:text-ember"
              >
                <Linkedin size={17} />
              </a>
              <span className="pointer-events-none absolute -bottom-6 left-1/2 w-max -translate-x-1/2 font-hand text-base text-ember" aria-hidden="true">
                pick a door
              </span>
            </div>
            <a
              data-testid="contact-cta-button"
              href="mailto:swarangi.design@gmail.com"
              className="group/btn inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base text-paper transition-colors duration-300 hover:bg-ember"
            >
              Let&apos;s talk
              <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1" aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-col items-center justify-center gap-4 border-t border-dashed border-line pt-10 sm:flex-row sm:gap-14">
            <a
              data-testid="contact-email-link"
              href="mailto:swarangi.design@gmail.com"
              className="group font-mono text-sm tracking-wide text-ink"
            >
              <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">email</span>
              <span className="border-b border-transparent transition-colors duration-200 group-hover:border-ember group-hover:text-ember">
                swarangi.design@gmail.com
              </span>
            </a>
            <a
              data-testid="contact-linkedin-link"
              href="https://www.linkedin.com/in/swarangi-yeole/"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-mono text-sm tracking-wide text-ink"
            >
              <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">linkedin</span>
              <span className="border-b border-transparent transition-colors duration-200 group-hover:border-ember group-hover:text-ember">
                /swarangi-yeole
              </span>
            </a>
            <a
              data-testid="contact-resume-link"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-mono text-sm tracking-wide text-ink"
            >
              <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.25em] text-ash">resume</span>
              <span className="border-b border-transparent transition-colors duration-200 group-hover:border-ember group-hover:text-ember">
                the pdf ↓
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
