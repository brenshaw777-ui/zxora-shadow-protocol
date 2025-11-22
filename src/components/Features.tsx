import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Fingerprint, ShieldCheck, Flame, BarChart3, Eye, HardDrive } from "lucide-react";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Built for Operators{" "}
            <span className="text-primary">Who Can't Afford Mistakes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full">
                <div className="mb-6">
                  <div className={`
                    w-16 h-16 rounded-lg flex items-center justify-center
                    bg-${feature.color}/10 group-hover:bg-${feature.color}/20
                    transition-all duration-300
                  `}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}`} />
                  </div>
                </div>
                
                <h3 className="font-display font-semibold text-xl mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
