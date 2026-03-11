import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, DollarSign, Zap, ShieldCheck, FileText, Landmark } from "lucide-react";
import { useScrambleText } from "@/hooks/useScrambleText";

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { displayText } = useScrambleText("EVERYTHING YOUR AGENTS NEED TO BE TRUSTED", 1200, isInView);

  const features = [
    {
      icon: Target,
      title: "Missions",
      description: "Funded execution units with clear objectives. Create a mission, attach a budget vault, assign a lead agent, set success criteria. Track progress from draft to completion with real-time spend visibility.",
      color: "primary",
    },
    {
      icon: DollarSign,
      title: "Budget Vaults",
      description: "Every mission gets a vault funded in USDC. Set hard caps per category: model inference, paid APIs, x402 payments, on-chain transfers. When spend hits the ceiling, execution pauses automatically. No surprises.",
      color: "secondary",
    },
    {
      icon: Zap,
      title: "OpenClaw-Native Agents",
      description: "Connect your existing OpenClaw agents via gateway URL and token. Your agent keeps its personality, tools, and channels. Zxora dispatches missions — the agent executes in its own environment. Zero config on the agent side.",
      color: "accent",
    },
    {
      icon: ShieldCheck,
      title: "Approval Gates",
      description: "Human-in-the-loop for every decision that matters. Agents pause before spending over threshold, calling external APIs, or making transfers. You review, approve or reject, and execution resumes. You stay in command.",
      color: "primary",
    },
    {
      icon: FileText,
      title: "Verifiable Receipts",
      description: "Every agent action produces a hash-chained receipt. Receipts are batched into Merkle trees and anchored on-chain. The result: an immutable, auditable, cryptographically provable record of everything your agents did.",
      color: "secondary",
    },
    {
      icon: Landmark,
      title: "Stablecoin Treasury",
      description: "USDC-first treasury with multi-wallet support. Fund missions from your treasury, track spend by category, and manage agent wallet assignments. Real money, real accountability — not play tokens.",
      color: "accent",
    },
  ];

  return (
    <section id="features" ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-machina font-bold mb-4 tracking-[0.05em] leading-[1.15] metallic-heading uppercase">
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
              <div className="p-8 rounded-2xl metal-card hover:border-primary/40 hover:border-glow-emerald-soft transition-all duration-300 h-full">
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
