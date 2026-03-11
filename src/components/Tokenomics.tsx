import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useScrambleText } from "@/hooks/useScrambleText";

const Tokenomics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { displayText } = useScrambleText("TREASURY", 1200, isInView);

  const treasuryStats = [
    { label: "Currency", value: "USDC" },
    { label: "Network", value: "Base (Ethereum L2)" },
    { label: "Treasury Model", value: "Per-tenant vaults" },
    { label: "Budget Cycle", value: "Reserve / Commit / Release" },
    { label: "Spend Categories", value: "Model · API · x402 · Chain · Payout" },
    { label: "Receipt Anchoring", value: "Merkle roots on-chain" },
    { label: "Audit Status", value: "Fully verifiable" },
  ];

  return (
    <section id="treasury" ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-monument font-bold mb-4 text-center tracking-[0.03em] leading-[1.15] metallic-heading">
            {displayText}
          </h2>
          <p className="text-steel text-base sm:text-lg font-body font-normal">
            Real money. Real accountability. Stablecoin-first economics powering agent operations.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left: Treasury Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {treasuryStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="group p-4 rounded-xl bg-graphite border border-emerald/12 hover:border-emerald/25 transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,227,140,0.15)] hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  {/* Accent Dot */}
                  <div className="w-2 h-2 rounded-full bg-emerald/50 group-hover:bg-emerald group-hover:shadow-[0_0_8px_rgba(0,227,140,0.6)] transition-all duration-300" />
                  
                  {/* Content */}
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-dim-steel text-xs sm:text-sm font-machina font-medium uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <span className={`text-base sm:text-lg font-mono font-normal ${
                      stat.label === "Audit Status" || stat.label === "Currency" 
                        ? "text-emerald" 
                        : "text-titanium"
                    }`}>
                      {stat.value}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: How Agent Economics Work */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-graphite border border-emerald/20 shadow-[0_0_32px_rgba(0,227,140,0.12)] relative overflow-hidden">
              {/* Animated Grid Background */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-grid" />
              </div>

              {/* Signal Blink */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 rounded-full bg-emerald"
                animate={{ 
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Content */}
              <div className="relative space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-machina font-semibold text-titanium tracking-[0.02em] uppercase mb-2">
                    How Agent Economics Work
                  </h3>
                  <p className="text-steel text-sm sm:text-base font-body leading-relaxed">
                    Every mission gets a budget vault funded in USDC. Agents commit spend by category. Receipts prove every action. Merkle roots anchor the proof on Base L2.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate/50 border border-emerald/10">
                  <p className="text-emerald text-sm font-mono leading-relaxed">
                    No utility tokens. No speculation. Just accountable agent economics.
                  </p>
                </div>

                {/* CTA Link */}
                <a
                  href="https://app.zxora.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full px-6 py-3 rounded-xl bg-emerald/10 border border-emerald/30 hover:border-emerald/50 hover:bg-emerald/15 transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,227,140,0.25)] active:scale-[0.98] flex items-center justify-center gap-3"
                >
                  <span className="text-emerald font-machina font-medium text-sm sm:text-base tracking-wide">
                    View Treasury Dashboard
                  </span>
                  <ArrowRight className="w-4 h-4 text-emerald group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Security Badge */}
                <div className="flex items-center gap-2 pt-4 border-t border-emerald/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-safe animate-pulse" />
                  <span className="text-safe text-xs font-mono uppercase tracking-wider">
                    Stablecoin-first · Verifiable receipts · On-chain anchored
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
