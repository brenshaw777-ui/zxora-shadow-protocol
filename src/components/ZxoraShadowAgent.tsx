import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Brain, Radar, Shield, Link2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PageChip {
  id: string;
  name: string;
  domain: string;
  tag: string;
  response: string;
  color: string;
}

const pageChips: PageChip[] = [
  {
    id: "jupiter",
    name: "Jupiter",
    domain: "jup.ag",
    tag: "Swap & Routing",
    response: "This is a DEX aggregator on Solana. Shadow Agent is watching for slippage spikes, MEV-heavy routes and unsafe tokens before you approve anything.",
    color: "emerald"
  },
  {
    id: "dexscreener",
    name: "Dexscreener",
    domain: "dexscreener.com",
    tag: "Token Intel",
    response: "Live pair analytics. Agent can pull holder distribution, LP status and basic scam checks for any chart you open here.",
    color: "cyan"
  },
  {
    id: "magiceden",
    name: "Magic Eden",
    domain: "magiceden.io",
    tag: "NFT Marketplace",
    response: "NFT trading surface. Shadow Agent highlights flagged collections, wash-trade patterns and abnormal floor moves.",
    color: "emerald"
  }
];

const AgentDemoPanel = () => {
  const [selectedPage, setSelectedPage] = useState<PageChip>(pageChips[0]);
  const [isScanning, setIsScanning] = useState(false);
  const [activeMode, setActiveMode] = useState<"STEALTH" | "TRADER" | "PARANOID">("STEALTH");

  const handlePageSelect = (page: PageChip) => {
    if (selectedPage.id === page.id) return;
    setIsScanning(true);
    setTimeout(() => {
      setSelectedPage(page);
      setIsScanning(false);
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative w-full h-full bg-[hsl(var(--graphite-code))] rounded-2xl border border-primary/15 shadow-[0_0_40px_rgba(0,227,140,0.08)] overflow-hidden"
    >
      {/* Scan Animation Overlay */}
      <AnimatePresence>
        {isScanning && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0,227,140,0.2) 50%, transparent 100%)"
            }}
          />
        )}
      </AnimatePresence>

      {/* Top Bar */}
      <div className="flex items-center justify-between p-4 border-b border-border/10 bg-[hsl(var(--shadow-black))]/60">
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4 text-primary" />
          <span className="text-xs font-mono text-steel uppercase tracking-wider">Shadow Agent</span>
        </div>
        <div className="flex gap-1">
          {(["STEALTH", "TRADER", "PARANOID"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className={`px-2 py-1 text-[10px] font-mono rounded transition-all duration-200 ${
                activeMode === mode
                  ? "bg-primary/20 text-primary border border-primary/40"
                  : "bg-transparent text-dim-steel border border-transparent hover:text-steel"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Page Chips */}
      <div className="p-4 space-y-2">
        <div className="text-[10px] font-mono text-dim-steel uppercase tracking-wider mb-3">Active Surface</div>
        <div className="flex flex-wrap gap-2">
          {pageChips.map((chip) => (
            <button
              key={chip.id}
              onClick={() => handlePageSelect(chip)}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all duration-200 ${
                selectedPage.id === chip.id
                  ? "bg-primary/10 text-primary border-primary/60 shadow-[0_0_12px_rgba(0,227,140,0.25)] scale-105"
                  : "bg-slate/30 text-steel border-border/20 hover:border-primary/40 hover:text-titanium"
              }`}
            >
              {chip.name}
            </button>
          ))}
        </div>
      </div>

      {/* Page Meta & Response */}
      <div className="p-4 space-y-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPage.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {/* Page Meta */}
            <div className="p-3 bg-slate/40 rounded-lg border border-border/10">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-sm font-semibold text-titanium">{selectedPage.name}</div>
                  <div className="text-xs text-dim-steel font-mono">{selectedPage.domain}</div>
                </div>
                <span className="px-2 py-1 text-[10px] font-mono bg-primary/20 text-primary rounded border border-primary/40">
                  {selectedPage.tag}
                </span>
              </div>
            </div>

            {/* Agent Response */}
            <div className="p-4 bg-[hsl(var(--shadow-black))]/80 rounded-lg border border-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-[10px] font-mono text-primary uppercase tracking-wider">Agent Intel</span>
              </div>
              <p className="text-sm text-steel leading-relaxed">{selectedPage.response}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Prompt Examples */}
      <div className="px-4 pb-4">
        <div className="text-[10px] font-mono text-dim-steel border-t border-border/10 pt-3">
          <span className="text-steel">Ask:</span> "Is this safe to trade?" • "Explain this pool." • "Show biggest holders."
        </div>
      </div>
    </motion.div>
  );
};

const ZxoraShadowAgent = () => {
  const scrollToDemo = () => {
    const element = document.getElementById("agent-demo");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const features = [
    {
      icon: Radar,
      title: "Live Page Context",
      description: "Agent reads the DOM, detects what kind of dApp or page you're on, and answers questions based on that exact view."
    },
    {
      icon: Link2,
      title: "On-Chain Awareness",
      description: "Behind the UI, it can look up token contracts, pool data and basic risk signals before you click approve."
    },
    {
      icon: Shield,
      title: "Private by Design",
      description: "No seed phrases. No custody. Just read-only intel layered on top of your existing wallet flow."
    }
  ];

  return (
    <section id="agent" className="relative py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Row - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          {/* Left Column - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full w-fit">
              <Brain className="w-3 h-3 text-primary" />
              <span className="text-xs font-mono text-primary uppercase tracking-wider">
                AI Context Assistant • Live Page Awareness
              </span>
            </div>

            {/* Title */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-titanium leading-tight">
              Zxora Shadow Agent
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-steel leading-relaxed">
              An AI operator wired into your browser, decoding every dApp in real time.
            </p>

            {/* Bullet Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mt-0.5">
                  <Brain className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-titanium mb-1">Protocol Intel</h4>
                  <p className="text-sm text-steel">Summarises pages, pools, and contracts in plain language.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mt-0.5">
                  <Radar className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-titanium mb-1">Risk Lens</h4>
                  <p className="text-sm text-steel">Flags suspicious patterns, approvals, and rug signals.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mt-0.5">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-titanium mb-1">Action-Aware</h4>
                  <p className="text-sm text-steel">Answers questions based on the exact screen you're on.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                onClick={scrollToDemo}
                className="bg-primary hover:bg-primary/90 text-shadow-black font-semibold shadow-[0_0_20px_rgba(0,227,140,0.3)] hover:shadow-[0_0_30px_rgba(0,227,140,0.5)] transition-all duration-300"
              >
                See Agent in Action
              </Button>
              <Button
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary/10 hover:border-primary"
                asChild
              >
                <a href="#">View Agent Docs</a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Interactive Console */}
          <div id="agent-demo" className="flex items-center">
            <AgentDemoPanel />
          </div>
        </div>

        {/* Feature Grid - 3 Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-titanium mb-8 text-center">
            What Agent Actually Does
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group relative p-6 bg-[hsl(var(--graphite-code))] rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,227,140,0.12)] transition-all duration-300"
                >
                  {/* Animated accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-titanium">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-steel leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ZxoraShadowAgent;
