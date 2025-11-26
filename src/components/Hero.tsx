import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { useState, useEffect } from "react";

interface CodeLine {
  id: string;
  text: string;
  highlight?: string;
  dotColor: string;
  isPulsing?: boolean;
  isWarning?: boolean;
}

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
        
        if (charProgress >= 1) {
          return char;
        } else if (charProgress > 0) {
          return Math.random() > charProgress 
            ? chars[Math.floor(Math.random() * chars.length)]
            : char;
        } else {
          return chars[Math.floor(Math.random() * chars.length)];
        }
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
  const { displayText, isComplete } = useScrambleText("NAVIGATE IN THE SHADOW LAYER", 1800);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // All possible code operations (30+ lines with warnings/alerts)
  const allCodeOperations: CodeLine[] = [
    { id: '1', text: 'initializing shadow_client...', dotColor: 'bg-primary/60' },
    { id: '2', text: 'detect(fingerprint) → ', highlight: 'fingerprint_shielded ✓', dotColor: 'bg-primary', isPulsing: true },
    { id: '3', text: 'zk_proof(wallet_ownership) → ', highlight: 'verified ✓', dotColor: 'bg-accent', isPulsing: true },
    { id: '4', text: 'session_identity = ', highlight: 'rotating_ID_74829', dotColor: 'bg-[#A5AFC3]/40' },
    { id: '5', text: 'routing.mask = ', highlight: 'active', dotColor: 'bg-primary/60' },
    { id: '6', text: 'tracking_signals = ', highlight: 'nullified', dotColor: 'bg-accent/60' },
    { id: '7', text: 'risk_vector_scan → ', highlight: 'clear', dotColor: 'bg-primary', isPulsing: true },
    { id: '8', text: '⚠ WARNING: ', highlight: 'tracking attempt detected and blocked', dotColor: 'bg-yellow-500', isPulsing: true, isWarning: true },
    { id: '9', text: 'gate.simulate(transaction) → ', highlight: 'approved', dotColor: 'bg-accent', isPulsing: true },
    { id: '10', text: 'corridor.link_established → ', highlight: 'encrypted_tunnel ✓', dotColor: 'bg-primary' },
    { id: '11', text: 'websocket.shield_layer → ', highlight: 'connected', dotColor: 'bg-primary/60' },
    { id: '12', text: 'entropy.pool = ', highlight: 'refreshed', dotColor: 'bg-accent/60' },
    { id: '13', text: 'fingerprint.rotation → ', highlight: 'cycle_23', dotColor: 'bg-primary/60' },
    { id: '14', text: 'dns.queries = ', highlight: 'obfuscated', dotColor: 'bg-accent/60' },
    { id: '15', text: 'browser.canvas = ', highlight: 'randomized', dotColor: 'bg-primary/60' },
    { id: '16', text: '🛡 ALERT: ', highlight: 'malicious contract signature neutralized', dotColor: 'bg-yellow-500', isPulsing: true, isWarning: true },
    { id: '17', text: 'webrtc.leak_protection → ', highlight: 'enabled', dotColor: 'bg-primary', isPulsing: true },
    { id: '18', text: 'timing_attack_mitigation → ', highlight: 'active', dotColor: 'bg-accent/60' },
    { id: '19', text: 'keyboard_signature = ', highlight: 'masked', dotColor: 'bg-primary/60' },
    { id: '20', text: 'mouse_behavior = ', highlight: 'normalized', dotColor: 'bg-accent/60' },
    { id: '21', text: 'screen_resolution = ', highlight: 'spoofed', dotColor: 'bg-primary/60' },
    { id: '22', text: 'fonts.enumeration = ', highlight: 'blocked', dotColor: 'bg-accent/60' },
    { id: '23', text: 'clipboard.isolation → ', highlight: 'enforced', dotColor: 'bg-primary', isPulsing: true },
    { id: '24', text: '⚠ WARNING: ', highlight: 'fingerprinting script detected on page', dotColor: 'bg-yellow-500', isPulsing: true, isWarning: true },
    { id: '25', text: 'storage.partitioning = ', highlight: 'strict', dotColor: 'bg-accent/60' },
    { id: '26', text: 'cookie.jar = ', highlight: 'sanitized', dotColor: 'bg-primary/60' },
    { id: '27', text: 'referrer.policy = ', highlight: 'strict-origin', dotColor: 'bg-accent/60' },
    { id: '28', text: 'user_agent = ', highlight: 'synthetic_UA_v2.4', dotColor: 'bg-primary/60' },
    { id: '29', text: 'tls.fingerprint = ', highlight: 'rotated', dotColor: 'bg-accent/60' },
    { id: '30', text: 'http_headers = ', highlight: 'minimized', dotColor: 'bg-primary/60' },
    { id: '31', text: 'certificate.validation → ', highlight: 'passed', dotColor: 'bg-primary', isPulsing: true },
    { id: '32', text: '🛡 ALERT: ', highlight: 'cross-site request forgery blocked', dotColor: 'bg-yellow-500', isPulsing: true, isWarning: true },
    { id: '33', text: 'network.latency = ', highlight: 'normalized', dotColor: 'bg-accent/60' },
    { id: '34', text: 'packet.size_analysis → ', highlight: 'masked', dotColor: 'bg-primary/60' },
    { id: '35', text: 'connection.pool = ', highlight: 'isolated', dotColor: 'bg-accent/60' },
    { id: '36', text: 'session.cookies = ', highlight: 'partitioned', dotColor: 'bg-primary/60' },
    { id: '37', text: 'geolocation.spoof → ', highlight: 'active', dotColor: 'bg-accent', isPulsing: true },
    { id: '38', text: 'hardware.fingerprint = ', highlight: 'obfuscated', dotColor: 'bg-primary/60' },
    { id: '39', text: '⚠ WARNING: ', highlight: 'third-party tracker intercepted', dotColor: 'bg-yellow-500', isPulsing: true, isWarning: true },
  ];

  // State for visible lines in the terminal
  const [visibleLines, setVisibleLines] = useState<CodeLine[]>(
    allCodeOperations.slice(0, 10)
  );
  const [lineIndex, setLineIndex] = useState(10);

  // Continuously cycle through code operations
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        const newLines = prev.slice(1); // Remove first line
        const nextLine = allCodeOperations[lineIndex % allCodeOperations.length];
        setLineIndex((i) => i + 1);
        return [...newLines, { ...nextLine, id: `${nextLine.id}-${Date.now()}` }]; // Add new line at bottom
      });
    }, 2500); // Every 2.5 seconds

    return () => clearInterval(interval);
  }, [lineIndex]);

  return (
    <section id="hero" className="relative pt-24 pb-20 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-32 overflow-x-hidden" style={{ minHeight: 'min(100vh, 900px)' }}>
      {/* Subtle metallic vignettes */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-accent/6 via-transparent to-transparent rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Single Column Layout */}
        <div className="flex flex-col items-center text-center">
          
          {/* Headline with encrypted → decrypted animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mb-5 sm:mb-6 max-w-4xl"
          >
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-azonix leading-[1.05] tracking-[0.03em] sm:tracking-[0.08em] md:tracking-[0.12em] uppercase relative text-glow-emerald-soft"
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
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
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
            className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-body text-steel mb-6 sm:mb-8"
          >
            Zxora shields your identity, device fingerprint, routing patterns, approvals, and wallet behavior—every action passes through an autonomous ZK-powered defense layer.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14 lg:mb-16 w-full sm:w-auto"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("cta")}
              variant="outline"
              className="font-display tracking-wide w-full sm:w-auto"
            >
              REQUEST EARLY ACCESS
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("how-it-works")}
              className="font-display tracking-wide w-full sm:w-auto"
            >
              VIEW HOW IT WORKS
            </Button>
          </motion.div>

          {/* dApp Video Frame - Minimal Borderless */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-6xl group"
          >
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* Minimal High-Tech Frame */}
              <div 
                className="rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.9),0_0_1px_rgba(0,227,140,0.3)] relative transition-shadow duration-300 group-hover:shadow-[0_30px_100px_rgba(0,0,0,0.9),0_0_40px_rgba(0,227,140,0.25)]"
              >
                
                {/* Ultra-slim emerald border */}
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-300"
                  style={{
                    border: '1px solid rgba(0,227,140,0.25)',
                    boxShadow: 'inset 0 0 20px rgba(0,227,140,0.05), 0 0 20px rgba(0,227,140,0.1)'
                  }}
                />

                {/* Video Element - Full Fit */}
                <div className="relative bg-black overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop
                    playsInline
                  >
                    <source src="/videos/zxora-walkthrough.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Optional: Subtle scan line animation */}
                  <motion.div
                    animate={{ y: ['0%', '100%'] }}
                    transition={{ 
                      duration: 12, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald/15 to-transparent pointer-events-none"
                    style={{ top: 0 }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
