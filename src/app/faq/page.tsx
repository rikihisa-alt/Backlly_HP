import Header from "@/components/sections/Header";
import PageHero from "@/components/ui/PageHero";
import FAQ from "@/components/sections/FAQ";
import ConsultTopics from "@/components/sections/ConsultTopics";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "よくあるご質問 | 株式会社Backlly",
  description: "Backllyへのよくあるご質問をまとめています。相談内容や費用、期間などについてお答えします。",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero label="FAQ" title="よくあるご質問" image="/images/bg-desk.jpg" />
        <FAQ />
        <ConsultTopics />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
