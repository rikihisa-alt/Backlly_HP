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
  tagline: string;
  description: string;
}

export interface StrengthItem {
  text: string;
}

export interface CTAContent {
  headline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface FooterContent {
  name: string;
  catchphrase: string;
  copyright: string;
}

export interface CompanyInfo {
  name: string;
}

export interface SiteContent {
  hero: HeroContent;
  problem: ProblemContent;
  routing: RoutingContent;
  solution: SolutionContent;
  approach: ApproachContent;
  services: ServiceItem[];
  strengths: StrengthItem[];
  cta: CTAContent;
  footer: FooterContent;
  company: CompanyInfo;
}
