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
    <section id="tokenomics" ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
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
            Transparent, immutable economics powering the Shadow Layer.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
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

        {/* Token Utility Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          {/* Token Utility Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-monument font-bold mb-3 text-center tracking-[0.03em] leading-[1.15] metallic-heading uppercase">
              Token Utility
            </h2>
            <p className="text-steel text-sm sm:text-base font-body font-normal max-w-3xl mx-auto">
              How the ZXO token connects to real usage inside ZXORA's Shadow Console, today and as the product evolves.
            </p>
          </div>

          {/* Three Utility Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Card 1 - MVP Access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group p-6 sm:p-8 rounded-2xl bg-graphite border border-emerald/15 hover:border-emerald/30 transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,227,140,0.15)] hover:scale-[1.02] cursor-pointer"
            >
              <h3 className="text-lg sm:text-xl font-machina font-semibold text-titanium tracking-[0.02em] uppercase mb-4">
                Day 1 · Access Via ZXO
              </h3>
              <p className="text-steel text-sm sm:text-base font-body leading-relaxed mb-6">
                From MVP launch, holding any non-zero amount of the ZXO token gives you access to the ZXORA Shadow Console and built-in Agent. Connect your wallet, hold ZXO, and step into the analysis layer running inside your browser.
              </p>
              <div className="pt-4 border-t border-emerald/10">
                <span className="text-emerald text-xs font-mono uppercase tracking-wider">
                  ZXO = Access key for the platform
                </span>
              </div>
            </motion.div>

            {/* Card 2 - Power Users */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="group p-6 sm:p-8 rounded-2xl bg-graphite border border-emerald/15 hover:border-emerald/30 transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,227,140,0.15)] hover:scale-[1.02] cursor-pointer"
            >
              <h3 className="text-lg sm:text-xl font-machina font-semibold text-titanium tracking-[0.02em] uppercase mb-4">
                Power Users Scale With ZXO
              </h3>
              <p className="text-steel text-sm sm:text-base font-body leading-relaxed mb-6">
                As ZXORA evolves, heavier features will recognise ZXO holders and stakers. Higher Agent usage limits, advanced analysis templates, and saved workflows will progressively unlock first for accounts with meaningful ZXO exposure.
              </p>
              <div className="pt-4 border-t border-emerald/10">
                <span className="text-emerald text-xs font-mono uppercase tracking-wider">
                  More ZXO → more depth, more capacity
                </span>
              </div>
            </motion.div>

            {/* Card 3 - Long-Term Utility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="group p-6 sm:p-8 rounded-2xl bg-graphite border border-emerald/15 hover:border-emerald/30 transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,227,140,0.15)] hover:scale-[1.02] cursor-pointer md:col-span-2 lg:col-span-1"
            >
              <h3 className="text-lg sm:text-xl font-machina font-semibold text-titanium tracking-[0.02em] uppercase mb-4">
                Long-Term Utility, Not Hype
              </h3>
              <p className="text-steel text-sm sm:text-base font-body leading-relaxed mb-6">
                Workspaces, encrypted sync, tool integrations, and pro data sources are designed to be unlocked via ZXO token tiers—not just subscriptions. The more you rely on ZXORA for research, the more value ZXO has inside the ecosystem.
              </p>
              <div className="pt-4 border-t border-emerald/10">
                <span className="text-emerald text-xs font-mono uppercase tracking-wider">
                  ZXO powers the advanced stack
                </span>
              </div>
            </motion.div>
          </div>

          {/* Token Utility Roadmap Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="p-8 sm:p-10 rounded-2xl bg-graphite border border-emerald/15 relative overflow-hidden"
          >
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-grid" />
            </div>

            {/* Content */}
            <div className="relative">
              {/* Timeline Header */}
              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-machina font-semibold text-titanium tracking-[0.02em] uppercase mb-2">
                  ZXO Token Utility Roadmap
                </h3>
                <p className="text-dim-steel text-xs sm:text-sm font-body">
                  How ZXO gradually powers deeper features as ZXORA expands.
                </p>
              </div>

              {/* Timeline Phases */}
              <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-6">
                {[
                  { title: "Phase 1 – Token Access", desc: "Any ZXO balance = access to the ZXORA console and Shadow Agent in the browser-hosted MVP." },
                  { title: "Phase 2 – Power Usage", desc: "ZXO holder tiers unlock higher daily Agent limits and early access to pro analysis templates." },
                  { title: "Phase 3 – Workflows", desc: "ZXO-gated workflows, advanced template libraries, and rich session exports for serious users." },
                  { title: "Phase 4 – Workspaces", desc: "Extra workspaces, encrypted sync, and premium integrations powered by ZXO holding or staking." },
                  { title: "Phase 5 – Governance", desc: "ZXO used to reward tool builders and signal which features, templates, and integrations we prioritise next." },
                ].map((phase, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-start gap-3 lg:flex-col">
                      <div className="flex-shrink-0 w-3 h-3 rounded-full bg-emerald/50 group-hover:bg-emerald group-hover:shadow-[0_0_12px_rgba(0,227,140,0.8)] transition-all duration-300 mt-1 lg:mt-0" />
                      <div>
                        <h4 className="text-sm sm:text-base font-machina font-medium text-titanium mb-2 group-hover:text-emerald transition-colors">
                          {phase.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-steel font-body leading-relaxed">
                          {phase.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Docs Link */}
              <div className="mt-8 pt-6 border-t border-emerald/10 flex justify-end">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 text-emerald text-xs sm:text-sm font-mono uppercase tracking-wider hover:text-emerald/80 transition-colors"
                >
                  View full ZXO utility in Docs
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tokenomics;
