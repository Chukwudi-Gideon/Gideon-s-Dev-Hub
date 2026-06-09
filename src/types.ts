export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'styling' | 'language' | 'tools';
  level: number; // 0 to 100
  unlocked: boolean;
  docUrl: string; // official documentation URL
  description: string;
}

export interface CodeSnippet {
  js: string;
  ts: string;
  description: string;
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

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
  timestamp: string;
}
