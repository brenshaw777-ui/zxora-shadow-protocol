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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-24">
      {/* Subtle radial glows */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[700px] h-[700px] bg-accent/6 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Hero Text in Glass/Metal HUD Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-8 lg:p-10 rounded-2xl bg-[rgba(5,8,17,0.94)] backdrop-blur-md border shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.04)] relative overflow-hidden"
              style={{
                borderImage: 'linear-gradient(135deg, rgba(60,66,83,0.8), rgba(108,77,255,0.15), rgba(255,122,60,0.1), rgba(60,66,83,0.6)) 1'
              }}
            >
              <div className="space-y-8 relative z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block"
                >
                  <span className="px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/35 text-xs font-mono text-primary tracking-wider shadow-lg">
                    ZK-POWERED SHADOW CLIENT
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.08] tracking-[0.04em] uppercase"
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
                  randomizes your fingerprint, and routes every interaction through a hardened Gate.
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

          {/* Right Column - Shadow Browser Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.1, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative max-w-2xl mx-auto"
            >
              {/* Shadow Browser Window Frame */}
              <div className="rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.7),0_0_1px_rgba(199,204,216,0.3)] relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(28,32,42,0.95), rgba(12,15,24,0.98))',
                }}
              >
                
                {/* Metallic bezel with subtle iris accent at corners */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    border: '1.5px solid transparent',
                    borderImage: 'linear-gradient(135deg, rgba(199,204,216,0.4), rgba(108,77,255,0.15), rgba(199,204,216,0.3)) 1'
                  }}
                />
                
                {/* Corner accent glows */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-accent/10 rounded-tl-2xl blur-xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-accent/10 rounded-br-2xl blur-xl" />

                {/* Top Bar - Browser Chrome */}
                <div className="relative px-6 py-4 border-b border-gunmetal/40 bg-gradient-to-b from-[rgba(20,23,32,0.9)] to-[rgba(12,15,24,0.8)] backdrop-blur-sm">
                  
                  {/* Metallic shine sweep on load */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
                  />
                  
                  <div className="flex items-center justify-between relative z-10">
                    {/* Window Control Dots */}
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gunmetal/70 to-gunmetal/40 border border-gunmetal/30" />
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gunmetal/70 to-gunmetal/40 border border-gunmetal/30" />
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-gunmetal/70 to-gunmetal/40 border border-gunmetal/30" />
                    </div>
                    
                    {/* URL Bar */}
                    <div className="flex-1 mx-6 px-5 py-2 rounded-lg bg-[rgba(5,7,13,0.6)] border border-gunmetal/30 backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <Shield className="w-3.5 h-3.5 text-primary/70" strokeWidth={2} />
                        <span className="font-mono text-xs text-soft-steel/60 tracking-wide">zxora://shadow/session</span>
                      </div>
                    </div>
                    
                    {/* Shield Icon Indicator */}
                    <Shield className="w-4 h-4 text-primary/50" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Inner Window Content Area */}
                <div className="relative h-96 overflow-hidden">
                  
                  {/* Liquid Metal Background Layer */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0A0C14] via-[#141820] to-[#0A0C14]" />
                    
                    {/* Liquid metal swirls */}
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'radial-gradient(circle at 30% 40%, rgba(108,77,255,0.08), transparent 50%), radial-gradient(circle at 70% 60%, rgba(255,122,60,0.06), transparent 50%)',
                      }}
                      animate={{
                        background: [
                          'radial-gradient(circle at 30% 40%, rgba(108,77,255,0.08), transparent 50%), radial-gradient(circle at 70% 60%, rgba(255,122,60,0.06), transparent 50%)',
                          'radial-gradient(circle at 40% 50%, rgba(108,77,255,0.08), transparent 50%), radial-gradient(circle at 60% 50%, rgba(255,122,60,0.06), transparent 50%)',
                          'radial-gradient(circle at 30% 40%, rgba(108,77,255,0.08), transparent 50%), radial-gradient(circle at 70% 60%, rgba(255,122,60,0.06), transparent 50%)',
                        ]
                      }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Distorted grid */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(199,204,216,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(199,204,216,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" 
                      style={{
                        transform: 'perspective(500px) rotateX(2deg)',
                        transformOrigin: 'center center'
                      }}
                    />
                  </div>

                  {/* Vertical Data Veil (Encrypted Code) */}
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={`veil-${i}`}
                        className="absolute top-0 font-mono text-[8px] text-soft-steel/8 leading-4"
                        style={{ left: `${15 + i * 14}%` }}
                        initial={{ y: '-100%' }}
                        animate={{ y: '100%' }}
                        transition={{
                          duration: 35 + Math.random() * 15,
                          repeat: Infinity,
                          delay: Math.random() * 5,
                          ease: "linear"
                        }}
                      >
                        {Array.from({ length: 50 }, (_, idx) => (
                          <div key={idx}>
                            {['zk', 'tx', '0x', '||', '--'][Math.floor(Math.random() * 5)]}
                          </div>
                        ))}
                      </motion.div>
                    ))}
                  </div>

                  {/* Shield Glimmer Effect */}
                  <motion.div
                    className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.15, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 4 }}
                  >
                    <Shield className="w-32 h-32 text-primary/30" strokeWidth={0.5} />
                  </motion.div>

                  {/* Ghosted UI Elements (Front Layer) */}
                  <div className="absolute inset-0 p-8 opacity-25 blur-[0.5px]">
                    {/* Chart outline */}
                    <div className="h-32 rounded-lg border border-soft-steel/15 bg-card/10 mb-6 flex items-end gap-2 p-4">
                      {[...Array(10)].map((_, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-soft-steel/20 rounded-sm"
                          style={{ height: `${40 + Math.random() * 50}%` }}
                        />
                      ))}
                    </div>
                    
                    {/* UI blocks */}
                    <div className="space-y-4">
                      <div className="h-12 rounded-lg border border-soft-steel/15 bg-card/10" />
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-12 rounded-lg border border-soft-steel/15 bg-card/10 col-span-2" />
                        <div className="h-12 rounded-lg border border-soft-steel/15 bg-card/10" />
                      </div>
                      
                      {/* Table grid */}
                      <div className="space-y-2 mt-6">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="grid grid-cols-4 gap-2">
                            {[...Array(4)].map((_, j) => (
                              <div key={j} className="h-6 rounded border border-soft-steel/10 bg-card/5" />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full text-center">
                <span className="font-mono text-[9px] text-soft-steel/40 tracking-widest uppercase">
                  Shadow Browser Window · Zxora Client (Conceptual)
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
