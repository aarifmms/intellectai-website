import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SloganBar from "@/components/ui/SloganBar";
import Hero from "@/components/sections/Hero";
import LogoBar from "@/components/sections/LogoBar";
import Problem from "@/components/sections/Problem";
import AgentVsChatbot from "@/components/sections/AgentVsChatbot";
import AgentDemo from "@/components/sections/AgentDemo";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import ValueProps from "@/components/sections/ValueProps";
import ROICalculator from "@/components/sections/ROICalculator";
import CaseStudy from "@/components/sections/CaseStudy";
import HowItWorks from "@/components/sections/HowItWorks";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import SectionReveal from "@/components/ui/SectionReveal";

export default function Home() {
  return (
    <>
      <Header />
      <SloganBar />
      <main className="relative">
        <Hero />
        <SectionReveal>
          <LogoBar />
        </SectionReveal>
        <SectionReveal>
          <Problem />
        </SectionReveal>
        <SectionReveal>
          <AgentVsChatbot />
        </SectionReveal>
        <SectionReveal>
          <AgentDemo />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <Services />
        </SectionReveal>
        <SectionReveal>
          <Industries />
        </SectionReveal>
        <SectionReveal>
          <ValueProps />
        </SectionReveal>
        <SectionReveal>
          <ROICalculator />
        </SectionReveal>
        <SectionReveal>
          <CaseStudy />
        </SectionReveal>
        <SectionReveal>
          <HowItWorks />
        </SectionReveal>
        <SectionReveal>
          <About />
        </SectionReveal>
        <SectionReveal>
          <FAQ />
        </SectionReveal>
        <SectionReveal>
          <FinalCTA />
        </SectionReveal>
      </main>
      <Footer />
    </>
  );
}
