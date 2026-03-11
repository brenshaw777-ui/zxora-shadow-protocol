import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Bot, DollarSign, FileCheck, Shield } from "lucide-react";
import { useScrambleText } from "@/hooks/useScrambleText";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { displayText } = useScrambleText("FOUR STEPS TO FULLY ACCOUNTABLE AUTONOMOUS AGENTS", 1200, isInView);

  const steps = [
    {
      icon: Globe,
      label: "Connect Gateway",
      description: "Register your OpenClaw gateway with a URL and bearer token. Zxora pings it to verify. Your agent stays in its own environment.",
    },
    {
      icon: Bot,
      label: "Deploy Agents",
      description: "Give each agent a name and role, point it at your gateway. One gateway can host multiple agents. Real-time connection health.",
    },
    {
      icon: DollarSign,
      label: "Fund Missions",
      description: "Create a mission, fund it from your USDC treasury, set per-category spend caps. The budget vault enforces limits automatically.",
    },
    {
      icon: FileCheck,
      label: "Verify Everything",
      description: "Every action produces a receipt. Hash-chained and Merkle-anchored on-chain. Prove exactly what your agents did, when, and at what cost.",
    },
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
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
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto text-center font-body"
          >
            From gateway connection to verifiable proof of work. In minutes.
          </motion.p>
        </motion.div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden lg:block relative">
          <div className="flex justify-between items-start relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex-1 relative"
              >
                <div className="flex flex-col items-center space-y-4 group cursor-pointer">
                  <div className="relative">
                    <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-emerald/20 border border-emerald/40 flex items-center justify-center z-20">
                      <span className="text-emerald text-[10px] font-mono font-bold">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <div className={`
                      w-20 h-20 rounded-full border flex items-center justify-center relative
                      transition-all duration-300
                      border-gunmetal bg-card group-hover:border-primary/30
                    `}>
                      <div className="absolute inset-2 rounded-full border border-primary/10" />
                      <step.icon className="w-10 h-10 text-soft-steel z-10" strokeWidth={1} />
                      <div className="absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-gunmetal" />
                    </div>
                  </div>
                  <h3 className="font-machina font-semibold text-base sm:text-lg text-foreground tracking-[0.02em] uppercase">{step.label}</h3>
                  <p className="text-sm text-muted-foreground text-center max-w-[200px] font-body font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 + index * 0.15, ease: "easeOut" }}
                    className="absolute top-10 left-[60%] w-[80%] h-px origin-left"
                  >
                    <div className="h-full bg-gunmetal" />
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: 1 } : {}}
                      transition={{ duration: 1.2, delay: 0.7 + index * 0.15, ease: "easeOut" }}
                      className="absolute top-0 left-0 h-full w-full bg-primary/30 origin-left"
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Layout */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-emerald/20 border border-emerald/40 flex items-center justify-center z-20">
                    <span className="text-emerald text-[9px] font-mono font-bold">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="w-14 h-14 rounded-full border border-gunmetal bg-card flex items-center justify-center relative">
                    <div className="absolute inset-2 rounded-full border border-primary/10" />
                    <step.icon className="w-7 h-7 text-soft-steel z-10" strokeWidth={1} />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-machina font-semibold text-sm mb-1 text-foreground tracking-[0.02em] uppercase">{step.label}</h3>
                  <p className="text-xs text-muted-foreground font-body font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="w-px h-6 bg-primary/20 ml-7 mt-2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
