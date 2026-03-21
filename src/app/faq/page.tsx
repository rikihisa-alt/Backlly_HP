import Header from "@/components/sections/Header";
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
        <div className="h-20" />
        <FAQ />
        <ConsultTopics />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
