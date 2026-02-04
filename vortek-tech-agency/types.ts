
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
  priceRange: {
    basic: string;
    pro: string;
    enterprise: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  results: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  dob: number;
  gender: 'male' | 'female';
  bio: string;
  funFact: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Trends' | 'Case Studies' | 'Tutorials';
  summary: string;
  author: string;
  date: string;
}
