export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "other";
  level: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Contact {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
