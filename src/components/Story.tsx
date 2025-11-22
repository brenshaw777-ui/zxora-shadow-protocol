import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, Eye, Shield } from "lucide-react";

const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const narrativeCards = [
    {
      icon: Eye,
      title: "Wallet ≠ Identity",
      description: "Your wallet should be a tool, not a permanent tattoo on every interaction.",
    },
    {
      icon: AlertCircle,
      title: "Sessions Should Burn Cleanly",
      description: "Every browsing session leaves traces. They should be disposable and untraceable.",
    },
    {
      icon: Shield,
      title: "Approvals Should Have Memory",
      description: "Token approvals across chains should be visible, manageable, and revocable in one place.",
    },
  ];

  return (
    <section id="story" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-12 text-center tracking-[0.08em] leading-[1.15] metallic-heading">
            WHY ZXORA EXISTS
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Problem Statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-primary">
                The Problem
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Every time you connect a wallet, visit a dApp, or sign a transaction, you're leaking identity markers. 
                Your IP, device fingerprint, wallet history, and interaction patterns create a permanent trail.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-primary">
                The Old Way
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Fragmented tools. VPNs that don't understand crypto. Wallets that expose everything. 
                No unified layer to control your exposure or manage approvals across chains.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-primary">
                Our Approach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We don't believe users should have to expose themselves just to interact with DeFi, NFTs, or dApps. 
                Zxora creates a <span className="text-secondary font-semibold">shadow layer</span> that sits between 
                you and the chain, giving you control, privacy, and safety.
              </p>
            </div>
          </motion.div>

          {/* Right: Narrative Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {narrativeCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="p-6 rounded-2xl metal-card hover:border-primary/40 hover:shadow-[0_0_12px_rgba(255,107,60,0.06)] transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg border border-gunmetal group-hover:border-primary/30 transition-colors">
                    <card.icon className="w-6 h-6 text-soft-steel" strokeWidth={1} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-display font-semibold mb-2 text-foreground">
                      {card.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
