import type { Project, Skill} from './types';

export const INITIAL_SKILLS: Skill[] = [
  {
    name: "HTML5",
    category: "language",
    unlocked: true,
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    description: "Semantic structures, SEO optimization, and web accessibility (a11y) standards."
  },
  {
    name: "CSS3 / Tailwind",
    category: "styling",
    unlocked: true,
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    description: "Highly responsive layouts, clean Flexbox/Grid structures, variables, fluid typography, and premium micro-interactions."
  },
  {
    name: "JavaScript",
    category: "language",
    unlocked: true,
    docUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    description: "Asynchronous workflows, ES6+ array manipulation, DOM modeling, closures, and modular engineering."
  },
  {
    name: "React",
    category: "frontend",
    unlocked: true,
    docUrl: "https://react.dev/",
    description: "Declarative UI rendering, hooks lifecycle management, interactive local state flow, and modular components."
  },
  {
    name: "TypeScript",
    category: "language",
    unlocked: true,
    docUrl: "https://www.typescriptlang.org/docs/",
    description: "Static typing, advanced interfaces, type-safe compiler checks, and robust autocompilation setups."
  },
  {
    name: "Git & GitHub",
    category: "tools",
    unlocked: true,
    docUrl: "https://docs.github.com/en/get-started",
    description: "Version control branching pipelines, clean pull request reviews, and continuous Integration deployment workflows."
  },
   /* 
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
*/
];


export const PROJECTS: Project[] = [
    {
    id: "artisan-marketplace",
    title: "Artisan Marketplace",
    description: "A regional discovery service platform matching retail consumers with local service providers and craft profiles. The app combines a customer-facing directory, artisan portals, quote requests, and lightweight local persistence so it can be explored without a full production backend.",
  category: ["TypeScript", "Tailwind CSS", "Vite", "React"],
    tech: ["TypeScript","Vite" ,"React Router","Firebase Authentication" ,"Firebase"," Authentication, Firestore","and Storage","Tailwind CSS","Lucide React"," React Hook Form"],
    image: "/Project-images/Local-Artisan-Marketplace.png",
    featured: false,
    typescriptReady: false,
      liveUrl: "https://arti-technologies-inc.vercel.app/",
     githubUrl: "https://github.com/Chukwudi-Gideon/Arti-Technologies-inc"
  },
    {
    id: "client-dashboard",
    title: "Freelance Client Management",
    description: "This Client Managment is a local first productivity and financial automation app, built to help freelancers and agencies streamline client management, track projects and automate invoicing. Ultimately, its purpose is to provide independent professionals with a fast, secure, and entirely free workspace that simplifies day to day business operations while keeping absolute data ownership in the hands of the user.", 
     category: ["React", "JavaScript", "Tailwind", "Typescript", "Vite"],
    tech: ["React 19", "Tailwind CSS v4", "Lucide React Icons", "Reactive State Management", "Vite", "Typsecript", "Javascript"],
    image: "/Project-images/Freelance-Client-Management-Dashboard.png",
    featured: true,
    typescriptReady: true,
    liveUrl: "https://fc-management-dashboard.vercel.app/",
     githubUrl: "https://github.com/Chukwudi-Gideon/FC-Management-Dashboard"
  },
  {
    id: "job-tracker",
    title: "Job Application Tracker",
    description: "This is is a polished sleek, local first app built to rescue people from spreadsheet hell during a job hunt.  Instead of jumping between messy bookmarks, notes apps, and Excel files, it gives you a clean command center to track your entire hiring lifecycle from initial submission to final offer.It saves everything directly to the browser via localStorage. That means the app is instantly ready to use without requiring a complex database setup, user accounts, or backend servers.",
category: ["React", "TypeScript", "Tailwind CSS"],
   tech: ["React", "TypeScript", "Javascript", "Vite", "Tailwind CSS", "Local Storage API", "Lucide Icons"],
    image: "/Project-images/JAJ_img.png",
    featured: true,
    typescriptReady: true,
    liveUrl: "https://job-application-journal.vercel.app/",
    githubUrl: "https://github.com/Chukwudi-Gideon/Job-Application-Journal"
  },


];

