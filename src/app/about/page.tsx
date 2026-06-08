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
  title: "Backllyについて | 株式会社Backlly",
  description: "株式会社Backllyのビジョン・ミッション・バリュー、代表メッセージをご紹介します。",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="ABOUT"
          title="Backllyの考え方。"
          subtitle="人ではなく、業務そのものを設計し直す。私たちの根っこにある思想と、目指す未来をお伝えします。"
          image="/images/img-stairs.png"
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
