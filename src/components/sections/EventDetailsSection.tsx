import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CalendarIcon, ClockIcon, PlatformIcon, TicketIcon } from "@/components/ui/Icons";
import { EVENT_CONTENT } from "@/lib/event-content";

const detailItems = [
  {
    title: "Date",
    value: EVENT_CONTENT.schedule.date,
    icon: CalendarIcon,
  },
  {
    title: "Time",
    value: EVENT_CONTENT.schedule.time,
    icon: ClockIcon,
  },
  {
    title: "Duration",
    value: EVENT_CONTENT.schedule.duration,
    icon: ClockIcon,
  },
  {
    title: "Platforms",
    value: "WhatsApp + Google Meet",
    icon: PlatformIcon,
  },
  {
    title: "WhatsApp Use",
    value: EVENT_CONTENT.platform.whatsapp,
    icon: PlatformIcon,
  },
  {
    title: "Google Meet Use",
    value: EVENT_CONTENT.platform.googleMeet,
    icon: PlatformIcon,
  },
  {
    title: "Ticket",
    value: EVENT_CONTENT.ticket.price,
    icon: TicketIcon,
  },
];

export function EventDetailsSection() {
  return (
    <section id="details" className="section-space border-y border-black/5 bg-white/70">
      <Container>
        <SectionHeading
          overline="Event Details"
          title="Everything you need to plan your attendance"
          description="Clear logistics so you can register quickly and prepare for both sessions with confidence."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {detailItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-black/10 bg-white p-5">
              <div className="inline-flex rounded-xl bg-[var(--color-accent-soft)] p-2.5">
                <item.icon className="h-5 w-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="mt-4 font-display text-2xl text-[var(--color-primary)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.value}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
