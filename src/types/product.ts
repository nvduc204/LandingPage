import type { LucideIcon } from 'lucide-react';

export type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Specification = {
  label: string;
  value: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type AnalyticsEvent = {
  type: 'cta_click' | 'scroll_depth' | 'newsletter_submit' | 'favorite_toggle' | 'cart_add' | 'chatbot_open';
  payload?: Record<string, unknown>;
  timestamp: string;
};
