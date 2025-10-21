export interface GalleryItem {
  id: number;
  category: string;
  description: string;
  color: string;
  src: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
  buttonText: string;
}

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

export interface ResumeItem {
  year: string;
  title: string;
  company: string;
  responsibilities: string[];
}

export interface Certification {
  icon: string;
  title: string;
  issuer: string;
  year: string;
}

