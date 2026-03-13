type IconProps = {
  className?: string;
};

function BaseIcon({ children, className = "" }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </BaseIcon>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6z" />
      <path d="m9.5 11.5 1.8 1.8 3.4-3.6" />
    </BaseIcon>
  );
}

export function ProfileIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </BaseIcon>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </BaseIcon>
  );
}

export function NetworkIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M7 12h8" />
      <path d="m17 7.5-3.5 3" />
      <path d="m13.5 13.5 3.5 3" />
    </BaseIcon>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
    </BaseIcon>
  );
}

export function PlatformIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <rect x="4" y="4" width="16" height="10" rx="2" />
      <path d="m8 20 4-4 4 4" />
      <path d="M12 14v2" />
    </BaseIcon>
  );
}

export function TicketIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <path d="M3 9a2 2 0 0 0 0 6v4h18v-4a2 2 0 0 0 0-6V5H3z" />
      <path d="M12 5v14" />
    </BaseIcon>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <BaseIcon className={className}>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M4 20a5 5 0 0 1 10 0" />
      <path d="M14 20a4 4 0 0 1 6 0" />
    </BaseIcon>
  );
}
