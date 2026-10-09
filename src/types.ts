export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  targetAudience: string;
  deliverables: string[];
  price?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  location: string;
  condition: string;
}

export interface InstagramPost {
  id: string;
  title: string;
  category: string;
  likes: number;
  comments: number;
  imageUrl: string;
  summary: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
}
