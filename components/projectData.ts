export type Project = {
  title: string;
  tech: string[];
  github: string;
  live?: string;
};

export type FeaturedProject = Project & {
  description: string;
  live: string;
  badge?: string;
  highlightLabel?: string;
  keyFeatures?: string[];
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
    badge: "Full Stack · Real-Time · Production",
    highlightLabel: "Featured Project",
  },
  {
    title: "Freelance Calculator",
    description:
      "A tool that helps freelancers calculate their rates and project costs. Built to solve a real business problem for independent workers.",
    live: "https://freelance-calculator-eight.vercel.app/",
    github: "https://github.com/Eldren-cmd/freelance-calculator",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "School Website",
    description:
      "A complete multi-page school website. Demonstrates my ability to deliver full client-style websites for real organisations.",
    live: "https://school-website-black-ten.vercel.app/",
    github: "https://github.com/Eldren-cmd/school-website",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export const otherProjects: Project[] = [
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
