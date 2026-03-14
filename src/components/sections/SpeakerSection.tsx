import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SPEAKER_CONTENT } from "@/lib/event-content";

export function SpeakerSection() {
  return (
    <section id="speaker" className="section-space">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <figure className="mx-auto w-full max-w-sm">
          <Image
            src="/images/divine.png"
            alt={SPEAKER_CONTENT.name}
            width={560}
            height={700}
            sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 80vw"
            className="aspect-[4/5] w-full rounded-[2rem] border border-black/5 object-cover shadow-lg"
          />
        </figure>

        <div>
          <SectionHeading
            overline="Host / Credibility"
            title={SPEAKER_CONTENT.name}
            description={SPEAKER_CONTENT.title}
          />
          <p className="mt-6 text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            {SPEAKER_CONTENT.shortBio}
          </p>

          <ul className="mt-6 grid gap-3">
            {SPEAKER_CONTENT.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm leading-6 text-[var(--color-muted)]"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
