import Header from "@/components/sections/Header";
import PageHero from "@/components/ui/PageHero";
import Vision from "@/components/sections/Vision";
import Mission from "@/components/sections/Mission";
import Value from "@/components/sections/Value";
import CEOMessage from "@/components/sections/CEOMessage";
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
        <PageHero label="ABOUT" title="Backllyについて" image="/images/bg-office.jpg" />
        <Vision />
        <Mission />
        <Value />
        <CEOMessage />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
