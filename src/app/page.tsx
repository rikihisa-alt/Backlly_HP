import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import FlowLine from "@/components/sections/FlowLine";
import Vision from "@/components/sections/Vision";
import Services from "@/components/sections/Services";
import Capabilities from "@/components/sections/Capabilities";
import TrustBand from "@/components/sections/TrustBand";
import CompanyInfoSection from "@/components/sections/CompanyInfoSection";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FlowLine />
        <Vision />
        <Services />
        <Capabilities />
        <TrustBand />
        <CompanyInfoSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
