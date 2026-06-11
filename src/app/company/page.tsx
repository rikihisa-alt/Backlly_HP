import Header from "@/components/sections/Header";
import PageHero from "@/components/ui/PageHero";
import VisionBrief from "@/components/sections/VisionBrief";
import Strengths from "@/components/sections/Strengths";
import CompanyInfoSection from "@/components/sections/CompanyInfoSection";
import CEOMessage from "@/components/sections/CEOMessage";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "会社情報",
  description:
    "株式会社Backllyの会社概要、強み、代表メッセージなど、会社情報をご紹介します。",
};

/**
 * /company ページ。
 * 会社情報寄りの構成。
 *   PageHero → VisionBrief（理念は要約のみ） → Strengths → CompanyInfo → CEOMessage → CTA
 * 詳細な理念・ミッション・バリューは /about 側に集約。
 */
export default function CompanyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="COMPANY"
          title="会社情報。"
          subtitle="バックオフィスを機能させる、その背後にいるチームと組織。事業概要・支援体制・代表からのメッセージをまとめています。"
          image="/images/img-office.jpg"
        />
        <VisionBrief />
        <Strengths />
        <CompanyInfoSection />
        <CEOMessage />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
