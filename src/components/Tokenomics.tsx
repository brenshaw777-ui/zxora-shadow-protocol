import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Copy, Check } from "lucide-react";
import { useScrambleText } from "@/hooks/useScrambleText";

const Tokenomics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { displayText } = useScrambleText("TOKENOMICS", 1200, isInView);
  const [copied, setCopied] = useState(false);

  const contractAddress = "So11111111111111111111111111111111111111112";

  const tokenStats = [
    { label: "Name", value: "Zxora" },
    { label: "Symbol", value: "$ZXO" },
    { label: "Chain", value: "Solana" },
    { label: "Supply", value: "1,000,000,000" },
    { label: "Mint Authority", value: "Revoked" },
    { label: "Freeze Authority", value: "Revoked" },
    { label: "Liquidity", value: "100% Burned Forever" },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section id="tokenomics" ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-monument font-bold mb-4 text-center tracking-[0.03em] leading-[1.15] metallic-heading">
            {displayText}
          </h2>
          <p className="text-steel text-base sm:text-lg font-body font-normal">
            Transparent, immutable economics powering the Shadow Layer.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Token Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {tokenStats.map((stat, index) => (
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
                      stat.label === "Liquidity" || stat.label === "Supply" 
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

          {/* Right: Contract Box */}
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
                    Contract Address
                  </h3>
                  <p className="text-dim-steel text-sm font-body">
                    Verified on Solana blockchain
                  </p>
                </div>

                {/* Address Box */}
                <div className="p-4 rounded-xl bg-slate/50 border border-emerald/10">
                  <code className="text-emerald text-xs sm:text-sm font-mono break-all">
                    {contractAddress}
                  </code>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopy}
                  className="group w-full px-6 py-3 rounded-xl bg-emerald/10 border border-emerald/30 hover:border-emerald/50 hover:bg-emerald/15 transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,227,140,0.25)] active:scale-[0.98]"
                >
                  <div className="flex items-center justify-center gap-3">
                    {copied ? (
                      <>
                        <Check className="w-5 h-5 text-emerald" />
                        <span className="text-emerald font-machina font-medium text-sm sm:text-base tracking-wide">
                          Copied ✓
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5 text-emerald group-hover:scale-110 transition-transform" />
                        <span className="text-emerald font-machina font-medium text-sm sm:text-base tracking-wide">
                          Click to Copy
                        </span>
                      </>
                    )}
                  </div>
                </button>

                {/* Security Badge */}
                <div className="flex items-center gap-2 pt-4 border-t border-emerald/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-safe animate-pulse" />
                  <span className="text-safe text-xs font-mono uppercase tracking-wider">
                    Verified & Immutable
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
