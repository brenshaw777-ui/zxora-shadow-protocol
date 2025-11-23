import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, UserCircle, Shield, Zap, Globe } from "lucide-react";
import { useScrambleText } from "@/hooks/useScrambleText";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { displayText } = useScrambleText("HOW ZXORA SITS BETWEEN YOU AND THE CHAIN", 1200, isInView);

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
            A visual explanation of the shadow layer architecture
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
                  <div className={`
                    w-20 h-20 rounded-full border flex items-center justify-center relative
                    transition-all duration-300
                    ${index === 2 
                      ? "border-primary/40 bg-card" 
                      : "border-gunmetal bg-card group-hover:border-primary/30"
                    }
                  `}>
                    <div className="absolute inset-2 rounded-full border border-primary/10" />
                    {index === 2 && <div className="absolute inset-0 rounded-full bg-accent/5" />}
                    <step.icon className="w-10 h-10 text-soft-steel z-10" strokeWidth={1} />
                    <div className={`absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 ${index === 2 ? "bg-primary" : "bg-gunmetal"}`} />
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

        {/* Mobile/Tablet: Shield Layout */}
        <div className="lg:hidden space-y-6">
          {/* YOU - Top Node */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0 }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full border border-gunmetal bg-card flex items-center justify-center relative">
              <div className="absolute inset-2 rounded-full border border-primary/10" />
              <User className="w-10 h-10 text-soft-steel z-10" strokeWidth={1} />
              <div className="absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-gunmetal" />
            </div>
            <h3 className="font-machina font-semibold text-lg mt-4 text-foreground tracking-[0.02em] uppercase">You</h3>
            <p className="text-sm text-muted-foreground text-center max-w-[280px] font-body font-normal mt-2">
              Your real device, keys, and identity.
            </p>
          </motion.div>

          {/* Connecting Line from YOU to Shield */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-px h-8 bg-primary/30 mx-auto origin-top"
          />

          {/* ZXORA SHADOW LAYER Shield Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-xl border border-primary/20 bg-[#0C1116] p-6 shadow-[0_0_20px_rgba(0,227,140,0.08)]"
          >
            {/* Shield Label */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#050607] px-3 py-1">
              <span className="font-mono text-[10px] text-primary uppercase tracking-wider">Shadow Layer</span>
            </div>

            {/* Shield Icon */}
            <div className="absolute top-3 right-3">
              <Shield className="w-4 h-4 text-primary/40" strokeWidth={1.5} />
            </div>

            <div className="space-y-6">
              {/* MASK Node */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="flex items-start space-x-4"
              >
                <div className="w-14 h-14 rounded-full border border-gunmetal bg-card flex items-center justify-center flex-shrink-0 relative">
                  <div className="absolute inset-2 rounded-full border border-primary/10" />
                  <UserCircle className="w-7 h-7 text-soft-steel z-10" strokeWidth={1} />
                  <div className="absolute w-1.5 h-1.5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-gunmetal" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-machina font-semibold text-sm mb-1 text-foreground tracking-[0.02em] uppercase">Mask</h3>
                  <p className="text-xs text-muted-foreground font-body font-normal">
                    A profile that defines routing, fingerprint, wallet visibility.
                  </p>
                </div>
              </motion.div>

              {/* Internal connecting line */}
              <div className="w-px h-4 bg-gunmetal/50 mx-7" />

              {/* THE GATE Node - Emphasized */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex items-start space-x-4"
              >
                <div className="w-14 h-14 rounded-full border border-primary/40 bg-card flex items-center justify-center flex-shrink-0 relative">
                  <div className="absolute inset-2 rounded-full border border-primary/10" />
                  <div className="absolute inset-0 rounded-full bg-accent/5" />
                  <Shield className="w-7 h-7 text-soft-steel z-10" strokeWidth={1} />
                  <div className="absolute w-1.5 h-1.5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-primary" />
                  {/* Pulse effect on The Gate */}
                  <motion.div
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: [0, 0.3, 0], scale: [1, 1.3, 1.3] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
                    className="absolute inset-0 rounded-full border border-primary"
                  />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-machina font-semibold text-sm mb-1 text-foreground tracking-[0.02em] uppercase">The Gate</h3>
                  <p className="text-xs text-muted-foreground font-body font-normal">
                    ZK firewall that inspects, simulates, and controls dApp access.
                  </p>
                </div>
              </motion.div>

              {/* Internal connecting line */}
              <div className="w-px h-4 bg-gunmetal/50 mx-7" />

              {/* CORRIDOR Node */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex items-start space-x-4"
              >
                <div className="w-14 h-14 rounded-full border border-gunmetal bg-card flex items-center justify-center flex-shrink-0 relative">
                  <div className="absolute inset-2 rounded-full border border-primary/10" />
                  <Zap className="w-7 h-7 text-soft-steel z-10" strokeWidth={1} />
                  <div className="absolute w-1.5 h-1.5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-gunmetal" />
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="font-machina font-semibold text-sm mb-1 text-foreground tracking-[0.02em] uppercase">Corridor</h3>
                  <p className="text-xs text-muted-foreground font-body font-normal">
                    Isolated, disposable session with its own fingerprint and route.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Connecting Line from Shield to DAPPS */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.0 }}
            className="w-px h-8 bg-primary/30 mx-auto origin-top"
          />

          {/* DAPPS & CHAINS - Bottom Node */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full border border-gunmetal bg-card flex items-center justify-center relative">
              <div className="absolute inset-2 rounded-full border border-primary/10" />
              <Globe className="w-10 h-10 text-soft-steel z-10" strokeWidth={1} />
              <div className="absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-gunmetal" />
            </div>
            <h3 className="font-machina font-semibold text-lg mt-4 text-foreground tracking-[0.02em] uppercase">dApps & Chains</h3>
            <p className="text-sm text-muted-foreground text-center max-w-[280px] font-body font-normal mt-2">
              Unlinked actions on-chain.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
