export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  year: number;
  image: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
  linkedin?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
