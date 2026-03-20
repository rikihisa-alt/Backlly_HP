import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Routing from "@/components/sections/Routing";
import Solution from "@/components/sections/Solution";
import Approach from "@/components/sections/Approach";
import Services from "@/components/sections/Services";
import Strengths from "@/components/sections/Strengths";
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
        <Solution />
        <div id="approach">
          <Approach />
        </div>
        <div id="services">
          <Services />
        </div>
        <Strengths />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
