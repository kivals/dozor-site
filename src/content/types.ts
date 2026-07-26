export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface ServicesIntro {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
}

export interface ObjectType {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export interface ObjectTypesContent {
  eyebrow: string;
  heading: string;
  subtitle: string;
  items: ObjectType[];
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
  width: number;
}

export interface ClientsContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: Client[];
}

export interface Principle {
  title: string;
  description: string;
}

export interface ControlItem {
  icon: string;
  title: string;
  description: string;
}

export interface ControlContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ControlItem[];
}

export interface HeroFeature {
  title: string;
  description: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  features: HeroFeature[];
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  modal: {
    successTitle: string;
    successText: string;
  };
}
