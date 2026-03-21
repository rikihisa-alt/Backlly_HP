import Header from "@/components/sections/Header";
import Problem from "@/components/sections/Problem";
import Routing from "@/components/sections/Routing";
import Solution from "@/components/sections/Solution";
import Approach from "@/components/sections/Approach";
import Services from "@/components/sections/Services";
import BHallDetail from "@/components/sections/BHallDetail";
import BCoreFlow from "@/components/sections/BCoreFlow";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "サービス | 株式会社Backlly",
  description: "バックオフィスの整理・運用・開発まで一貫して対応。コンサル、B-Hall、B-Coreの3つのサービスをご紹介します。",
};

export default function ServicePage() {
  return (
    <>
      <Header />
      <main>
        {/* Spacer for fixed header */}
        <div className="h-20" />
        <Problem />
        <Routing />
        <Solution />
        <Approach />
        <Services />
        <BHallDetail />
        <BCoreFlow />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
