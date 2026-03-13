export const WHATSAPP_LINK = "https://wa.link/e9l2va";

export const EVENT_CONTENT = {
  eventName: "Beyond Borders",
  heroTitle: "Beyond Borders: Accessing Global and Local Opportunities",
  heroSubtitle:
    "A Practical Blueprint for Securing Scholarships, Conferences & Funded Opportunities",
  schedule: {
    date: "April 10th - 11th, 2026",
    time: "7:00 PM - 9:00 PM (WAT)",
    duration: "2 hours each day",
    startDate: "2026-04-10T19:00:00+01:00",
    endDate: "2026-04-11T21:00:00+01:00",
    timezone: "Africa/Lagos",
  },
  platform: {
    whatsapp:
      "For onboarding, participant communication, and community building before and after the event.",
    googleMeet: "For the live masterclass sessions.",
  },
  ticket: {
    price: "N10,000",
    urgency: "Seats are limited.",
  },
  finalCtaLine: "Ready to start your relocation journey?",
} as const;

export type LearnItem = {
  title: string;
  description: string;
  icon: "search" | "shield" | "profile" | "clock" | "network";
};

export const LEARN_ITEMS: LearnItem[] = [
  {
    title: "Find High-Value Opportunities",
    description:
      "How to find and access global opportunities such as conferences, fellowships, and programs.",
    icon: "search",
  },
  {
    title: "Avoid Scams and Bad Offers",
    description:
      "How to identify legitimate opportunities and avoid scams, especially when application fees are involved.",
    icon: "shield",
  },
  {
    title: "Build Competitive Applications",
    description:
      "How to position yourself for competitive opportunities and present strong applications.",
    icon: "profile",
  },
  {
    title: "Discover Opportunities Early",
    description:
      "Where to find opportunities early so you do not miss critical deadlines.",
    icon: "clock",
  },
  {
    title: "Grow Exposure and Career Capital",
    description:
      "How global conferences and opportunities can shape your exposure, networks, and career growth.",
    icon: "network",
  },
];

export const SPEAKER_CONTENT = {
  name: "Divine Mmachukwu Chukwuemeka",
  title:
    "Migration Researcher, TEDx Speaker, and Graduate Research Assistant at CEPDeR",
  shortBio:
    "Divine is a first-class History and International Studies graduate from Anchor University who works at the intersection of migration research, policy, and youth-focused advocacy.",
  highlights: [
    "Speaker at international conferences and facilitator of migration-focused workshops.",
    "Founder of EmigrateEase, helping individuals navigate migration decisions confidently.",
    "Founder of Linked on LinkedIn, supporting professionals and students in career growth through strategic visibility.",
    "Mentor at the AheadGen Mentorship Program, guiding young adults to discover pathways, access opportunities, and build strong networks.",
    "Brand ambassador for Paybyucl, EduNFrance, and FeedCoyote.",
  ],
};

export const SOCIAL_PROOF = {
  audienceMetric: {
    label: "Community Reach",
    value: "1,000+",
    description:
      "Learners and young professionals reached through workshops, talks, and mentorship programs.",
  },
  testimonials: [
    {
      quote:
        "I finally understand how to identify real funded opportunities and avoid costly mistakes.",
      author: "Past Participant",
    },
    {
      quote:
        "The session gave me a practical application strategy and clear action steps.",
      author: "Early Career Professional",
    },
    {
      quote:
        "Clear, practical, and highly relevant for anyone serious about global exposure.",
      author: "Student Attendee",
    },
  ],
  screenshotCards: [
    "Past event Q&A moments",
    "Participant feedback highlights",
    "Community discussion snapshots",
  ],
};

export const NAV_LINKS = [
  { href: "#learn", label: "Learn" },
  { href: "#speaker", label: "Speaker" },
  { href: "#details", label: "Details" },
  { href: "#tickets", label: "Tickets" },
] as const;
