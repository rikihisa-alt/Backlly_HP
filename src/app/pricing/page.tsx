import Header from "@/components/sections/Header";
import PageHero from "@/components/ui/PageHero";
import Pricing from "@/components/sections/Pricing";
import Simulator from "@/components/sections/Simulator";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: "料金 | 株式会社Backlly",
  description: "Backllyの料金体系。業務整理・B-Hall・B-Core・運用サポートの料金をご確認いただけます。",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero label="PRICING" title="料金体系" image="/images/bg-office.jpg" />
        <Pricing />
        <Simulator />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
