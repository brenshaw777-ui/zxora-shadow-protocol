import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useScrambleText } from "@/hooks/useScrambleText";

const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { displayText } = useScrambleText("WHY ZXORA EXISTS", 1200, isInView);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      label: "The Problem",
      title: "THE PROBLEM",
      badge: "Step 1 · Exposure",
      content: (
        <p className="text-steel leading-relaxed font-body font-normal text-base sm:text-lg">
          Every time you connect a wallet, visit a dApp, or sign a transaction, you're{" "}
          <span className="text-emerald font-medium">leaking identity markers</span>. 
          Your IP, device fingerprint, wallet history, and interaction patterns create a permanent trail.
        </p>
      ),
    },
    {
      id: 1,
      label: "The Old Way",
      title: "THE OLD WAY",
      badge: "Step 2 · Fragmentation",
      content: (
        <p className="text-steel leading-relaxed font-body font-normal text-base sm:text-lg">
          Fragmented tools. VPNs that don't understand crypto. Wallets that expose everything. 
          <span className="text-emerald font-medium"> No unified layer</span> to control your exposure or manage approvals across chains.
        </p>
      ),
    },
    {
      id: 2,
      label: "Our Approach",
      title: "OUR APPROACH",
      badge: "Step 3 · Shadow Layer",
      content: (
        <p className="text-steel leading-relaxed font-body font-normal text-base sm:text-lg">
          We don't believe users should have to expose themselves just to interact with DeFi, NFTs, or dApps. 
          Zxora creates a <span className="text-emerald font-medium">shadow layer</span> that sits between 
          you and the chain, giving you <span className="text-titanium font-medium">control, privacy, and safety</span>.
        </p>
      ),
    },
  ];

  const principles = [
    {
      title: "Wallet ≠ Identity",
      description: "Your wallet should be a tool, not a permanent tattoo on every interaction.",
    },
    {
      title: "Sessions Burn Cleanly",
      description: "Every browsing session leaves traces. They should be disposable and untraceable.",
    },
    {
      title: "Approvals Have Memory",
      description: "Token approvals across chains should be visible, manageable, and revocable in one place.",
    },
  ];

  return (
    <section id="story" ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title + Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-monument font-bold mb-4 text-center tracking-[0.02em] sm:tracking-[0.03em] leading-[1.15] metallic-heading max-w-full">
            {displayText}
          </h2>
          <p className="text-steel text-base sm:text-lg font-body font-normal">
            A single shadow layer between you and the chain.
          </p>
        </motion.div>

        {/* Step Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-8 sm:mb-10 lg:mb-12 overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-emerald/20"
        >
          <div className="inline-flex gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-slate/50 border border-emerald/10 min-w-min">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`
                  px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl font-machina font-medium text-[10px] sm:text-xs md:text-sm tracking-[0.04em] sm:tracking-[0.05em] uppercase transition-all duration-300 whitespace-nowrap
                  ${activeStep === index 
                    ? 'bg-graphite text-emerald border border-emerald/30 shadow-[0_0_12px_rgba(0,227,140,0.25)]' 
                    : 'text-dim-steel hover:text-steel hover:border-b hover:border-dim-steel/30'
                  }
                `}
              >
                {step.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Console Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Narrative Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                <div className="inline-block px-3 py-1 rounded-full bg-emerald/10 border border-emerald/20">
                  <span className="text-emerald text-xs font-mono font-normal tracking-wider">
                    Step {activeStep + 1}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-machina font-semibold text-titanium tracking-[0.02em] max-w-full">
                  {steps[activeStep].title}
                </h3>
                {steps[activeStep].content}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right: Visual Console */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-2xl bg-graphite border border-emerald/15 p-4 sm:p-5 md:p-6 shadow-[0_0_24px_rgba(0,227,140,0.1)] max-w-full overflow-hidden">
              {/* Console Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-emerald/10">
                <span className="text-dim-steel text-xs font-mono font-normal tracking-wider uppercase">
                  Context Console
                </span>
                <div className="px-2 py-1 rounded bg-slate/50 border border-emerald/10">
                  <span className="text-emerald text-xs font-mono font-normal">
                    {steps[activeStep].badge}
                  </span>
                </div>
              </div>

              {/* Console Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="min-h-[320px]"
                >
                  {activeStep === 0 && <ExposureMeter />}
                  {activeStep === 1 && <FragmentedToolsMap />}
                  {activeStep === 2 && <ShadowLayerReveal principles={principles} />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Step 1: Exposure Meter
const ExposureMeter = () => (
  <div className="flex gap-8 items-center">
    {/* Left: Meter */}
    <div className="flex flex-col items-center gap-3">
      <span className="text-steel text-xs font-mono font-normal tracking-wider uppercase">Exposure</span>
      <div className="relative w-12 h-64 bg-slate/30 rounded-full overflow-hidden border border-emerald/10">
        <motion.div
          initial={{ height: "20%" }}
          animate={{ height: "95%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute bottom-0 w-full bg-gradient-to-t from-dim-steel via-emerald to-emerald rounded-full"
        />
      </div>
      <span className="text-emerald text-sm font-mono font-normal">95%</span>
    </div>

    {/* Right: Warning List */}
    <div className="flex-1 space-y-2">
      {[
        { label: "ip_address", status: "visible" },
        { label: "device_fingerprint", status: "logged" },
        { label: "wallet_history", status: "profiled" },
        { label: "interaction_trail", status: "permanent" },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="font-mono text-sm"
        >
          <span className="text-steel">{item.label}</span>
          <span className="text-dim-steel"> → </span>
          <span className="text-alert">{item.status}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

// Step 2: Fragmented Tools Map
const FragmentedToolsMap = () => (
  <div className="space-y-6">
    {/* Node Map */}
    <div className="flex items-center justify-between relative py-8">
      {["VPN", "Browser", "Wallet", "dApp"].map((node, index) => (
        <motion.div
          key={node}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-16 h-16 rounded-full bg-slate/50 border border-dim-steel/30 flex items-center justify-center">
            <span className="text-dim-steel text-xs font-machina font-medium uppercase">{node}</span>
          </div>
        </motion.div>
      ))}
      {/* Broken Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
        <motion.line
          x1="20%" y1="50%" x2="40%" y2="50%"
          stroke="rgba(122, 132, 149, 0.3)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.line
          x1="60%" y1="50%" x2="80%" y2="50%"
          stroke="rgba(122, 132, 149, 0.3)"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </svg>
    </div>

    {/* Log */}
    <div className="space-y-2 p-4 rounded-xl bg-slate/30 border border-dim-steel/10">
      {[
        { label: "vpn_scope", value: "network_only" },
        { label: "wallet_exposure", value: "full" },
        { label: "approvals_view", value: "scattered" },
        { label: "control_layer", value: "none" },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="font-mono text-sm"
        >
          <span className="text-steel">{item.label}</span>
          <span className="text-dim-steel"> → </span>
          <span className="text-dim-steel">{item.value}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

// Step 3: Shadow Layer Reveal
const ShadowLayerReveal = ({ principles }: { principles: Array<{ title: string; description: string }> }) => (
  <div className="space-y-6">
    {/* Node Diagram */}
    <div className="flex items-center justify-center gap-4 relative py-8">
      {/* You */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-16 h-16 rounded-full bg-slate/50 border border-dim-steel/30 flex items-center justify-center"
      >
        <span className="text-steel text-xs font-machina font-medium">You</span>
      </motion.div>

      {/* Zxora Shadow Layer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald/20 to-emerald/5 border border-emerald/40 flex items-center justify-center shadow-[0_0_24px_rgba(0,227,140,0.3)]"
      >
        <span className="text-emerald text-xs font-machina font-semibold text-center leading-tight">
          Zxora<br />Shadow
        </span>
        <motion.div
          className="absolute inset-0 rounded-2xl border border-emerald/60"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* dApps */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="w-16 h-16 rounded-full bg-slate/50 border border-dim-steel/30 flex items-center justify-center"
      >
        <span className="text-steel text-xs font-machina font-medium text-center leading-tight">dApps</span>
      </motion.div>

      {/* Rails */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
        <motion.line
          x1="20%" y1="50%" x2="42%" y2="50%"
          stroke="rgba(0, 227, 140, 0.5)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.line
          x1="58%" y1="50%" x2="80%" y2="50%"
          stroke="rgba(0, 227, 140, 0.5)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
      </svg>
    </div>

    {/* Principles */}
    <div className="flex flex-wrap gap-2 justify-center">
      {principles.map((principle, index) => (
        <motion.div
          key={principle.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
          className="group relative px-3 py-1.5 rounded-full bg-emerald/10 border border-emerald/20 hover:border-emerald/40 transition-all cursor-pointer"
          title={principle.description}
        >
          <span className="text-emerald text-xs font-machina font-medium">{principle.title}</span>
        </motion.div>
      ))}
    </div>

    {/* Log */}
    <div className="space-y-2 p-4 rounded-xl bg-slate/30 border border-emerald/10">
      {[
        { label: "identity_link", value: "severed" },
        { label: "sessions", value: "disposable" },
        { label: "approvals", value: "centralized_view" },
        { label: "status", value: "shadow_layer_online ✓" },
      ].map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
          className="font-mono text-sm"
        >
          <span className="text-steel">{item.label}</span>
          <span className="text-dim-steel"> → </span>
          <span className={item.label === "status" ? "text-safe" : "text-emerald"}>{item.value}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Story;
