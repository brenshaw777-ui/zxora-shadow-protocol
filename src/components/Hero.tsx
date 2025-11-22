import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle radial glow behind Shadow Core */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Hero Text in Glass/Metal HUD Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-[rgba(5,8,17,0.92)] backdrop-blur-sm border border-transparent shadow-[0_0_1px_rgba(199,204,216,0.3),inset_0_1px_0_rgba(255,255,255,0.03),inset_0_-1px_0_rgba(0,0,0,0.3)] relative overflow-hidden">
              
              {/* Metallic border gradient overlay */}
              <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-gunmetal/60 via-primary/10 to-accent/20 pointer-events-none" style={{ 
                mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                maskComposite: 'exclude'
              }} />
              
              <div className="space-y-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block"
                >
                  <span className="px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-primary/30 text-xs font-mono text-primary tracking-wider">
                    ZK-POWERED SHADOW CLIENT
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-[0.06em] uppercase"
                  style={{ color: '#E3E8F4' }}
                >
                  OPERATE IN THE SHADOW LAYER
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="text-lg leading-relaxed max-w-xl font-body"
                  style={{ color: '#A5AFC3' }}
                >
                  Zxora sits between you and every dApp, wallet, and website. It masks your identity, 
                  randomizes your fingerprint, and routes every interaction through a hardened Gate 
                  so who you are is never on the table.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("cta")}
                    className="font-display tracking-wide"
                  >
                    REQUEST EARLY ACCESS
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => scrollToSection("how-it-works")}
                    className="font-display tracking-wide"
                  >
                    VIEW HOW IT WORKS
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Shadow Core Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              
              {/* Shadow Core - Main Circular Element */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64"
              >
                {/* Core disc with metallic gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1A1D28] via-[#0A0C14] to-[#1A1D28] border border-gunmetal/60 shadow-[0_0_40px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.03)]" />
                
                {/* Inner grid overlay */}
                <div className="absolute inset-8 rounded-full opacity-20 bg-[linear-gradient(to_right,rgba(199,204,216,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(199,204,216,0.1)_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                {/* Concentric rings */}
                <div className="absolute inset-0 rounded-full border border-gunmetal/40" />
                <div className="absolute inset-12 rounded-full border border-gunmetal/30" />
                <div className="absolute inset-20 rounded-full border border-primary/20" />
                
                {/* Center glow */}
                <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary/10 blur-xl" />
              </motion.div>

              {/* Orbiting particles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/60" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear", delay: 5 }}
                className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72"
              >
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent/60" />
              </motion.div>

              {/* YOU Node - Top */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full border border-gunmetal bg-[rgba(5,8,17,0.95)] flex items-center justify-center relative">
                  <div className="absolute inset-3 rounded-full border border-gunmetal/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <span className="mt-3 font-mono text-[10px] text-soft-steel/70 tracking-widest uppercase">You</span>
              </motion.div>

              {/* MASK Node - Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full border border-primary/40 bg-[rgba(5,8,17,0.95)] flex items-center justify-center relative">
                  <div className="absolute inset-3 rounded-full border border-primary/30" />
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="mt-3 font-mono text-[10px] text-primary/80 tracking-widest uppercase">Mask</span>
              </motion.div>

              {/* THE GATE Node - Bottom */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
              >
                <span className="mb-3 font-mono text-[10px] text-primary tracking-widest uppercase">The Gate</span>
                <div className="w-16 h-16 rounded-full border-2 border-primary/50 bg-[rgba(5,8,17,0.95)] flex items-center justify-center relative">
                  <div className="absolute inset-3 rounded-full border border-primary/30" />
                  <div className="absolute inset-0 rounded-full bg-primary/5" />
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </motion.div>

              {/* DAPP/CHAIN Node - Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.4 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full border border-gunmetal bg-[rgba(5,8,17,0.95)] flex items-center justify-center relative">
                  <div className="absolute inset-3 rounded-full border border-gunmetal/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                </div>
                <span className="mt-3 font-mono text-[10px] text-soft-steel/70 tracking-widest uppercase">dApp</span>
              </motion.div>

              {/* Connection Lines with Data Flow */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {/* YOU → MASK */}
                <line x1="50%" y1="15%" x2="18%" y2="45%" stroke="hsl(var(--gunmetal))" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
                
                {/* MASK → THE GATE */}
                <line x1="20%" y1="55%" x2="48%" y2="82%" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5" strokeDasharray="3,3" />
                
                {/* THE GATE → DAPP */}
                <line x1="52%" y1="82%" x2="82%" y2="52%" stroke="hsl(var(--gunmetal))" strokeWidth="1" opacity="0.4" strokeDasharray="3,3" />
                
                {/* Flowing data packet - YOU to MASK */}
                <motion.circle
                  cx="50%"
                  cy="15%"
                  r="2"
                  fill="hsl(var(--primary))"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    cx: ["50%", "18%"],
                    cy: ["15%", "45%"],
                    opacity: [0, 0.8, 0.8, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Flowing data packet - MASK to GATE */}
                <motion.circle
                  cx="20%"
                  cy="55%"
                  r="2"
                  fill="hsl(var(--primary))"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    cx: ["20%", "48%"],
                    cy: ["55%", "82%"],
                    opacity: [0, 0.8, 0.8, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 1.5,
                    ease: "linear"
                  }}
                />
                
                {/* Flowing data packet - GATE to DAPP */}
                <motion.circle
                  cx="52%"
                  cy="82%"
                  r="2"
                  fill="hsl(var(--accent))"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    cx: ["52%", "82%"],
                    cy: ["82%", "52%"],
                    opacity: [0, 0.6, 0.6, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 3,
                    ease: "linear"
                  }}
                />
              </svg>

              {/* Label */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-full text-center">
                <span className="font-mono text-[9px] text-soft-steel/40 tracking-widest uppercase">
                  Shadow Core · Zxora architecture (conceptual)
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
