import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/content";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Works", href: "/works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Company", href: "/company" },
  { label: "FAQ", href: "/faq" },
  { label: "Download", href: "/download" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-navy py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <Link href="/">
              <Image
                src="/images/logo-backlly.png"
                alt="Backlly"
                width={140}
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert opacity-70"
              />
            </Link>
            <p className="text-white/25 text-sm mb-6">
              {footer.catchphrase}
            </p>

            {/* Company info */}
            <div className="text-white/20 text-xs space-y-1">
              <p>株式会社Backlly</p>
              <p>代表取締役 力久 凌太郎</p>
              <p>大阪府大阪市</p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="text-white/35 text-sm hover:text-white/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10">
          <p className="text-white/20 text-xs">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
