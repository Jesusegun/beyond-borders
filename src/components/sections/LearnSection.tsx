import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LEARN_ITEMS, type LearnItem } from "@/lib/event-content";
import {
  ClockIcon,
  NetworkIcon,
  ProfileIcon,
  SearchIcon,
  ShieldIcon,
} from "@/components/ui/Icons";

function LearnIcon({ icon }: { icon: LearnItem["icon"] }) {
  const className = "h-6 w-6 text-[var(--color-accent)]";

  if (icon === "search") return <SearchIcon className={className} />;
  if (icon === "shield") return <ShieldIcon className={className} />;
  if (icon === "profile") return <ProfileIcon className={className} />;
  if (icon === "clock") return <ClockIcon className={className} />;
  return <NetworkIcon className={className} />;
}

export function LearnSection() {
  return (
    <section id="learn" className="section-space border-y border-black/5 bg-white/70">
      <Container>
        <SectionHeading
          overline="What You Will Learn"
          title="Practical skills you can apply immediately"
          description="From identifying legitimate opportunities to submitting stronger applications, each module is designed to move you from confusion to clear action."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {LEARN_ITEMS.map((item, index) => {
            const cardClass =
              index === LEARN_ITEMS.length - 1
                ? "md:col-span-2"
                : "";

            return (
              <article
                key={item.title}
                className={`rounded-3xl border border-black/10 bg-[var(--color-surface)] p-6 shadow-[0_8px_20px_rgba(15,42,67,0.06)] ${cardClass}`}
              >
                <div className="inline-flex rounded-2xl bg-[var(--color-accent-soft)] p-3">
                  <LearnIcon icon={item.icon} />
                </div>
                <h3 className="mt-5 font-display text-2xl leading-tight text-[var(--color-primary)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
