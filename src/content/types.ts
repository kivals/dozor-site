export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Region {
  id: string;
  name: string;
}

export interface Client {
  name: string;
  logo: string;
}

export interface Principle {
  title: string;
  description: string;
}
