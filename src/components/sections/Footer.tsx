import { siteContent } from "@/data/content";

const navLinks = [
  { label: "課題", href: "#problem" },
  { label: "サービス", href: "#services" },
  { label: "進め方", href: "#approach" },
  { label: "会社情報", href: "#company" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-[#0A1420] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left */}
          <div>
            <p className="text-white font-serif text-lg font-bold">
              {footer.name}
            </p>
            <p className="text-white/40 text-sm mt-2">
              {footer.catchphrase}
            </p>
          </div>

          {/* Right - Nav links */}
          <nav className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/50 text-sm hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/30 text-xs">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
