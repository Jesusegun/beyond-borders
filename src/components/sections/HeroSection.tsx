import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { EVENT_CONTENT, WHATSAPP_LINK } from "@/lib/event-content";

export function HeroSection() {
  return (
    <section id="top" className="section-space relative overflow-hidden">
      <div className="pointer-events-none absolute -top-12 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[color:rgba(214,85,54,0.18)] blur-3xl" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[var(--color-primary)]/25 bg-white/70 px-4 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary)]">
            Live Masterclass - {EVENT_CONTENT.schedule.date}
          </p>
          <h1 className="font-display text-4xl leading-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
            {EVENT_CONTENT.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
            {EVENT_CONTENT.heroSubtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white px-4 py-2 text-[var(--color-primary)] shadow-sm">
              {EVENT_CONTENT.schedule.date}
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-[var(--color-primary)] shadow-sm">
              {EVENT_CONTENT.schedule.time}
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-[var(--color-primary)] shadow-sm">
              <span className="mr-1 text-[var(--color-muted)]">Fee:</span>
              {EVENT_CONTENT.ticket.price}
            </span>
          </div>

          <div className="mt-10">
            <CtaButton href={WHATSAPP_LINK} label="Reserve Your Seat" />
          </div>
        </div>

        <figure className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-br from-[var(--color-primary)]/20 via-transparent to-[var(--color-accent)]/20" />
          <Image
            src="/images/divine.png"
            alt="Divine Mmachukwu Chukwuemeka"
            width={640}
            height={760}
            sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 90vw"
            priority
            className="aspect-[4/5] w-full rounded-[2rem] border border-black/5 object-cover shadow-xl"
          />
        </figure>
      </Container>
    </section>
  );
}
