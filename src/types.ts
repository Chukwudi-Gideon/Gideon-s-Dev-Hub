export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'styling' | 'language' | 'tools';
  unlocked: boolean;
  docUrl: string;
  description: string;
}

 export interface TimelineItem{
  id: number,
  period: string,
  organization:string;
  title: string,
  type: "education" | "experience"| "course",

  certifications?:{
    name: string,
    url: string
  }[],
  description: string
 }

 export interface BlogPost {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  category: string[];
  tech: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string; // GitHub url
  featured: boolean;
  typescriptReady: boolean;
}
 
export interface sliderProject {
  id: number,
  image: string,
  title?: string
}


export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
  timestamp: string;
}
