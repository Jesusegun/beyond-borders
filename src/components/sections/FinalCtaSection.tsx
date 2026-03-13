import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { EVENT_CONTENT, WHATSAPP_LINK } from "@/lib/event-content";

export function FinalCtaSection() {
  return (
    <section className="section-space">
      <Container>
        <div className="rounded-[2rem] border border-black/10 bg-[var(--color-surface)] px-6 py-12 text-center sm:px-8">
          <h2 className="font-display text-4xl leading-tight text-[var(--color-primary)] sm:text-5xl">
            {EVENT_CONTENT.finalCtaLine}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)] sm:text-lg">
            Join a focused room of ambitious people and learn the exact framework to access local and global opportunities.
          </p>
          <CtaButton href={WHATSAPP_LINK} label="Reserve Your Seat" className="mt-8" />
        </div>
      </Container>
    </section>
  );
}
