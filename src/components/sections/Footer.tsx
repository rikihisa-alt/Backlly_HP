import { siteContent } from "@/data/content";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-12 flex items-center justify-end">
        <p className="text-white/55 text-[11px] tracking-wide">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
