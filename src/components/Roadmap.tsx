import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Rocket, Zap, Network, ShieldCheck } from "lucide-react";
import { useScrambleText } from "@/hooks/useScrambleText";

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activePhase, setActivePhase] = useState(0);
  const { displayText } = useScrambleText("ROADMAP", 1200, isInView);

  const phases = [
    {
      icon: Rocket,
      phase: "Phase 1",
      title: "Missions & Budget Vaults",
      tagline: "The financial foundation for autonomous agents.",
      status: "Complete",
      items: [
        "Mission lifecycle (draft → active → completed)",
        "Budget vault funding and enforcement",
        "Per-category spend caps (model, API, x402, chain)",
        "Reserve / commit / release accounting",
        "Real-time spend tracking dashboard",
      ],
    },
    {
      icon: Zap,
      phase: "Phase 2",
      title: "Agents & Gateway Integration",
      tagline: "Connect your OpenClaw agents to the economic layer.",
      status: "Complete",
      items: [
        "OpenClaw-native agent deployment",
        "Gateway registration with health monitoring",
        "Mission dispatch via gateway",
        "Agent wallet binding",
        "Multi-agent per gateway support",
      ],
    },
    {
      icon: ShieldCheck,
      phase: "Phase 3",
      title: "Approvals & Execution Control",
      tagline: "Human-in-the-loop gates for high-risk actions.",
      status: "In Progress",
      items: [
        "Human-in-the-loop approval gates",
        "Spend threshold triggers",
        "Resumable execution after approval",
        "Approval audit history",
        "Telegram/Discord approval notifications",
      ],
    },
    {
      icon: Network,
      phase: "Phase 4",
      title: "Receipts & Verification",
      tagline: "Cryptographic proof of every agent action.",
      status: "Upcoming",
      items: [
        "Hash-chained receipt generation",
        "Merkle tree batching",
        "On-chain anchor service (Base L2)",
        "Receipt proof verification API",
        "Public receipt explorer",
      ],
    },
  ];

  const handlePhaseClick = (index: number) => {
    setActivePhase(index);
  };

  return (
    <section id="roadmap" ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-monument font-bold mb-4 text-center tracking-[0.03em] leading-[1.15] metallic-heading">
            {displayText}
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-steel text-base sm:text-lg max-w-3xl mx-auto font-body mb-2"
          >
            From budget vaults to a full agent economy — the Zxora build plan.
          </motion.p>
        </motion.div>

        {/* Centered Vertical Timeline */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Phase Nodes + Cards - Centered Stack */}
            <div className="space-y-12">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                const isActive = activePhase === index;
                
                return (
                  <motion.div
                    key={phase.phase}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {/* Phase Node */}
                    <motion.button
                      onClick={() => handlePhaseClick(index)}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { 
                        opacity: isActive ? 1 : 0.6,
                        scale: isActive ? 1.1 : 0.95
                      } : {}}
                      whileHover={{ 
                        scale: 1.15,
                        opacity: 1
                      }}
                      transition={{ duration: 0.3 }}
                      className={`relative w-16 h-16 rounded-full border-2 transition-all duration-300 cursor-pointer group ${
                        isActive 
                          ? "border-emerald/60 bg-gradient-to-br from-card to-emerald/10 border-glow-emerald-soft" 
                          : "border-slate bg-card hover:border-emerald/30 hover:shadow-[0_0_20px_rgba(0,227,140,0.1)]"
                      } flex items-center justify-center overflow-hidden`}
                    >
                      {/* Inner ring */}
                      <div className={`absolute inset-2 rounded-full border transition-colors duration-300 ${
                        isActive ? "border-emerald/30" : "border-slate/40"
                      }`} />
                      
                      {/* Icon */}
                      <Icon className={`w-7 h-7 relative z-10 transition-all duration-300 ${
                        isActive 
                          ? "text-emerald scale-110" 
                          : "text-steel/70 group-hover:text-steel"
                      }`} strokeWidth={1.5} />
                      
                      {/* Active pulse */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-emerald/60"
                          animate={{ scale: [1, 1.3], opacity: [0.6, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                    </motion.button>
                    
                    {/* Detail Card - Only show for active phase */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={`card-${index}`}
                          initial={{ opacity: 0, height: 0, y: -10 }}
                          animate={{ opacity: 1, height: "auto", y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -10 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="w-full mt-6 overflow-hidden"
                        >
                          <div className="relative rounded-2xl bg-gradient-to-br from-graphite to-card border border-border shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(0,227,140,0.03)] p-6 overflow-hidden max-w-2xl mx-auto">
                            
                            {/* Subtle noise texture */}
                            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
                            
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4 relative z-10">
                              <div>
                                <div className="text-xs font-mono text-muted-foreground mb-2">
                                  {phase.phase}
                                </div>
                                <h3 className="font-display font-bold text-lg sm:text-xl lg:text-2xl text-foreground tracking-[0.08em] metallic-heading mb-1">
                                  {phase.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-steel/80 font-body italic">
                                  {phase.tagline}
                                </p>
                              </div>
                              
                              {/* Status Pill */}
                              <div className={`px-3 py-1 rounded-full border text-xs font-mono tracking-wider uppercase flex-shrink-0 ml-4 ${
                                phase.status === "Complete"
                                  ? "border-emerald/40 bg-emerald/10 text-emerald"
                                  : phase.status === "In Progress"
                                  ? "border-alert/40 bg-alert/10 text-alert"
                                  : "border-slate/60 bg-slate/20 text-steel/70"
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
                                  <span className="text-emerald mr-3 mt-0.5 text-base">•</span>
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
                  </motion.div>
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
