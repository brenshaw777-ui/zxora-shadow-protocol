import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import zxoraIcon from "@/assets/zxora-icon.png";

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
  const { displayText, isComplete } = useScrambleText("THE OPERATING SYSTEM FOR AUTONOMOUS AGENTS", 1800);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // All possible code operations
  const allCodeOperations: CodeLine[] = [
    { id: '1', text: 'connecting gateway...', dotColor: 'bg-primary/60' },
    { id: '2', text: 'agent "kai" → ', highlight: 'online ✓', dotColor: 'bg-primary', isPulsing: true },
    { id: '3', text: 'mission funded → ', highlight: '$2,500 USDC ✓', dotColor: 'bg-accent', isPulsing: true },
    { id: '4', text: 'budget_vault → ', highlight: 'enforced', dotColor: 'bg-[#A5AFC3]/40' },
    { id: '5', text: 'receipt_chain → ', highlight: 'recording...', dotColor: 'bg-primary/60' },
    { id: '6', text: 'approval_gate → ', highlight: 'active', dotColor: 'bg-accent/60' },
    { id: '7', text: 'spend_tracking → ', highlight: 'real-time', dotColor: 'bg-primary', isPulsing: true },
    { id: '8', text: '⚠ APPROVAL: ', highlight: 'agent requested $400 API spend — awaiting review', dotColor: 'bg-yellow-500', isPulsing: true, isWarning: true },
    { id: '9', text: 'budget.commit(model) → ', highlight: '$12.40 reserved', dotColor: 'bg-accent', isPulsing: true },
    { id: '10', text: 'receipt.anchor → ', highlight: 'merkle_root_submitted ✓', dotColor: 'bg-primary' },
    { id: '11', text: 'agent "scout" → ', highlight: 'dispatched', dotColor: 'bg-primary/60' },
    { id: '12', text: 'mission.status → ', highlight: 'active', dotColor: 'bg-accent/60' },
    { id: '13', text: 'vault.balance → ', highlight: '$2,087.60 remaining', dotColor: 'bg-primary/60' },
    { id: '14', text: 'category.model → ', highlight: '$312.40 committed', dotColor: 'bg-accent/60' },
    { id: '15', text: 'category.api → ', highlight: '$100.00 committed', dotColor: 'bg-primary/60' },
    { id: '16', text: '🛡 GATE: ', highlight: 'high-risk transfer paused — operator approval required', dotColor: 'bg-yellow-500', isPulsing: true, isWarning: true },
    { id: '17', text: 'gateway.health → ', highlight: 'connected', dotColor: 'bg-primary', isPulsing: true },
    { id: '18', text: 'agent.wallet → ', highlight: 'bound', dotColor: 'bg-accent/60' },
    { id: '19', text: 'receipt.hash → ', highlight: '0x7f3a...c291', dotColor: 'bg-primary/60' },
    { id: '20', text: 'treasury.usdc → ', highlight: '$15,000.00', dotColor: 'bg-accent/60' },
    { id: '21', text: 'mission.progress → ', highlight: '67% complete', dotColor: 'bg-primary/60' },
    { id: '22', text: 'spend.total → ', highlight: '$412.40', dotColor: 'bg-accent/60' },
    { id: '23', text: 'approval.resolved → ', highlight: 'approved ✓', dotColor: 'bg-primary', isPulsing: true },
    { id: '24', text: '⚠ BUDGET: ', highlight: 'API category at 80% — approaching cap', dotColor: 'bg-yellow-500', isPulsing: true, isWarning: true },
    { id: '25', text: 'x402.payment → ', highlight: '$0.02 per call', dotColor: 'bg-accent/60' },
    { id: '26', text: 'receipt.batch → ', highlight: '24 receipts queued', dotColor: 'bg-primary/60' },
    { id: '27', text: 'agent "analyst" → ', highlight: 'mission complete ✓', dotColor: 'bg-accent/60' },
    { id: '28', text: 'vault.release → ', highlight: '$587.60 returned', dotColor: 'bg-primary/60' },
    { id: '29', text: 'merkle.root → ', highlight: 'anchored on Base L2 ✓', dotColor: 'bg-accent/60' },
    { id: '30', text: 'audit.status → ', highlight: 'fully verifiable', dotColor: 'bg-primary/60' },
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
        const newLines = prev.slice(1);
        const nextLine = allCodeOperations[lineIndex % allCodeOperations.length];
        setLineIndex((i) => i + 1);
        return [...newLines, { ...nextLine, id: `${nextLine.id}-${Date.now()}` }];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [lineIndex]);

  return (
    <section id="hero" className="relative pt-24 pb-20 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-32 overflow-x-hidden" style={{ minHeight: 'min(100vh, 900px)' }}>
      {/* Subtle metallic vignettes */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/8 via-transparent to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-gradient-radial from-accent/6 via-transparent to-transparent rounded-full blur-3xl" />
      
      {/* Subtle Logo Watermark */}
      <div className="absolute bottom-20 right-10 opacity-[0.03] pointer-events-none">
        <img src={zxoraIcon} alt="" className="w-[500px] h-[500px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Single Column Layout */}
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/5 border border-emerald/20">
              <img src={zxoraIcon} alt="Zxora" className="w-4 h-4" />
              <span className="text-emerald text-xs font-mono tracking-wider uppercase">OpenClaw-Native Economic Layer</span>
            </div>
          </motion.div>
          
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
            Budgets. Approvals. Treasury. Verifiable receipts. Zxora is the economic control plane that makes AI agents accountable — built natively on OpenClaw.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-14 lg:mb-16 w-full sm:w-auto"
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
              {/* Minimal High-Tech Frame with Slim Border & Glow */}
              <div 
                className="rounded-2xl overflow-hidden relative transition-all duration-300"
                style={{
                  border: '1px solid rgba(0,227,140,0.3)',
                  boxShadow: '0 0 30px rgba(0,227,140,0.12), 0 30px 80px rgba(0,0,0,0.8)',
                }}
              >
                {/* Video Element - Natural Dimensions */}
                <div className="relative">
                  <video 
                    className="w-full h-auto block"
                    autoPlay 
                    muted 
                    loop
                    playsInline
                  >
                    <source src="/videos/zxora-walkthrough.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Subtle scan line animation */}
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
