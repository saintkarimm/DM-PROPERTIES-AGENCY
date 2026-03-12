export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  type: 'sale' | 'rent';
  featured?: boolean;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  href: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  rating: number;
  avatar?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}
