export interface NavItem {
  id: string;
  label: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Project {
  id: number;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  image: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  category: 'technical' | 'language' | 'soft';
}

export interface Activity {
  id: number;
  name: string;
  role: string;
  period: string;
  description: string;
}

export interface Interest {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}