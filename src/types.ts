export interface Skill {
  id: number;
  created_at: string;
  name: string;
  category: string;
  unlocked: boolean;
  description: string;
  display_order: number;
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
  published_at: string;
  read_time: string;
  slug: string;
  featured?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  live_url?: string;
  github_url: string; // GitHub url
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
