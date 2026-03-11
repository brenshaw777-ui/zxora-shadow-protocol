import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { useScrambleText } from "@/hooks/useScrambleText";
import zxoraIcon from "@/assets/zxora-icon.png";

type SimulationMode = "mission" | "agent" | "vault";

const AnimationsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });
  const [activeMode, setActiveMode] = useState<SimulationMode>("mission");
  const [vaultPaused, setVaultPaused] = useState(false);
  const [agentDispatching, setAgentDispatching] = useState(false);
  const {
    displayText
  } = useScrambleText("WATCH MISSIONS FUND, AGENTS DISPATCH, AND RECEIPTS ANCHOR IN REAL TIME", 1200, isInView);

  const handleAgentDispatch = () => {
    setAgentDispatching(true);
    setTimeout(() => setAgentDispatching(false), 3000);
  };

  const handleVaultPause = () => {
    setVaultPaused(true);
    setTimeout(() => setVaultPaused(false), 4000);
  };

  return (
    <section id="animations" ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-monument font-bold mb-4 tracking-[0.03em] leading-[1.15] metallic-heading">
            {displayText}
          </h2>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="text-steel text-base sm:text-lg max-w-2xl mx-auto font-body">
            A simulation of how Zxora manages autonomous agent economics.
          </motion.p>
        </motion.div>

        {/* Mode Selector Tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-[rgba(5,8,17,0.8)] backdrop-blur-sm border border-[rgba(60,66,83,0.3)]">
            {[
              { id: "mission" as const, label: "Mission Breakdown" },
              { id: "agent" as const, label: "Agent Dispatch" },
              { id: "vault" as const, label: "Budget Vault" },
            ].map(mode => (
              <button
                key={mode.id}
                onClick={() => {
                  setActiveMode(mode.id);
                  if (mode.id === "vault") setVaultPaused(false);
                  if (mode.id === "agent") setAgentDispatching(false);
                }}
                className={`
                  relative px-6 py-3 rounded-full font-display text-sm tracking-wide transition-all duration-300
                  ${activeMode === mode.id ? "text-titanium" : "text-steel hover:text-titanium"}
                `}
              >
                {activeMode === mode.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full border border-primary/40 bg-[rgba(108,77,255,0.08)]"
                    style={{ boxShadow: '0 0 12px rgba(108,77,255,0.2)' }}
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{mode.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Simulation Panel */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden" style={{
            background: 'linear-gradient(135deg, rgba(5,8,17,0.95), rgba(10,16,24,0.95))',
            border: '1.5px solid rgba(60,66,83,0.3)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.4)'
          }}>
            <div className="relative min-h-[480px] p-8 sm:p-12">
              <AnimatePresence mode="wait">
                {activeMode === "mission" && <MissionBreakdownSimulation key="mission" />}
                {activeMode === "agent" && <AgentDispatchSimulation key="agent" isDispatching={agentDispatching} onDispatch={handleAgentDispatch} />}
                {activeMode === "vault" && <BudgetVaultSimulation key="vault" isPaused={vaultPaused} onPause={handleVaultPause} />}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Mission Breakdown Simulation
