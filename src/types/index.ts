export interface HeroContent {
  headline: string;
  subline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface ProblemContent {
  headline: string;
  items: string[];
}

export interface RoutingItem {
  target: string;
  description: string;
  label: string;
  service: string;
  href: string;
}

export interface RoutingContent {
  headline: string;
  items: RoutingItem[];
}

export interface SolutionContent {
  headline: string;
  items: string[];
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface ApproachContent {
  headline: string;
  steps: ApproachStep[];
}

export interface ServiceItem {
  id: string;
  name: string;
  label: string;
  tagline: string;
  description: string;
  logo?: string;
}

export interface VisionContent {
  headline: string;
  body: string[];
}

export interface MissionContent {
  headline: string;
  body: string[];
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface CaseStudyItem {
  client: string;
  description: string;
  result: string;
}

export interface StrengthItem {
  title: string;
  description: string;
}

export interface CEOMessageContent {
  headline: string;
  body: string[];
}

export interface CompanyInfoContent {
  headline: string;
  name: string;
  representative: string;
  location: string;
  phone: string;
  services: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CTAContent {
  headline: string;
  subline: string;
  examples: string[];
  ctaPrimary: string;
}

export interface FooterContent {
  name: string;
  catchphrase: string;
  copyright: string;
}

export interface SiteContent {
  hero: HeroContent;
  problem: ProblemContent;
  routing: RoutingContent;
  solution: SolutionContent;
  approach: ApproachContent;
  services: ServiceItem[];
  vision: VisionContent;
  mission: MissionContent;
  values: ValueItem[];
  caseStudies: CaseStudyItem[];
  strengths: StrengthItem[];
  ceoMessage: CEOMessageContent;
  companyInfo: CompanyInfoContent;
  faq: FAQItem[];
  cta: CTAContent;
  footer: FooterContent;
  differentiator: string;
}
