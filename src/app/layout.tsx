import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import ContactPopup from "@/components/ui/ContactPopup";

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://backlly-hp.vercel.app"),
  title: {
    default: "株式会社Backlly | バックオフィスを、機能させる。",
    template: "%s | 株式会社Backlly",
  },
  description:
    "業務を整え、運用し、実装する。バックオフィスの課題を構造的に解決します。",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社Backlly",
    title: "株式会社Backlly | バックオフィスを、機能させる。",
    description:
      "業務を整え、運用し、実装する。バックオフィスの課題を構造的に解決します。",
    images: [{ url: "/images/hero-main.jpg", width: 1672, height: 941 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSerifJP.variable} ${notoSansJP.variable}`}>
      <body className="font-sans antialiased pb-12">
        {children}
        <ContactPopup />
      </body>
    </html>
  );
}
