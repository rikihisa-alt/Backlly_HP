import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Routing from "@/components/sections/Routing";
import Solution from "@/components/sections/Solution";
import Approach from "@/components/sections/Approach";
import Services from "@/components/sections/Services";
import BHallDetail from "@/components/sections/BHallDetail";
import BCoreFlow from "@/components/sections/BCoreFlow";
import TrustBand from "@/components/sections/TrustBand";
import CaseStudies from "@/components/sections/CaseStudies";
import Vision from "@/components/sections/Vision";
import Mission from "@/components/sections/Mission";
import Value from "@/components/sections/Value";
import Strengths from "@/components/sections/Strengths";
import CEOMessage from "@/components/sections/CEOMessage";
import CompanyInfoSection from "@/components/sections/CompanyInfoSection";
import Pricing from "@/components/sections/Pricing";
import Simulator from "@/components/sections/Simulator";
import FAQ from "@/components/sections/FAQ";
import ResourceDownload from "@/components/sections/ResourceDownload";
import ConsultTopics from "@/components/sections/ConsultTopics";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Routing />
        <Solution />
        <Approach />
        <Services />
        <BHallDetail />
        <BCoreFlow />
        <TrustBand />
        <CaseStudies />
        <Vision />
        <Mission />
        <Value />
        <Strengths />
        <CEOMessage />
        <CompanyInfoSection />
        <Pricing />
        <Simulator />
        <FAQ />
        <ResourceDownload />
        <ConsultTopics />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
