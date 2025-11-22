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
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 tracking-wide">
            <span className="text-primary">ROADMAP</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building in the shadows, shipping in phases
          </p>
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative">
          <div className="flex justify-between items-start relative pb-12">
            {/* Timeline Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />

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
                  <div className={`
                    w-32 h-32 rounded-full flex items-center justify-center mb-6
                    bg-gradient-to-br ${
                      phase.color === "primary" ? "from-primary to-primary/50" :
                      phase.color === "secondary" ? "from-secondary to-secondary/50" :
                      "from-accent to-accent/50"
                    }
                    border-glow-magenta relative z-10
                  `}>
                    <phase.icon className="w-16 h-16 text-white" />
                  </div>

                  {/* Content Card */}
                  <div className="p-6 rounded-lg bg-card border border-border w-full max-w-sm">
                    <div className={`
                      inline-block px-3 py-1 rounded-full text-xs font-mono mb-3
                      ${
                        phase.color === "primary" ? "bg-primary/20 text-primary" :
                        phase.color === "secondary" ? "bg-secondary/20 text-secondary" :
                        "bg-accent/20 text-accent"
                      }
                    `}>
                      {phase.phase}
                    </div>
                    
                    <h3 className="font-display font-semibold text-xl mb-4">
                      {phase.title}
                    </h3>

                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2">•</span>
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
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start space-x-6 relative"
            >
              {/* Icon Circle */}
              <div className={`
                w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0
                bg-gradient-to-br ${
                  phase.color === "primary" ? "from-primary to-primary/50" :
                  phase.color === "secondary" ? "from-secondary to-secondary/50" :
                  "from-accent to-accent/50"
                }
                border-glow-magenta relative z-10
              `}>
                <phase.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content Card */}
              <div className="flex-1 p-6 rounded-lg bg-card border border-border">
                <div className={`
                  inline-block px-3 py-1 rounded-full text-xs font-mono mb-3
                  ${
                    phase.color === "primary" ? "bg-primary/20 text-primary" :
                    phase.color === "secondary" ? "bg-secondary/20 text-secondary" :
                    "bg-accent/20 text-accent"
                  }
                `}>
                  {phase.phase}
                </div>
                
                <h3 className="font-display font-semibold text-xl mb-4">
                  {phase.title}
                </h3>

                <ul className="space-y-2">
                  {phase.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
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
