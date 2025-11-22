import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Rocket, Zap, Network } from "lucide-react";

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

        {/* Vertical Inline Timeline */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Vertical Spine Line */}
            <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-gunmetal via-soft-steel/30 to-gunmetal" />
            
            {/* Active Progress Line with Shimmer */}
            <motion.div 
              className="absolute left-8 top-0 w-[2px] bg-gradient-to-b from-primary/40 to-accent/40"
              initial={{ height: "0%" }}
              animate={{ 
                height: activePhase === 0 ? "16.66%" : activePhase === 1 ? "50%" : "83.33%"
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Metallic shimmer traveling down */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-transparent"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Phase Nodes + Inline Cards */}
            <div className="space-y-0">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                const isActive = activePhase === index;
                const isLast = index === phases.length - 1;
                
                return (
                  <div
                    key={phase.phase}
                    className={`relative ${!isLast ? 'pb-12' : ''}`}
                  >
                    {/* Node + Label */}
                    <div className="flex items-start">
                      {/* Node Circle */}
                      <motion.button
                        onClick={() => handlePhaseClick(index)}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { 
                          opacity: isActive ? 1 : 0.6,
                          scale: isActive ? 1 : 0.9
                        } : {}}
                        whileHover={{ 
                          scale: 1.05,
                          opacity: 1
                        }}
                        transition={{ duration: 0.3, delay: index * 0.15 }}
                        className={`relative flex-shrink-0 w-16 h-16 rounded-full border-2 transition-all duration-300 cursor-pointer group ${
                          isActive 
                            ? "border-primary/60 bg-gradient-to-br from-card to-primary/10 shadow-[0_0_30px_rgba(255,122,60,0.25)]" 
                            : "border-gunmetal bg-card hover:border-primary/30 hover:shadow-[0_0_20px_rgba(255,122,60,0.1)]"
                        } flex items-center justify-center overflow-hidden`}
                      >
                        {/* Inner ring */}
                        <div className={`absolute inset-2 rounded-full border transition-colors duration-300 ${
                          isActive ? "border-primary/30" : "border-gunmetal/40"
                        }`} />
                        
                        {/* Ambient glow */}
                        <div className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
                          isActive ? "bg-primary/10 opacity-100" : "bg-primary/5 opacity-0 group-hover:opacity-100"
                        }`} />
                        
                        {/* Icon */}
                        <Icon className={`w-7 h-7 relative z-10 transition-all duration-300 ${
                          isActive 
                            ? "text-primary scale-110" 
                            : "text-soft-steel/70 group-hover:text-soft-steel"
                        }`} strokeWidth={1.5} />
                        
                        {/* Ripple on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-primary/40 opacity-0 group-hover:opacity-100"
                          animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        
                        {/* Active pulse */}
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 rounded-full border-2 border-primary/60"
                            animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                          />
                        )}
                      </motion.button>
                      
                      {/* Phase Label + Card Container */}
                      <div className="flex-1 ml-6">
                        {/* Phase Label */}
                        <motion.button
                          onClick={() => handlePhaseClick(index)}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
                          className={`font-mono text-xs tracking-widest transition-colors duration-300 mb-3 block cursor-pointer ${
                            isActive ? "text-primary" : "text-soft-steel/60 hover:text-soft-steel/80"
                          }`}
                        >
                          {phase.phase}
                        </motion.button>
                        
                        {/* Inline Detail Card - Only show for active phase */}
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              key={`card-${index}`}
                              initial={{ opacity: 0, height: 0, y: -10 }}
                              animate={{ opacity: 1, height: "auto", y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -10 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="overflow-hidden"
                            >
                              <div className="relative rounded-2xl bg-gradient-to-br from-[#0C0F18] to-[#05070D] border border-gunmetal/60 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.03)] p-6 overflow-hidden">
                                
                                {/* Subtle noise texture */}
                                <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
                                
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4 relative z-10">
                                  <div>
                                    <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground tracking-wide metallic-heading">
                                      {phase.title}
                                    </h3>
                                  </div>
                                  
                                  {/* Status Pill */}
                                  <div className={`px-3 py-1 rounded-full border text-xs font-mono tracking-wider flex-shrink-0 ml-4 ${
                                    phase.status === "In Build"
                                      ? "border-accent/40 bg-accent/10 text-accent"
                                      : "border-gunmetal/60 bg-gunmetal/20 text-soft-steel/70"
                                  }`}>
                                    {phase.status}
                                  </div>
                                </div>

                                {/* Content */}
                                <ul className="space-y-2.5 relative z-10">
                                  {phase.items.map((item, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ duration: 0.25, delay: i * 0.05 }}
                                      className="text-sm text-muted-foreground flex items-start font-body"
                                    >
                                      <span className="text-primary mr-3 mt-0.5 text-base">•</span>
                                      <span className="flex-1">{item}</span>
                                    </motion.li>
                                  ))}
                                </ul>

                                {/* Metallic sweep */}
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none"
                                  animate={{ x: ["-100%", "200%"] }}
                                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
