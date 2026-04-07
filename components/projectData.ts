export type Project = {
  title: string;
  tech: string[];
  github: string;
  live?: string;
};

export type FeaturedProject = Project & {
  description: string;
  live: string;
  subtitle?: string;
  badge?: string;
  highlightLabel?: string;
  keyFeatures?: string[];
  layout?: "hero" | "featured" | "standard";
  accent?: "default" | "purple";
  liveLabel?: string;
};

export const featuredProjects: FeaturedProject[] = [
  {
    title: "Naija Transport",
    description:
      "A full-stack, real-time Nigerian transport platform. Users can search bus routes across Lagos, get live fare estimates, report traffic incidents, and record GPS trips - all with real-time updates powered by Socket.IO.",
    live: "https://naijatransport.vercel.app",
    github: "https://github.com/Eldren-cmd/naija-bus",
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT Auth",
      "Mapbox",
      "CI/CD",
    ],
    keyFeatures: [
      "User authentication with JWT refresh tokens",
      "Geospatial route & stop search (MongoDB 2dsphere)",
      "Real-time incident map updates via Socket.IO",
      "Crowdsourced fare reporting engine",
      "GPS trip recording & replay",
      "Admin dashboard for route management",
      "Automated CI/CD with GitHub Actions",
    ],
    badge: "Full Stack \u00B7 Real-Time \u00B7 Production",
    highlightLabel: "Flagship Project",
    layout: "hero",
  },
  {
    title: "HRF",
    subtitle: "House Rent & Roommate Finder",
    description:
      "A Nigeria-focused housing platform for verified listings and roommate matching. It combines search, filtering, real-time chat, and an AI-assisted listing flow in a polished product experience.",
    live: "https://hrf-app.vercel.app",
    github: "https://github.com/Eldren-cmd/hrf-app",
    tech: [
      "React 18",
      "Vite",
      "JavaScript",
      "React Router",
      "Claude API",
      "LocalStorage",
      "Responsive UI",
    ],
    keyFeatures: [
      "Browse and filter Nigerian property listings",
      "AI-powered roommate compatibility matching",
      "WhatsApp-style landlord chat experience",
      "Multi-step listing wizard with AI description generation",
      "LocalStorage persistence with no backend dependency",
      "Mobile-first UI tailored for Nigerian Android users",
    ],
    badge: "Marketplace \u00B7 AI-Assisted \u00B7 Frontend",
    highlightLabel: "New Project",
    layout: "featured",
  },
  {
    title: "CVPadi",
    subtitle: "AI CV Builder SaaS",
    description:
      "A full-stack SaaS platform built for Nigerian professionals. Users build their CV through a conversational wizard, receive an AI score, pay via Paystack to unlock their PDF, and get an AI-enhanced CV delivered by email, powered by the Claude API.",
    live: "https://cvpadi.com",
    github: "https://github.com/Eldren-cmd/CVpadi",
    tech: [
      "TypeScript",
      "Next.js 14",
      "Supabase",
      "PostgreSQL",
      "Claude API",
      "Paystack",
      "Resend",
      "Tailwind CSS",
      "Vercel",
      "Edge Functions",
    ],
    keyFeatures: [
      "Conversational CV builder with real-time scoring",
      "AI enhancement queue powered by Claude API (Haiku)",
      "Paystack payment integration with HMAC webhook verification",
      "PDF + WhatsApp JPG generation and signed URL delivery",
      "Weighted job-matching engine with automated scraper",
      "Anti-abuse stack: fingerprinting, rate limiting, atomic SQL",
      "CV version timeline with forking",
      "Public salary database and NYSC guide hub",
    ],
    badge: "SaaS \u00B7 AI-Powered \u00B7 Payments",
    highlightLabel: "Featured Project",
    layout: "featured",
    accent: "purple",
    liveLabel: "Live App",
  },
  {
    title: "VITA",
    subtitle: "Emergency First Aid PWA",
    description:
      "An offline-first first aid Progressive Web App designed for emergency use when internet access is unreliable. It delivers guided responses, triage, and incident logging from cache.",
    live: "https://vita-sage.vercel.app",
    github: "https://github.com/Eldren-cmd/VITA",
    tech: [
      "Next.js 14",
      "TypeScript",
      "PWA",
      "Tailwind CSS",
      "IndexedDB",
      "Service Worker",
    ],
    keyFeatures: [
      "Guided first-aid instructions for high-stress emergencies",
      "Severity scoring flow for quick triage decisions",
      "Offline-first architecture using service workers",
      "Cached emergency content with zero live network dependency",
      "Incident logging for medical handoff context",
    ],
    badge: "Health Tech \u00B7 Offline-First \u00B7 PWA",
    highlightLabel: "New Project",
  },
];

export const otherProjects: Project[] = [
  {
    title: "Freelance Calculator",
    live: "https://freelance-calculator-eight.vercel.app/",
    github: "https://github.com/Eldren-cmd/freelance-calculator",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "School Website",
    live: "https://school-website-black-ten.vercel.app/",
    github: "https://github.com/Eldren-cmd/school-website",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "E-Commerce Landing Page",
    live: "https://e-commerce-landing-page-wine.vercel.app/",
    github: "https://github.com/Eldren-cmd/e-commerce-landing-page",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Construction Website",
    live: "https://construction-website-rose-delta.vercel.app/",
    github: "https://github.com/Eldren-cmd/construction-website",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Clipboard Landing Page",
    live: "https://a-simple-clipboard-website-landing.vercel.app/",
    github:
      "https://github.com/Eldren-cmd/a-simple-clipboard-website-landing-page",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Quiz App",
    github: "https://github.com/Eldren-cmd/quiz-app",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Expense Tracker",
    github: "https://github.com/Eldren-cmd/expense-tracker",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Weather App",
    github: "https://github.com/Eldren-cmd/weather-app",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Task List",
    github: "https://github.com/Eldren-cmd/Task-list-webpage",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Code Quotes Generator",
    github: "https://github.com/Eldren-cmd/code-qoutes-generator",
    tech: ["JavaScript", "HTML", "CSS"],
  },
];

const screenshotAccessKey = "uCMhye1klH6CKQ";

export function screenshotFrom(url: string) {
  return `https://api.screenshotone.com/take?access_key=${screenshotAccessKey}&url=${encodeURIComponent(
    url
  )}&viewport_width=1280&viewport_height=720&format=jpg&block_ads=true&block_cookie_banners=true`;
}
