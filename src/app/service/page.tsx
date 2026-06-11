import Header from "@/components/sections/Header";
import PageHero from "@/components/ui/PageHero";
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
  title: "サービス",
  description: "バックオフィスの整理・運用・開発・HP制作まで一貫して対応。バックオフィスコンサルティング、B-Hall、B-Core、HP・LP制作のサービスをご紹介します。",
};

export default function ServicePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="SERVICE"
          title="整える、回す、作る、届ける。"
          subtitle="バックオフィスを機能させる4つのサービス。コンサルティング、一元管理システム、業務システム開発、Webサイト制作までを一貫して提供します。"
          image="/images/img-desk.jpg"
        />
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
