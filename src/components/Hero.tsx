import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-subtle-float" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl animate-subtle-float" style={{ animationDelay: "4s" }} />
      
      {/* Binary Data Streams - Slower and More Coverage */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`stream-${i}`}
          className="absolute top-0 font-mono text-xs text-soft-steel/15 pointer-events-none"
          style={{ left: `${(i + 1) * 5}%` }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: "100vh", 
            opacity: [0, 0.25, 0.25, 0] 
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('\n').split('\n').map((char, idx) => (
            <div key={idx} className="leading-6">{char}</div>
          ))}
        </motion.div>
      ))}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content with Glowing Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 lg:p-10 rounded-2xl bg-[rgba(5,8,17,0.94)] border border-gradient-to-br from-primary/30 via-accent/20 to-primary/30 shadow-[0_0_50px_rgba(108,77,255,0.15),inset_0_0_30px_rgba(108,77,255,0.05)]"
          >
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-card border border-primary/30 text-xs font-mono text-primary tracking-wider">
                  ZK-POWERED SHADOW CLIENT
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.15] tracking-[0.08em] metallic-heading"
              >
                OPERATE IN THE SHADOW LAYER
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-xl font-body"
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
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          </motion.div>

          {/* Right Side - Zxora Browser Mock */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Browser Window Container */}
              <div className="rounded-2xl bg-gradient-to-b from-[#050811] to-[#0A101B] border border-gunmetal/50 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden">
                
                {/* Top Bar - Browser Chrome */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gunmetal/40 bg-[#0C0F18]/80">
                  {/* Window Controls */}
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-gunmetal/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gunmetal/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gunmetal/60" />
                  </div>
                  
                  {/* URL Bar */}
                  <div className="flex-1 mx-4 px-4 py-1.5 rounded-lg bg-[#05070D] border border-gunmetal/30 flex items-center gap-2">
                    <Shield className="w-3 h-3 text-primary" strokeWidth={2} />
                    <span className="font-mono text-xs text-soft-steel/70">zxora://dapp/session</span>
                  </div>
                  
                  {/* Shield Icon */}
                  <Shield className="w-4 h-4 text-primary" strokeWidth={1.5} />
                </div>

                {/* Main Content - Layered View */}
                <div className="relative h-80 overflow-hidden">
                  
                  {/* Back Layer - Shield/Protection Visual */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Radial Glow - Protected Zone */}
                    <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
                    
                    {/* Vertical Code Streams */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={`code-${i}`}
                        className="absolute top-0 font-mono text-[10px] text-soft-steel/10 pointer-events-none leading-5"
                        style={{ left: `${12 + i * 12}%` }}
                        initial={{ y: -100 }}
                        animate={{ y: "100%" }}
                        transition={{
                          duration: 20 + Math.random() * 10,
                          repeat: Infinity,
                          delay: Math.random() * 5,
                          ease: "linear"
                        }}
                      >
                        {Array.from({ length: 30 }, () => 
                          ['zk', 'tx', '0x', 'fn', 'db'][Math.floor(Math.random() * 5)]
                        ).map((code, idx) => (
                          <div key={idx}>{code}</div>
                        ))}
                      </motion.div>
                    ))}
                    
                    {/* Node Diagram: YOU → MASK → GATE → dApp */}
                    <svg className="absolute inset-0 w-full h-full opacity-20">
                      {/* Connection Lines */}
                      <line x1="20%" y1="50%" x2="35%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="2,3" opacity="0.4" />
                      <line x1="35%" y1="50%" x2="50%" y2="50%" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="2,3" opacity="0.4" />
                      <line x1="50%" y1="50%" x2="65%" y2="50%" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="2,3" opacity="0.4" />
                      
                      {/* Nodes */}
                      <circle cx="20%" cy="50%" r="3" fill="hsl(var(--soft-steel))" opacity="0.6" />
                      <circle cx="35%" cy="50%" r="4" fill="hsl(var(--primary))" opacity="0.6" />
                      <circle cx="50%" cy="50%" r="5" fill="hsl(var(--primary))" opacity="0.8" />
                      <circle cx="65%" cy="50%" r="3" fill="hsl(var(--accent))" opacity="0.5" />
                    </svg>
                    
                    {/* Pulsing Shield Effect */}
                    <motion.div
                      className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-primary/20"
                      initial={{ scale: 1, opacity: 0 }}
                      animate={{ 
                        scale: [1, 1.8],
                        opacity: [0.3, 0]
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeOut"
                      }}
                    />
                  </div>

                  {/* Front Layer - dApp View (Blurred/Ghosted) */}
                  <div className="absolute inset-0 p-6 opacity-30 blur-[1px]">
                    {/* Chart Area */}
                    <div className="h-32 rounded-lg border border-soft-steel/20 bg-card/20 mb-4 flex items-end gap-1 p-3">
                      {[...Array(12)].map((_, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-soft-steel/30 rounded-sm"
                          style={{ height: `${30 + Math.random() * 60}%` }}
                        />
                      ))}
                    </div>
                    
                    {/* Button/Input Wireframes */}
                    <div className="space-y-3">
                      <div className="h-10 rounded border border-soft-steel/20 bg-card/20" />
                      <div className="flex gap-3">
                        <div className="flex-1 h-10 rounded border border-soft-steel/20 bg-card/20" />
                        <div className="w-24 h-10 rounded border border-soft-steel/20 bg-card/20" />
                      </div>
                      <div className="h-10 rounded border border-soft-steel/20 bg-card/20" />
                    </div>
                  </div>

                  {/* Shield Animation Overlay */}
                  <motion.div
                    className="absolute inset-4 rounded-lg border-2 border-primary/0 pointer-events-none"
                    initial={{ borderColor: "hsl(var(--primary) / 0)" }}
                    animate={{ 
                      borderColor: ["hsl(var(--primary) / 0)", "hsl(var(--primary) / 0.3)", "hsl(var(--primary) / 0)"]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </div>

              {/* Label */}
              <div className="absolute -bottom-8 right-0">
                <span className="font-mono text-[10px] text-soft-steel/50 tracking-widest uppercase">
                  Zxora client visualization · Conceptual
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
