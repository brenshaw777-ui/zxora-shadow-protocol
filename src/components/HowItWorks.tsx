import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, UserCircle, Shield, Zap, Globe } from "lucide-react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const steps = [
    {
      icon: User,
      label: "You",
      description: "Your real device, keys, and identity.",
    },
    {
      icon: UserCircle,
      label: "Mask",
      description: "A profile that defines routing, fingerprint, wallet visibility.",
    },
    {
      icon: Shield,
      label: "The Gate",
      description: "ZK firewall that inspects, simulates, and controls dApp access.",
    },
    {
      icon: Zap,
      label: "Corridor",
      description: "Isolated, disposable session with its own fingerprint and route.",
    },
    {
      icon: Globe,
      label: "dApps & Chains",
      description: "Unlinked actions on-chain.",
    },
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            How Zxora Sits Between{" "}
            <span className="text-secondary">You and the Chain</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A visual explanation of the shadow layer architecture
          </p>
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
                  <div className={`
                    w-24 h-24 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${index === 2 
                      ? "bg-gradient-to-br from-primary to-accent border-glow-magenta" 
                      : "bg-card border border-border group-hover:border-primary/50"
                    }
                  `}>
                    <step.icon className={`w-12 h-12 ${index === 2 ? "text-white" : "text-primary"}`} />
                  </div>
                  <h3 className="font-display font-semibold text-xl">{step.label}</h3>
                  <p className="text-sm text-muted-foreground text-center max-w-[200px]">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Arrow */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                    className="absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-secondary origin-left"
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-secondary border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start space-x-4 relative"
            >
              <div className={`
                w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0
                ${index === 2 
                  ? "bg-gradient-to-br from-primary to-accent border-glow-magenta" 
                  : "bg-card border border-border"
                }
              `}>
                <step.icon className={`w-8 h-8 ${index === 2 ? "text-white" : "text-primary"}`} />
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-display font-semibold text-lg mb-2">{step.label}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-primary to-secondary" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
