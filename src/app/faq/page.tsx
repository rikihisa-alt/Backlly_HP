import Header from "@/components/sections/Header";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/sections/FAQ";
import ConsultTopics from "@/components/sections/ConsultTopics";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "よくあるご質問",
  description: "Backllyへのよくあるご質問をまとめています。相談内容や費用、期間などについてお答えします。",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="FAQ"
          title="よくある、ご質問。"
          subtitle="費用や対応期間、業界の対応範囲など、お問い合わせの多い質問にお答えしています。"
          image="/images/img-thinker.jpg"
        />
        <FAQ />
        <ConsultTopics />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
