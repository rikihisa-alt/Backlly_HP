import Header from "@/components/sections/Header";
import PageHero from "@/components/ui/PageHero";
import Vision from "@/components/sections/Vision";
import Mission from "@/components/sections/Mission";
import Value from "@/components/sections/Value";
import Strengths from "@/components/sections/Strengths";
import ServiceSummary from "@/components/sections/ServiceSummary";
import CEOMessage from "@/components/sections/CEOMessage";
import CompanyInfoSection from "@/components/sections/CompanyInfoSection";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "会社情報 | 株式会社Backlly",
  description: "株式会社Backllyの会社概要、理念、代表メッセージをご紹介します。",
};

export default function CompanyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero label="COMPANY" title="会社情報" image="/images/bg-team.jpg" />
        <Vision />
        <Mission />
        <Value />
        <Strengths />
        <ServiceSummary />
        <CEOMessage />
        <CompanyInfoSection />
      </main>
      <Footer />
    </>
  );
}
