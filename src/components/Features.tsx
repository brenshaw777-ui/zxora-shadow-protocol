import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Fingerprint, ShieldCheck, Flame, BarChart3, Eye, HardDrive } from "lucide-react";
import { useScrambleText } from "@/hooks/useScrambleText";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { displayText } = useScrambleText("BUILT FOR OPERATORS WHO CAN'T AFFORD MISTAKES", 1200, isInView);

  const features = [
    {
      icon: Fingerprint,
      title: "Masks (Stealth Profiles)",
      description: "Separate trading, degen, and research identities. Each Mask controls routing, fingerprint, and wallet visibility.",
      color: "primary",
    },
    {
      icon: ShieldCheck,
      title: "The Gate (ZK Firewall)",
      description: "A hardened checkpoint that simulates transactions, inspects approvals, and shields your real wallet with session identities.",
      color: "secondary",
    },
    {
      icon: Flame,
      title: "Corridors (Disposable Sessions)",
      description: "Every browsing session is a Corridor with its own fingerprint and routing. Shut it down, and it leaves no trace.",
      color: "accent",
    },
    {
      icon: BarChart3,
      title: "Control Deck (Risk & Approvals Console)",
      description: "See every approval across chains, ranked by risk. Revoke, tighten, or freeze with one click.",
      color: "primary",
    },
    {
      icon: Eye,
      title: "Intelligence Overlay",
      description: "Contextual overlays inside dApps: contract verification, rug scores, MEV hints, and anomaly warnings.",
      color: "secondary",
    },
    {
      icon: HardDrive,
      title: "Local-First Privacy",
      description: "Privacy logic and simulation runs on-device where possible. Your behavior isn't a product; it's your advantage.",
      color: "accent",
    },
  ];

  return (
    <section id="features" ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-azonix mb-4 tracking-[0.10em] leading-[1.15] metallic-heading">
            {displayText}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 rounded-2xl metal-card hover:border-primary/40 hover:shadow-[0_0_12px_rgba(255,107,60,0.06)] transition-all duration-300 h-full">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg flex items-center justify-center border border-gunmetal group-hover:border-primary/30 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-soft-steel" strokeWidth={1} />
                  </div>
                </div>
                
                <h3 className="font-display font-semibold text-lg mb-3 tracking-wide text-foreground font-azonix tracking-[0.08em]">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm font-body font-medium">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
