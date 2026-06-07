import Link from "next/link";
import { siteContent } from "@/data/content";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Works", href: "/works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/company" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-12 flex items-center justify-between">
        <p className="text-white/50 text-[11px] md:text-xs tracking-wide">
          {footer.catchphrase}
        </p>

        <nav className="hidden md:flex items-center gap-5">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/40 text-[11px] hover:text-white/80 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-white/40 text-[11px] tracking-wide">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
