import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Routing from "@/components/sections/Routing";
import Vision from "@/components/sections/Vision";
import Solution from "@/components/sections/Solution";
import Founding from "@/components/sections/Founding";
import Approach from "@/components/sections/Approach";
import Services from "@/components/sections/Services";
import Strengths from "@/components/sections/Strengths";
import CEOMessage from "@/components/sections/CEOMessage";
import Trust from "@/components/sections/Trust";
import CompanyInfoSection from "@/components/sections/CompanyInfoSection";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div id="problem">
          <Problem />
        </div>
        <div id="routing">
          <Routing />
        </div>
        <Vision />
        <Solution />
        <Founding />
        <div id="approach">
          <Approach />
        </div>
        <div id="services">
          <Services />
        </div>
        <Strengths />
        <CEOMessage />
        <Trust />
        <CompanyInfoSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
