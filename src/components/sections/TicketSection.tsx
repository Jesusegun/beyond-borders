import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/CtaButton";
import { EVENT_CONTENT, WHATSAPP_LINK } from "@/lib/event-content";

export function TicketSection() {
  return (
    <section id="tickets" className="section-space">
      <Container>
        <div className="rounded-[2rem] border border-black/10 bg-[var(--color-primary)] px-6 py-10 text-white shadow-2xl sm:px-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/75">Ticket</p>
          <h2 className="mt-3 text-balance font-display text-4xl leading-tight sm:text-5xl">
            Secure your seat before registration closes
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[color:rgba(255,255,255,0.86)] sm:text-lg">
            This is a paid practical session designed to help you access real opportunities with clarity and structure.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/75">Price</p>
              <p className="mt-3 font-display text-5xl">{EVENT_CONTENT.ticket.price}</p>
              <p className="mt-3 text-sm font-semibold text-[color:rgba(255,255,255,0.88)]">
                {EVENT_CONTENT.ticket.urgency}
              </p>
            </div>

            <CtaButton
              href={WHATSAPP_LINK}
              label="Reserve Your Seat"
              className="!bg-white !text-[var(--color-primary)] shadow-none hover:brightness-95"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
