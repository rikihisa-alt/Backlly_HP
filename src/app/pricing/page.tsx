import Header from "@/components/sections/Header";
import PageHero from "@/components/ui/PageHero";
import Pricing from "@/components/sections/Pricing";
import Simulator from "@/components/sections/Simulator";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "料金",
  description: "Backllyの料金体系。業務整理・B-Hall・B-Core・運用サポートの料金をご確認いただけます。",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          label="PRICING"
          title="必要なところに、必要な分だけ。"
          subtitle="業務整理・システム開発・運用保守を、企業の状況に合わせて柔軟に組み合わせ。料金の目安と料金シミュレーターをご確認ください。"
          image="/images/img-plaza.jpg"
        />
        <Pricing />
        <Simulator />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
