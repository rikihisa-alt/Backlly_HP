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
        <PageHero label="WORKS" title="導入事例" image="/images/bg-meeting.jpg" />
        <TrustBand />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
