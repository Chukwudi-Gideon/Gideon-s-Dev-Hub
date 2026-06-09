import type { Project, Skill} from './types';

export const INITIAL_SKILLS: Skill[] = [
  {
    name: "HTML5",
    category: "language",
    level: 95,
    unlocked: true,
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    description: "Semantic structures, SEO optimization, and web accessibility (a11y) standards."
  },
  {
    name: "CSS3 / Tailwind",
    category: "styling",
    level: 90,
    unlocked: true,
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    description: "Highly responsive layouts, clean Flexbox/Grid structures, variables, fluid typography, and premium micro-interactions."
  },
  {
    name: "JavaScript",
    category: "language",
    level: 85,
    unlocked: true,
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description: "Asynchronous workflows, ES6+ array manipulation, DOM modeling, closures, and modular engineering."
  },
  {
    name: "React",
    category: "frontend",
    level: 80,
    unlocked: true,
    docUrl: "https://react.dev/",
    description: "Declarative UI rendering, hooks lifecycle management, interactive local state flow, and modular components."
  },
  {
    name: "TypeScript",
    category: "language",
    level: 85,
    unlocked: true,
    docUrl: "https://www.typescriptlang.org/docs/",
    description: "Static typing, advanced interfaces, type-safe compiler checks, and robust autocompilation setups."
  },
  {
    name: "Git & GitHub",
    category: "tools",
    level: 80,
    unlocked: true,
    docUrl: "https://docs.github.com/en/get-started",
    description: "Version control branching pipelines, clean pull request reviews, and continuous Integration deployment workflows."
  },
  {
    name: 'Node.js',
    category: 'backend',
    level: 0,
    unlocked: false,
    docUrl: "https://nodejs.org/en/docs/",
    description: 'Scalable server-side JavaScript execution environments.'
  },
  {
    name: 'Python',
    category: 'language',
    level: 0,
    unlocked: false,
    docUrl: "https://www.python.org/doc/",
    description: 'High-level syntax programming for general-purpose scripting and backend logic.'
  },
  {
    name: 'Relational Databases',
    category: 'backend',
    level: 0,
    unlocked: false,
    docUrl: "https://www.postgresql.org/docs/",
    description: 'Designing structured tables, managing relationships, and writing clean SQL queries.'
  },
  {
    name: 'Back End Development & APIs',
    category: 'backend',
    level: 0,
    unlocked: false,
    docUrl: "https://restfulapi.net/",
    description: 'Building robust microservices, managing middleware, and handling HTTP request-response pipelines.'
  },
  {
    name: 'Full Stack Integration',
    category: 'backend',
    level: 0,
    unlocked: false,
    docUrl: "https://www.freecodecamp.org/news/what-is-full-stack-development/",
    description: 'Architecting end-to-end applications by bridging frontend component layers with secure backend APIs.'
  }

];


export const PROJECTS: Project[] = [
  {
    id: "job-tracker",
    title: "Job Application Tracker",
    description: "An application for organizing job submissions, interview stages, and career offers.",
    detailedDescription: "A streamlined pipeline manager designed to optimize the hiring lifecycle. Features a drag-and-drop workspace framework for managing applications across multiple interactive columns—tracking items cleanly through initial submissions, interview intervals, pending offers, and final rejections.",
    category: ["React", "JavaScript"],
    tech: ["React 19", "Tailwind CSS v4", "Context API", "Local Storage API"],
    image: "/Project-images/Job-Application-Tracker.png",
    featured: true,
    typescriptReady: true,
    liveUrl: "https://job-application-tracker-hazel-five.vercel.app/",
    githubUrl: "https://github.com/Chukwudi-Gideon/Job-Application-Tracker"
  },
  {
    id: "client-dashboard",
    title: "Client Management Dashboard",
    description: "A professional business operations manager tracking corporate client listings, projects, and revenue metrics.",
    detailedDescription: "An administrative intelligence hub built to monitor high-level freelance workflows. Integrates core state tracking for managing ongoing customer accounts, open milestones, dynamic invoicing structures, payment collection records, and high-visibility analytics panels.",
    category: ["React", "JavaScript"],
    tech: ["React 19", "Tailwind CSS v4", "Lucide React Icons", "Reactive State Management"],
    image: "/Project-images/Freelance-Client-Management-Dashboard.png",
    featured: true,
    typescriptReady: true,
    liveUrl: "https://freelance-client-management-dashboa.vercel.app/",
     githubUrl: "https://github.com/Chukwudi-Gideon/Freelance-Client-Management-Dashboard"
  },
  {
    id: "artisan-marketplace",
    title: "Local Artisan Marketplace",
    description: "A regional discovery service platform matching retail consumers with local service providers and craft profiles.",
    detailedDescription: "A community-focused marketplace workspace allowing users to index and source neighborhood contractors. Equipped with a dynamic keyword search index, structured artisan media galleries, and a multi-input portal for processing and logging custom quote requests.",
    category: ["JavaScript", "CSS"],
    tech: ["Vanilla ES6 JavaScript", "Tailwind Layout Grid", "Semantic HTML5 Markup", "Forms Validation API"],
    image: "/Project-images/Local-Artisan-Marketplace.png",
    featured: false,
    typescriptReady: false,
      liveUrl: "https://local-artisan-marketplace-theta.vercel.app/",
     githubUrl: "https://github.com/Chukwudi-Gideon/Local-Artisan-Marketplace"
  }
];


