import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AnimationsShowcase from "@/components/AnimationsShowcase";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Tokenomics from "@/components/Tokenomics";
import ZxoraShadowAgent from "@/components/ZxoraShadowAgent";
import LinksHub from "@/components/LinksHub";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import DataStreamBackground from "@/components/DataStreamBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020307] via-[#050811] to-[#020307] text-foreground relative overflow-x-hidden">
      {/* Global Data Stream Background */}
      <DataStreamBackground />
      
      {/* Main Content - Sits Above Data Stream */}
      <div className="relative z-10 max-w-full overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <Story />
          <HowItWorks />
          <Features />
          <AnimationsShowcase />
          <Roadmap />
          <ZxoraShadowAgent />
          <Tokenomics />
          <LinksHub />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
