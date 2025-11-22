import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Zap, Network } from "lucide-react";

const Roadmap = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const phases = [
    {
      icon: Rocket,
      phase: "Phase 1",
      title: "Shadow Client MVP",
      color: "primary",
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
      color: "secondary",
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
      color: "accent",
      items: [
        "Zxora relay network for anonymous routing",
        "API for other tools to use Zxora as a privacy shield",
        "Advanced operator tooling",
      ],
    },
  ];

  return (
    <section id="roadmap" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
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
        <div className="hidden lg:block relative">
          <div className="flex justify-between items-start relative pb-12">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-px bg-gunmetal" />

            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex-1 relative"
              >
                <div className="flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className="w-20 h-20 rounded-full border border-gunmetal bg-card flex items-center justify-center mb-6 relative z-10 group-hover:border-primary/30 transition-all duration-300">
                    <div className="absolute inset-2 rounded-full border border-primary/10" />
                    <div className="absolute inset-0 rounded-full bg-primary/5" />
                    <phase.icon className="w-10 h-10 text-soft-steel z-10" strokeWidth={1} />
                    <div className="absolute w-2 h-2 rounded-full bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
                  </div>

                  {/* Content Card */}
                  <div className="p-6 rounded-lg metal-card w-full max-w-sm hover:border-primary/40 hover:shadow-[0_0_12px_rgba(255,107,60,0.06)] transition-all duration-300">
                    <div className="inline-block px-3 py-1 rounded-full border border-gunmetal text-xs font-mono mb-3 text-soft-steel">
                      {phase.phase}
                    </div>
                    
                    <h3 className="font-display font-semibold text-xl mb-4 text-foreground tracking-wide">
                      {phase.title}
                    </h3>

                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start font-body">
                          <span className="text-primary mr-2 mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="lg:hidden space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gunmetal" />

          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start space-x-6 relative"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full border border-gunmetal bg-card flex items-center justify-center flex-shrink-0 relative z-10">
                <div className="absolute inset-2 rounded-full border border-primary/10" />
                <div className="absolute inset-0 rounded-full bg-primary/5" />
                <phase.icon className="w-8 h-8 text-soft-steel z-10" strokeWidth={1} />
                <div className="absolute w-1.5 h-1.5 rounded-full bg-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" />
              </div>

              {/* Content Card */}
              <div className="flex-1 p-6 rounded-lg metal-card">
                <div className="inline-block px-3 py-1 rounded-full border border-gunmetal text-xs font-mono mb-3 text-soft-steel">
                  {phase.phase}
                </div>
                
                <h3 className="font-display font-semibold text-xl mb-4 text-foreground tracking-wide">
                  {phase.title}
                </h3>

                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start font-body">
                      <span className="text-primary mr-2 mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
