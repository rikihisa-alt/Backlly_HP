import Header from "@/components/sections/Header";
import PageHero from "@/components/ui/PageHero";
import Vision from "@/components/sections/Vision";
import Mission from "@/components/sections/Mission";
import Value from "@/components/sections/Value";
import CEOMessage from "@/components/sections/CEOMessage";
import ServiceSummary from "@/components/sections/ServiceSummary";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "Backllyについて",
  description:
    "株式会社Backllyの考え方。ビジョン・ミッション・大切にしている姿勢、そして代表メッセージをご紹介します。",
};

/**
 * /about ページ。
 * 「Backllyの考え方」を伝える理念寄りの構成。
 *   PageHero → Vision → Mission → Value → ServiceSummary → CEOMessage → CTA
 * 会社情報・強みなどは /company で取り扱う。
 *
 * 背景色は bg-bg-white → bg-bg → bg-bg-white → ... と帯で交互配置し、
 * 連続したセクションが単調にならないようにしている。
 */
export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="ABOUT"
          title="Backllyの、考え方。"
          subtitle={`人ではなく、業務そのものを設計し直す。私たちの根っこにある思想と、目指す"当たり前"をお伝えします。`}
          image="/images/img-stairs.jpg"
        />
        <Vision />
        <Mission />
        <Value />
        <ServiceSummary />
        <CEOMessage />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
