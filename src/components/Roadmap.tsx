import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Rocket, Zap, Network, Shield } from "lucide-react";

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      icon: Rocket,
      phase: "Phase 1",
      title: "Shadow Client MVP",
      status: "In Build",
      items: [
        "Core Zxora client UI",
        "Masks & Corridors (profiles + sessions)",
        "Basic Gate (transaction interception & simulation)",
      ],
    },
    {
      icon: Zap,
      phase: "Phase 2",
      title: "zk Gate & Intelligence Layer",
      status: "Planned",
      items: [
        "zk proofs of wallet ownership without revealing main address",
        "Advanced risk scoring overlay",
        "Cross-chain approvals console",
      ],
    },
    {
      icon: Network,
      phase: "Phase 3",
      title: "Relay Network & Ecosystem",
      status: "Planned",
      items: [
        "Zxora relay network for anonymous routing",
        "API for other tools to use Zxora as a privacy shield",
        "Advanced operator tooling",
      ],
    },
  ];

  const handlePhaseClick = (index: number) => {
    setActivePhase(index);
  };

  return (
    <section id="roadmap" ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 text-center tracking-[0.08em] leading-[1.15] metallic-heading">
            ROADMAP
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building in the shadows, shipping in phases
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline Base Line */}
            <div className="absolute top-12 left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-gunmetal via-soft-steel/30 to-gunmetal" />
            
            {/* Active Progress Line with Shimmer */}
            <motion.div 
              className="absolute top-12 left-[16.66%] h-[2px] bg-gradient-to-r from-primary/40 to-accent/40"
              initial={{ width: "0%" }}
              animate={{ 
                width: activePhase === 0 ? "0%" : activePhase === 1 ? "33.33%" : "66.66%"
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Metallic shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Timeline Nodes */}
            <div className="flex justify-between items-center relative">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                const isActive = activePhase === index;
                
                return (
                  <motion.button
                    key={phase.phase}
                    onClick={() => handlePhaseClick(index)}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { 
                      opacity: isActive ? 1 : 0.6,
                      scale: isActive ? 1 : 0.95
                    } : {}}
                    whileHover={{ 
                      scale: 1.05,
                      opacity: 1
                    }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex-1 flex flex-col items-center relative group cursor-pointer"
                  >
                    {/* Node Circle */}
                    <div className={`w-24 h-24 rounded-full border-2 transition-all duration-300 ${
                      isActive 
                        ? "border-primary/60 bg-gradient-to-br from-card to-primary/10 shadow-[0_0_30px_rgba(255,122,60,0.2)]" 
                        : "border-gunmetal bg-card group-hover:border-primary/30 group-hover:shadow-[0_0_20px_rgba(255,122,60,0.1)]"
                    } flex items-center justify-center relative overflow-hidden`}>
                      
                      {/* Inner metallic ring */}
                      <div className={`absolute inset-3 rounded-full border transition-colors duration-300 ${
                        isActive ? "border-primary/30" : "border-gunmetal/40"
                      }`} />
                      
                      {/* Ambient glow */}
                      <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                        isActive ? "bg-primary/10 opacity-100" : "bg-primary/5 opacity-0 group-hover:opacity-100"
                      }`} />
                      
                      {/* Icon */}
                      <Icon className={`w-10 h-10 relative z-10 transition-all duration-300 ${
                        isActive 
                          ? "text-primary scale-110" 
                          : "text-soft-steel/70 group-hover:text-soft-steel"
                      }`} strokeWidth={1.5} />
                      
                      {/* Ripple effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary/40 opacity-0 group-hover:opacity-100"
                        animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      
                      {/* Active indicator pulse */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-primary/60"
                          animate={{ scale: [1, 1.2], opacity: [0.6, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                      
                      {/* Shield flash on click */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [0, 0.4, 0], scale: [0.5, 1.2, 1] }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 flex items-center justify-center"
                          >
                            <Shield className="w-16 h-16 text-primary/40" strokeWidth={1} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    {/* Phase label */}
                    <span className={`mt-4 font-mono text-xs tracking-widest transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-soft-steel/60 group-hover:text-soft-steel/80"
                    }`}>
                      {phase.phase}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden relative mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Vertical Base Line */}
            <div className="absolute left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gunmetal via-soft-steel/30 to-gunmetal" />
            
            {/* Active Progress Line */}
            <motion.div 
              className="absolute left-12 top-0 w-[2px] bg-gradient-to-b from-primary/40 to-accent/40"
              initial={{ height: "0%" }}
              animate={{ 
                height: activePhase === 0 ? "0%" : activePhase === 1 ? "33.33%" : "66.66%"
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />

            {/* Timeline Nodes */}
            <div className="space-y-24">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                const isActive = activePhase === index;
                
                return (
                  <motion.button
                    key={phase.phase}
                    onClick={() => handlePhaseClick(index)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { 
                      opacity: isActive ? 1 : 0.6,
                      x: 0
                    } : {}}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-6 relative cursor-pointer group"
                  >
                    {/* Node Circle */}
                    <div className={`w-24 h-24 rounded-full border-2 transition-all duration-300 ${
                      isActive 
                        ? "border-primary/60 bg-gradient-to-br from-card to-primary/10 shadow-[0_0_30px_rgba(255,122,60,0.2)]" 
                        : "border-gunmetal bg-card group-hover:border-primary/30"
                    } flex items-center justify-center flex-shrink-0 relative overflow-hidden`}>
                      
                      <div className={`absolute inset-3 rounded-full border transition-colors duration-300 ${
                        isActive ? "border-primary/30" : "border-gunmetal/40"
                      }`} />
                      
                      <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                        isActive ? "bg-primary/10 opacity-100" : "bg-primary/5 opacity-0 group-hover:opacity-100"
                      }`} />
                      
                      <Icon className={`w-10 h-10 relative z-10 transition-all duration-300 ${
                        isActive 
                          ? "text-primary scale-110" 
                          : "text-soft-steel/70 group-hover:text-soft-steel"
                      }`} strokeWidth={1.5} />
                      
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-primary/60"
                          animate={{ scale: [1, 1.2], opacity: [0.6, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                    </div>
                    
                    <span className={`font-mono text-xs tracking-widest transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-soft-steel/60 group-hover:text-soft-steel/80"
                    }`}>
                      {phase.phase}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Dynamic Phase Card - One Card That Swaps Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0C0F18] to-[#05070D] border border-gunmetal/60 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.03)] p-8 overflow-hidden">
              
              {/* Subtle noise texture overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
              
              {/* Header */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div>
                  <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-xs font-mono mb-3 text-primary bg-primary/5 tracking-wider">
                    {phases[activePhase].phase}
                  </div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground tracking-wide metallic-heading">
                    {phases[activePhase].title}
                  </h3>
                </div>
                
                {/* Status Pill */}
                <div className={`px-3 py-1 rounded-full border text-xs font-mono tracking-wider ${
                  phases[activePhase].status === "In Build"
                    ? "border-accent/40 bg-accent/10 text-accent"
                    : "border-gunmetal/60 bg-gunmetal/20 text-soft-steel/70"
                }`}>
                  {phases[activePhase].status}
                </div>
              </div>

              {/* Content */}
              <ul className="space-y-3 relative z-10">
                {phases[activePhase].items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="text-sm sm:text-base text-muted-foreground flex items-start font-body"
                  >
                    <span className="text-primary mr-3 mt-1 text-lg">•</span>
                    <span className="flex-1">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Metallic sweep effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Roadmap;
