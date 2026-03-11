import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import zxoraIcon from "@/assets/zxora-icon.png";
import zxora3dLogo from "@/assets/zxora-3d-logo.png";

// Scrambled text animation hook
const useScrambleText = (finalText: string, duration: number = 1800) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  
  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&@?";
    const finalChars = finalText.split("");
    const steps = 60;
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      const newText = finalChars.map((char, index) => {
        if (char === " ") return " ";
        const charProgress = (progress - (index / finalChars.length) * 0.3) / 0.7;
        if (charProgress >= 1) return char;
        else if (charProgress > 0) return Math.random() > charProgress ? chars[Math.floor(Math.random() * chars.length)] : char;
        else return chars[Math.floor(Math.random() * chars.length)];
      }).join("");
      
      setDisplayText(newText);
      
      if (currentStep >= steps) {
        clearInterval(interval);
        setDisplayText(finalText);
        setIsComplete(true);
      }
    }, duration / steps);
    
    return () => clearInterval(interval);
  }, [finalText, duration]);
  
  return { displayText, isComplete };
};

const Hero = () => {
  const { displayText, isComplete } = useScrambleText("THE OPERATING SYSTEM FOR AUTONOMOUS AGENTS", 1800);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-20 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-32 overflow-x-hidden" style={{ minHeight: 'min(100vh, 900px)' }}>
      {/* Subtle metallic vignettes */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="relative mb-5 sm:mb-6"
            >
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-azonix leading-[1.05] tracking-[0.03em] sm:tracking-[0.08em] uppercase relative text-glow-emerald-soft"
                style={{
                  background: 'linear-gradient(135deg, hsl(230, 12%, 48%), hsl(230, 10%, 58%), hsl(235, 15%, 42%), hsl(230, 8%, 55%))',
                  backgroundSize: '200% 200%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 16px rgba(0,227,140,0.12))'
                }}
              >
                <motion.span
                  animate={isComplete ? {
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  } : {}}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{
                    background: 'linear-gradient(135deg, hsl(230, 12%, 48%), hsl(230, 10%, 58%), hsl(235, 15%, 42%), hsl(230, 8%, 55%))',
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {displayText}
                </motion.span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-body text-steel mb-6 sm:mb-8"
            >
              Budgets. Approvals. Treasury. Verifiable receipts. Zxora is the economic control plane that makes AI agents accountable — built natively on OpenClaw.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
            >
              <a
                href="https://app.zxora.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="font-display tracking-wide w-full sm:w-auto"
                >
                  LAUNCH DASHBOARD
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("how-it-works")}
                className="font-display tracking-wide w-full sm:w-auto"
              >
                HOW IT WORKS
              </Button>
            </motion.div>
          </div>

          {/* Right: 3D Logo with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex items-center justify-center relative min-h-[400px] sm:min-h-[500px] lg:min-h-[560px]"
          >
            {/* Core glow - bright and visible */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[500px] lg:h-[500px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, hsla(159, 100%, 44%, 0.4), hsla(159, 100%, 44%, 0.15) 50%, transparent 70%)', filter: 'blur(60px)' }}
            />
            {/* Outer ambient glow */}
            <motion.div
              animate={{ scale: [1.1, 0.95, 1.1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] lg:w-[650px] lg:h-[650px] rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, hsla(165, 80%, 40%, 0.2), hsla(155, 90%, 50%, 0.08) 45%, transparent 70%)', filter: 'blur(90px)' }}
            />

            {/* Logo */}
            <motion.img
              src={zxora3dLogo}
              alt="Zxora"
              className="relative z-10 w-[340px] sm:w-[440px] md:w-[520px] lg:w-[580px] h-auto"
              style={{ filter: 'drop-shadow(0 0 40px hsla(159, 100%, 44%, 0.35))' }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
