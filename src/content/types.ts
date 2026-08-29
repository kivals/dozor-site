export interface ServiceHero {
  title: string;
  description: string;
  image: string;
  cta: string;
  /**
   * Desktop photo placement, taken from the Figma hero frame:
   * the image node's offset and size as a share of the 1457x475 card.
   */
  imageArea?: { top: string; left: string; width: string; height: string };
}

export interface ServiceOptionsGroup {
  title: string;
  /** Chips grouped into rows exactly as they are laid out in the design. */
  rows: string[][];
}

export interface ServiceOptions {
  eyebrow: string;
  title: string;
  base: ServiceOptionsGroup;
  extra: ServiceOptionsGroup;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceProcess {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
  steps: ServiceProcessStep[];
}

export interface ServiceBenefit {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceBenefits {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: ServiceBenefit[];
}

export interface ServiceCase {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export interface ServiceCases {
  eyebrow: string;
  title: string;
  items: ServiceCase[];
}

export interface ServiceSeo {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
  /** Landing-only service: has its own page but is not shown in the services list. */
  hiddenInList?: boolean;
  seo?: ServiceSeo;
  hero?: ServiceHero;
  objectTypes?: ObjectType[];
  /** Cards shown in the "Комплексные решения" grid on the service page. */
  solutions?: Service[];
  options?: ServiceOptions;
  process?: ServiceProcess;
  benefits?: ServiceBenefits;
  cases?: ServiceCases;
  /** Numbered list shown instead of the stats grid in the About section. */
  aboutHighlights?: string[];
  /** Overrides for the shared sections at the bottom of the page. */
  geography?: { title: string; description: string };
  reviews?: Review[];
  faq?: FaqItem[];
  feedback?: FeedbackContent;
}

export interface ServicesIntro {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export interface ObjectType {
  slug: string;
  title: string;
  description: string;
  image: string;
  /** Set when the card links to a service page. */
  href?: string;
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

export interface FaqContent {
  eyebrow: string;
  title: string;
  items: FaqItem[];
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

export interface FeedbackContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  submitLabel: string;
}

export interface DocumentItem {
  title: string;
  href: string;
}

export interface DocumentsTab {
  id: string;
  label: string;
  items: DocumentItem[];
}

export interface DocumentsContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  tabs: DocumentsTab[];
  downloadLabel: string;
}

export interface GeographyFeature {
  title: string;
  description: string;
}

export interface GeographyContent {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  features: GeographyFeature[];
  cities: string[];
}

export interface Review {
  author: string;
  objectType: string;
  text: string;
  rating: string;
}

export interface ReviewsContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: Review[];
}
