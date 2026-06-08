import Header from "@/components/sections/Header";
import PageHero from "@/components/ui/PageHero";
import TrustBand from "@/components/sections/TrustBand";
import CaseStudies from "@/components/sections/CaseStudies";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "導入事例 | 株式会社Backlly",
  description: "Backllyの導入事例をご紹介。医療・IT・福祉など、業種別の課題解決事例をご覧いただけます。",
};

export default function WorksPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="WORKS"
          title="動かした、実例。"
          subtitle="医療・福祉・IT・士業まで。業界も規模も異なる組織で、業務がどのように整理され、回り始めたかをご紹介します。"
          image="/images/img-meeting.png"
        />
        <TrustBand />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
