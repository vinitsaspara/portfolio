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
  certificate?: string;
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

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  certificate?: string;
  category: "certification" | "award" | "course" | "hackathon" | "other";
}

export interface CodingProfile {
  id: string;
  platform: string;
  username: string;
  profileUrl: string;
  stats?: {
    rating?: number;
    maxRating?: number;
    globalRank?: number;
    problemsSolved?: number;
    contestsAttended?: number;
    badges?: string[];
  };
  color: string;
  icon: string;
}
