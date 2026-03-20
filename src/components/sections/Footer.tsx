import Image from "next/image";
import { siteContent } from "@/data/content";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Service", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-[#0A1420] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div>
            <Image
              src="/images/logo-backlly.png"
              alt="Backlly"
              width={100}
              height={28}
              className="h-7 w-auto mb-4 brightness-0 invert opacity-70"
            />
            <p className="text-white/25 text-sm">
              {footer.catchphrase}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/35 text-sm hover:text-white/60 transition-colors"
              >
                {link.label}
              </a>
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
