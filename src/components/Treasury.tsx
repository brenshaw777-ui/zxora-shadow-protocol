import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, DollarSign, GitBranch, Shield, Layers, Receipt, Landmark } from "lucide-react";
import { useScrambleText } from "@/hooks/useScrambleText";

const Treasury = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { displayText } = useScrambleText("TREASURY", 1200, isInView);
  const [activeFlow, setActiveFlow] = useState(0);

  const flowSteps = [
    { label: "Reserve", icon: Landmark, desc: "USDC locked into mission vault from tenant treasury" },
    { label: "Commit", icon: DollarSign, desc: "Agent commits spend by category as work executes" },
    { label: "Release", icon: GitBranch, desc: "Unused budget released back to treasury on completion" },
  ];

  const spendCategories = [
    { name: "Model Inference", percent: 42, amount: "$1,050" },
    { name: "Paid APIs", percent: 24, amount: "$600" },
    { name: "x402 Payments", percent: 18, amount: "$450" },
    { name: "On-chain Transfers", percent: 10, amount: "$250" },
    { name: "Payouts", percent: 6, amount: "$150" },
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/5 border border-emerald/20 mb-5">
            <Landmark className="w-4 h-4 text-emerald" strokeWidth={1.5} />
            <span className="text-emerald text-xs font-mono tracking-wider uppercase">Stablecoin-First Economics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-monument font-bold mb-4 text-center tracking-[0.03em] leading-[1.15] metallic-heading">
            {displayText}
          </h2>
          <p className="text-steel text-base sm:text-lg font-body font-normal max-w-2xl mx-auto">
            Real money. Real accountability. Every dollar tracked, every action receipted, every proof anchored on-chain.
          </p>
        </motion.div>

        {/* Budget Flow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden p-6 sm:p-8 lg:p-10"
            style={{
              background: 'linear-gradient(135deg, rgba(5,8,17,0.95), rgba(12,17,22,0.95))',
              border: '1.5px solid rgba(0,227,140,0.15)',
              boxShadow: '0 0 40px rgba(0,227,140,0.08), inset 0 1px 0 rgba(0,227,140,0.05)'
            }}
          >
            {/* Budget Cycle Title */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="font-machina font-semibold text-lg sm:text-xl text-titanium tracking-[0.04em] uppercase">
                  Budget Cycle
                </h3>
                <p className="text-dim-steel text-xs sm:text-sm font-mono mt-1">Reserve → Commit → Release</p>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/10 border border-emerald/25">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
                <span className="text-emerald text-xs font-mono tracking-wider">USDC · BASE L2</span>
              </div>
            </div>

            {/* Flow Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {flowSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeFlow === index;
                return (
                  <motion.button
                    key={step.label}
                    onClick={() => setActiveFlow(index)}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className={`relative p-5 sm:p-6 rounded-xl text-left transition-all duration-300 group ${
                      isActive
                        ? 'bg-emerald/10 border-2 border-emerald/40 shadow-[0_0_24px_rgba(0,227,140,0.2)]'
                        : 'bg-slate/30 border border-slate/30 hover:border-emerald/20 hover:bg-slate/40'
                    }`}
                  >
                    {/* Step Number */}
                    <div className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                      isActive ? 'bg-emerald/20 text-emerald' : 'bg-slate/50 text-dim-steel'
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <Icon className={`w-8 h-8 mb-3 transition-colors duration-300 ${
                      isActive ? 'text-emerald' : 'text-steel/50 group-hover:text-steel'
                    }`} strokeWidth={1.5} />
                    
                    <h4 className={`font-machina font-semibold text-base sm:text-lg tracking-[0.04em] uppercase mb-2 transition-colors ${
                      isActive ? 'text-emerald' : 'text-titanium'
                    }`}>
                      {step.label}
                    </h4>
                    <p className="text-dim-steel text-xs sm:text-sm font-body leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.div
                        layoutId="flowIndicator"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-emerald rounded-full"
                        transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Connecting arrows (desktop) */}
            <div className="hidden sm:flex justify-between items-center px-[17%] -mt-[72px] mb-[48px] pointer-events-none">
              {[0, 1].map(i => (
                <motion.div
                  key={i}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.2 }}
                  className="flex-1 mx-4"
                >
                  <div className="h-px bg-gradient-to-r from-emerald/40 to-emerald/10 relative">
                    <motion.div
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                      className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-transparent via-emerald/60 to-transparent"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Two Column: Spend Breakdown + Explainer */}
        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Left: Spend Category Breakdown (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl p-6 sm:p-8"
              style={{
                background: 'linear-gradient(135deg, rgba(5,8,17,0.9), rgba(12,17,22,0.9))',
                border: '1px solid rgba(60,66,83,0.25)',
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-machina font-semibold text-base sm:text-lg text-titanium tracking-[0.04em] uppercase">
                  Spend by Category
                </h3>
                <span className="text-dim-steel text-xs font-mono">sample mission · $2,500</span>
              </div>

              <div className="space-y-4">
                {spendCategories.map((cat, index) => (
                  <motion.div
                    key={cat.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-steel text-xs sm:text-sm font-body">{cat.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-dim-steel text-xs font-mono">{cat.percent}%</span>
                        <span className="text-titanium text-sm font-mono font-medium">{cat.amount}</span>
                      </div>
                    </div>
                    <div className="h-2 rounded-full bg-slate/40 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${cat.percent}%` } : {}}
                        transition={{ duration: 0.8, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, hsl(159, 100%, ${33 + index * 4}%), hsl(159, 100%, ${45 + index * 3}%))`,
                          boxShadow: '0 0 8px rgba(0,227,140,0.3)'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Total */}
              <div className="mt-6 pt-4 border-t border-slate/20 flex items-center justify-between">
                <span className="text-steel text-sm font-machina font-medium uppercase tracking-wider">Total Committed</span>
                <span className="text-emerald text-lg font-mono font-bold">$2,500.00</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Key Facts + CTA (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Key fact cards */}
            {[
              { icon: Shield, title: "Per-Tenant Vaults", desc: "Each workspace gets isolated treasury. No cross-contamination." },
              { icon: Receipt, title: "Merkle-Anchored", desc: "Receipt batches anchored on Base L2. Cryptographically provable." },
              { icon: Layers, title: "Fully Verifiable", desc: "Every dollar in, every dollar out. Complete audit trail." },
            ].map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="group p-4 sm:p-5 rounded-xl border border-slate/20 hover:border-emerald/25 transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,227,140,0.1)]"
                  style={{ background: 'rgba(12,17,22,0.6)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald/10 border border-emerald/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald/15 group-hover:border-emerald/35 transition-all">
                      <Icon className="w-5 h-5 text-emerald" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-machina font-semibold text-sm text-titanium tracking-[0.03em] uppercase mb-1">
                        {fact.title}
                      </h4>
                      <p className="text-dim-steel text-xs sm:text-sm font-body leading-relaxed">
                        {fact.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA */}
            <motion.a
              href="https://app.zxora.tech"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="group flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-emerald/10 border border-emerald/30 hover:border-emerald/50 hover:bg-emerald/15 transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,227,140,0.25)] active:scale-[0.98]"
            >
              <span className="text-emerald font-machina font-medium text-sm sm:text-base tracking-wide">
                View Treasury Dashboard
              </span>
              <ArrowRight className="w-4 h-4 text-emerald group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Treasury;