const MissionBreakdownSimulation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center h-full space-y-8"
    >
      {/* Horizontal Node Layout */}
      <div className="flex items-center justify-center w-full gap-8 sm:gap-16 py-8">
        {/* Operator Node */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-16 h-16 rounded-full border border-[rgba(199,204,216,0.3)] bg-[rgba(5,8,17,0.6)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-safe/80" />
          </div>
          <span className="font-mono text-xs text-steel tracking-widest">OPERATOR</span>
        </div>

        {/* Connection Rail 1 */}
        <div className="relative flex-1 max-w-[120px]">
          <div className="h-px bg-steel/20" />
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-transparent via-emerald/60 to-transparent"
          />
        </div>

        {/* Mission Node */}
        <div className="flex flex-col items-center gap-3">
          <motion.div
            className="relative w-20 h-20 rounded-full border-2 border-primary/40 bg-[rgba(5,8,17,0.8)] flex items-center justify-center"
            style={{ boxShadow: '0 0 20px rgba(108,77,255,0.15)' }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-2 rounded-full border border-dashed border-emerald/30"
            />
            <motion.img
              src={zxoraIcon}
              alt="Zxora Mission"
              className="w-8 h-8"
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <span className="font-mono text-xs text-emerald tracking-widest">MISSION</span>
        </div>

        {/* Connection Rail 2 */}
        <div className="relative flex-1 max-w-[120px]">
          <div className="h-px bg-steel/20" />
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
            className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-transparent via-safe/60 to-transparent"
          />
        </div>

        {/* Agent Node */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-16 h-16 rounded-full border border-[rgba(199,204,216,0.3)] bg-[rgba(5,8,17,0.6)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-steel/60" />
          </div>
          <span className="font-mono text-xs text-steel tracking-widest">AGENT</span>
        </div>
      </div>

      {/* Status Console */}
      <div className="w-full max-w-2xl p-6 rounded-xl bg-graphite/60 border border-slate/25">
        <div className="font-mono text-xs space-y-2 text-steel/80">
          <div className="flex justify-between">
            <span>mission_name:</span>
            <span className="text-titanium">Q1 Market Research</span>
          </div>
          <div className="flex justify-between">
            <span>budget_vault:</span>
            <motion.span className="text-emerald" animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 2, repeat: Infinity }}>
              $2,500 USDC funded
            </motion.span>
          </div>
          <div className="flex justify-between">
            <span>lead_agent:</span>
            <span className="text-titanium">kai</span>
          </div>
          <div className="flex justify-between">
            <span>receipt_chain:</span>
            <span className="text-safe">recording</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Agent Dispatch Simulation
const AgentDispatchSimulation = ({
  isDispatching,
  onDispatch
}: {
  isDispatching: boolean;
  onDispatch: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col lg:flex-row gap-8 h-full"
    >
      {/* Left: Agent Cards */}
      <div className="flex-1">
        <div className="p-6 rounded-xl bg-graphite/70 border border-slate/25 h-full">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs text-titanium tracking-widest uppercase">Agent Fleet</span>
            <Shield className="w-4 h-4 text-emerald/60" strokeWidth={1.5} />
          </div>
          <div className="space-y-4">
            {[
              { name: "Kai", task: "Competitive analysis", status: "Running" },
              { name: "Scout", task: "Market sizing report", status: "Queued" },
              { name: "Analyst", task: "Trend identification", status: "Ready" },
            ].map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 rounded-lg bg-slate/20 border border-slate/15"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-mono text-sm text-titanium">{agent.name}</span>
                  <span className={`font-mono text-xs px-2 py-0.5 rounded-full border ${
                    agent.status === "Running"
                      ? "border-emerald/40 text-emerald bg-emerald/10"
                      : agent.status === "Queued"
                      ? "border-alert/40 text-alert bg-alert/10"
                      : "border-slate/40 text-steel bg-slate/20"
                  }`}>
                    {agent.status}
                  </span>
                </div>
                <span className="font-mono text-xs text-steel/60">{agent.task}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Dispatch Console */}
      <div className="flex-1">
        <div className="p-6 rounded-xl bg-graphite/70 border border-slate/25 h-full flex flex-col">
          <span className="font-mono text-xs text-titanium tracking-widest uppercase mb-6">Dispatch Console</span>
          
          {/* Check Rows */}
          <div className="space-y-4 flex-1">
            {[
              { label: "gateway_connection", delay: 0 },
              { label: "agent_health", delay: 0.4 },
              { label: "budget_verification", delay: 0.8 },
              { label: "mission_assignment", delay: 1.2 },
            ].map(check => (
              <div key={check.label} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-steel/80">{check.label}</span>
                  {isDispatching ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ delay: check.delay + 1.6, duration: 0.3 }}
                    >
                      <CheckCircle className="w-4 h-4 text-emerald" strokeWidth={1.5} />
                    </motion.div>
                  ) : (
                    <CheckCircle className="w-4 h-4 text-emerald/30" strokeWidth={1.5} />
                  )}
                </div>
                <div className="h-1 bg-slate/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: isDispatching ? "100%" : "0%" }}
                    transition={{ duration: 1.2, delay: check.delay, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald/60 to-safe/60"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Status Log */}
          <div className="mt-6 p-4 rounded-lg bg-graphite/80 border border-slate/20">
            <div className="font-mono text-xs space-y-1 text-steel/70">
              <AnimatePresence mode="wait">
                {!isDispatching ? (
                  <motion.div key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div>dispatch.status = <span className="text-titanium">ready</span></div>
                  </motion.div>
                ) : (
                  <motion.div key="dispatching" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-1">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                      gateway.ping() → <span className="text-emerald">ok</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                      agent.deploy("kai") → <span className="text-emerald">online</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
                      mission.assign() → <span className="text-safe">dispatched</span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }} className="text-emerald font-semibold">
                      status: AGENTS DISPATCHED ✓
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Dispatch Button */}
          <button
            onClick={onDispatch}
            disabled={isDispatching}
            className="mt-6 w-full py-3 rounded-lg border border-emerald/40 bg-emerald/5 
                       hover:bg-emerald/10 hover:border-emerald/60 transition-all duration-300
                       disabled:opacity-50 disabled:cursor-not-allowed font-display text-sm tracking-widest text-emerald"
          >
            {isDispatching ? "DISPATCHING..." : "DISPATCH AGENTS"}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Budget Vault Simulation
const BudgetVaultSimulation = ({
  isPaused,
  onPause
}: {
  isPaused: boolean;
  onPause: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-center h-full"
    >
      <div className="w-full max-w-2xl">
        <motion.div
          className="p-8 rounded-xl border relative overflow-hidden"
          style={{
            background: isPaused
              ? 'linear-gradient(135deg, rgba(5,8,17,0.5), rgba(10,16,24,0.5))'
              : 'linear-gradient(135deg, rgba(5,8,17,0.8), rgba(10,16,24,0.8))',
            borderColor: isPaused ? 'rgba(60,66,83,0.15)' : 'rgba(60,66,83,0.3)'
          }}
          animate={{
            borderColor: isPaused ? 'rgba(60,66,83,0.15)' : 'rgba(60,66,83,0.3)'
          }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated data stream background */}
          {!isPaused && (
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <motion.div
                animate={{ y: ['0%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="font-mono text-[8px] leading-4 text-emerald/40"
              >
                {Array.from({ length: 30 }, (_, i) => (
                  <div key={i}>{Math.random() > 0.5 ? '1' : '0'}</div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Vault Info */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl tracking-wide text-[#E3E8F4]">
                Budget Vault #12
              </h3>
              <motion.span
                className={`font-mono text-xs px-3 py-1 rounded-full border ${
                  isPaused
                    ? 'border-alert/40 text-alert bg-alert/10'
                    : 'border-emerald/40 text-emerald bg-emerald/10'
                }`}
                animate={{ opacity: isPaused ? 0.8 : 1 }}
              >
                {isPaused ? 'paused, ceiling hit' : 'active'}
              </motion.span>
            </div>

            <div className="font-mono text-sm space-y-3 mb-8">
              <motion.div className="flex justify-between" animate={{ opacity: isPaused ? 0.5 : 1 }}>
                <span className="text-[#A5AFC3]/60">mission:</span>
                <span className="text-[#C7CCD8]">Q1 Market Research</span>
              </motion.div>
              <motion.div className="flex justify-between" animate={{ opacity: isPaused ? 0.5 : 1 }}>
                <span className="text-[#A5AFC3]/60">vault_funded:</span>
                <span className="text-[#C7CCD8]">$2,500 USDC</span>
              </motion.div>
              <motion.div className="flex justify-between" animate={{ opacity: isPaused ? 0.5 : 1 }}>
                <span className="text-[#A5AFC3]/60">committed_spend:</span>
                <span className="text-primary">$2,487.60</span>
              </motion.div>
              <motion.div className="flex justify-between" animate={{ opacity: isPaused ? 0.5 : 1 }}>
                <span className="text-[#A5AFC3]/60">remaining:</span>
                <span className="text-[#C7CCD8]">$12.40</span>
              </motion.div>
              <motion.div className="flex justify-between" animate={{ opacity: isPaused ? 0.5 : 1 }}>
                <span className="text-[#A5AFC3]/60">categories:</span>
                <span className="text-[#C7CCD8]">model · API · x402</span>
              </motion.div>
            </div>

            {/* Status Log */}
            <div className="mb-6 p-4 rounded-lg bg-graphite/60 border border-slate/20">
              <div className="font-mono text-xs space-y-1 text-steel/70">
                <AnimatePresence mode="wait">
                  {!isPaused ? (
                    <motion.div key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      vault_status: <span className="text-titanium">active, tracking spend</span>
                    </motion.div>
                  ) : (
                    <motion.div key="paused" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-1">
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                        vault_ceiling: <span className="text-alert">reached</span>
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
                        agent_execution: <span className="text-titanium">paused</span>
                      </motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="text-safe font-semibold">
                        status: AUTO-PAUSE, BUDGET ENFORCED ✓
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Pause Button */}
            <motion.button
              onClick={onPause}
              disabled={isPaused}
              className="w-full py-4 rounded-lg border font-display text-sm tracking-widest transition-all duration-300 relative overflow-hidden"
              style={{
                borderColor: isPaused ? 'rgba(21,26,32,0.2)' : 'rgba(0,227,140,0.4)',
                backgroundColor: isPaused ? 'rgba(5,8,17,0.3)' : 'rgba(0,227,140,0.05)',
                color: isPaused ? 'rgba(167,176,195,0.4)' : 'hsl(var(--zx-emerald))'
              }}
              whileHover={!isPaused ? {
                borderColor: 'rgba(0,227,140,0.6)',
                boxShadow: '0 0 20px rgba(0,227,140,0.2)'
              } : {}}
            >
              {isPaused ? "BUDGET ENFORCED" : "SIMULATE VAULT CEILING"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimationsShowcase;
