import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SOCIAL_PROOF } from "@/lib/event-content";

export function SocialProofSection() {
  return (
    <section className="section-space bg-[linear-gradient(160deg,rgba(255,255,255,0.6),rgba(214,85,54,0.07))]">
      <Container>
        <SectionHeading
          overline="Social Proof"
          title="Trusted by students and early-career professionals"
          description="See why past participants recommend this session and how the community keeps growing before and after each event."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-3xl border border-black/10 bg-white p-7 shadow-[0_10px_24px_rgba(15,42,67,0.08)]">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-accent)]">
              {SOCIAL_PROOF.audienceMetric.label}
            </p>
            <p className="mt-4 font-display text-5xl text-[var(--color-primary)]">
              {SOCIAL_PROOF.audienceMetric.value}
            </p>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              {SOCIAL_PROOF.audienceMetric.description}
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {SOCIAL_PROOF.testimonials.map((item) => (
              <blockquote
                key={item.quote}
                className="rounded-2xl border border-black/10 bg-white p-5 text-sm leading-7 text-[var(--color-muted)]"
              >
                “{item.quote}”
                <footer className="mt-3 font-semibold text-[var(--color-primary)]">{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {SOCIAL_PROOF.screenshotCards.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-dashed border-[var(--color-primary)]/30 bg-white/50 p-5"
            >
              <p className="text-sm font-semibold text-[var(--color-primary)]">Screenshot Placeholder</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
