import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, CheckCircle, AlertTriangle } from "lucide-react";
import { useScrambleText } from "@/hooks/useScrambleText";
type SimulationMode = "mask" | "gate" | "corridor";
const AnimationsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3
  });
  const [activeMode, setActiveMode] = useState<SimulationMode>("mask");
  const [corridorBurned, setCorridorBurned] = useState(false);
  const [gateInspecting, setGateInspecting] = useState(false);
  const {
    displayText
  } = useScrambleText("SEE ZXORA IN MOTION", 1200, isInView);
  const handleGateInspect = () => {
    setGateInspecting(true);
    setTimeout(() => setGateInspecting(false), 3000);
  };
  const handleCorridorBurn = () => {
    setCorridorBurned(true);
    setTimeout(() => setCorridorBurned(false), 4000);
  };
  return <section id="animations" ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.5
      }} className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-monument font-bold mb-4 tracking-[0.03em] leading-[1.15] metallic-heading">
            {displayText}
          </h2>
          <motion.p initial={{
          opacity: 0,
          y: 10
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="text-steel text-base sm:text-lg max-w-2xl mx-auto font-body">
            Visual simulations of the shadow client at work
          </motion.p>
        </motion.div>

        {/* Mode Selector Tabs */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-[rgba(5,8,17,0.8)] backdrop-blur-sm border border-[rgba(60,66,83,0.3)]">
            {[{
            id: "mask" as const,
            label: "Mask Shift"
          }, {
            id: "gate" as const,
            label: "Gate Inspect"
          }, {
            id: "corridor" as const,
            label: "Corridor Burn"
          }].map(mode => <button key={mode.id} onClick={() => {
            setActiveMode(mode.id);
            if (mode.id === "corridor") setCorridorBurned(false);
            if (mode.id === "gate") setGateInspecting(false);
          }} className={`
                  relative px-6 py-3 rounded-full font-display text-sm tracking-wide transition-all duration-300
                  ${activeMode === mode.id ? "text-titanium" : "text-steel hover:text-titanium"}
                `}>
                {activeMode === mode.id && <motion.div layoutId="activeTab" className="absolute inset-0 rounded-full border border-primary/40 bg-[rgba(108,77,255,0.08)]" style={{
              boxShadow: '0 0 12px rgba(108,77,255,0.2)'
            }} transition={{
              type: "spring",
              duration: 0.5,
              bounce: 0.2
            }} />}
                <span className="relative z-10">{mode.label}</span>
              </button>)}
          </div>
        </motion.div>

        {/* Simulation Panel */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden" style={{
          background: 'linear-gradient(135deg, rgba(5,8,17,0.95), rgba(10,16,24,0.95))',
          border: '1.5px solid rgba(60,66,83,0.3)',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5), 0 20px 60px rgba(0,0,0,0.4)'
        }}>
            {/* Panel Content - Changes based on active mode */}
            <div className="relative min-h-[480px] p-8 sm:p-12">
              <AnimatePresence mode="wait">
                {activeMode === "mask" && <MaskShiftSimulation key="mask" />}
                {activeMode === "gate" && <GateInspectSimulation key="gate" isInspecting={gateInspecting} onInspect={handleGateInspect} />}
                {activeMode === "corridor" && <CorridorBurnSimulation key="corridor" isBurned={corridorBurned} onBurn={handleCorridorBurn} />}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};

// Mask Shift Simulation Component
const MaskShiftSimulation = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 10
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: -10
  }} transition={{
    duration: 0.3
  }} className="flex flex-col items-center justify-center h-full space-y-8">
      {/* Horizontal Node Layout */}
      <div className="flex items-center justify-center w-full gap-8 sm:gap-16 py-8">
        {/* YOU Node */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-16 h-16 rounded-full border border-[rgba(199,204,216,0.3)] bg-[rgba(5,8,17,0.6)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-safe/80" />
          </div>
          <span className="font-mono text-xs text-steel tracking-widest">YOU</span>
        </div>

        {/* Connection Rail 1 */}
        <div className="relative flex-1 max-w-[120px]">
          <div className="h-px bg-steel/20" />
          <motion.div animate={{
          x: ['-100%', '100%']
        }} transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }} className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-transparent via-emerald/60 to-transparent" />
        </div>

        {/* MASK Node - Rotating */}
        <div className="flex flex-col items-center gap-3">
          <motion.div className="relative w-20 h-20 rounded-full border-2 border-primary/40 bg-[rgba(5,8,17,0.8)] flex items-center justify-center" style={{
          boxShadow: '0 0 20px rgba(108,77,255,0.15)'
        }}>
            <motion.div animate={{
            rotate: 360
          }} transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }} className="absolute inset-2 rounded-full border border-dashed border-emerald/30" />
            <motion.div animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 1, 0.6]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="w-3 h-3 rounded-full bg-emerald" />
          </motion.div>
          <span className="font-mono text-xs text-emerald tracking-widest">MASK</span>
        </div>

        {/* Connection Rail 2 */}
        <div className="relative flex-1 max-w-[120px]">
          <div className="h-px bg-steel/20" />
          <motion.div animate={{
          x: ['-100%', '100%']
        }} transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: 1.5
        }} className="absolute top-0 left-0 w-8 h-px bg-gradient-to-r from-transparent via-safe/60 to-transparent" />
        </div>

        {/* dApp Node */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative w-16 h-16 rounded-full border border-[rgba(199,204,216,0.3)] bg-[rgba(5,8,17,0.6)] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-steel/60" />
          </div>
          <span className="font-mono text-xs text-steel tracking-widest">dApp</span>
        </div>
      </div>

      {/* Status Console */}
      <div className="w-full max-w-2xl p-6 rounded-xl bg-graphite/60 border border-slate/25">
        <div className="font-mono text-xs space-y-2 text-steel/80">
          <div className="flex justify-between">
            <span>fingerprint_base:</span>
            <span className="text-titanium">stable</span>
          </div>
          <div className="flex justify-between">
            <span>mask_profile:</span>
            <motion.span className="text-emerald" animate={{
            opacity: [0.7, 1, 0.7]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }}>
              rotating_series_07
            </motion.span>
          </div>
          <div className="flex justify-between">
            <span>dapp_view:</span>
            <span className="text-titanium">mask_only</span>
          </div>
          <div className="flex justify-between">
            <span>trace_link:</span>
            <span className="text-safe">broken</span>
          </div>
        </div>
      </div>
    </motion.div>;
};

// Gate Inspect Simulation Component
const GateInspectSimulation = ({
  isInspecting,
  onInspect
}: {
  isInspecting: boolean;
  onInspect: () => void;
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 10
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: -10
  }} transition={{
    duration: 0.3
  }} className="flex flex-col lg:flex-row gap-8 h-full">
      {/* Left: Request Summary */}
      <div className="flex-1">
        <div className="p-6 rounded-xl bg-graphite/70 border border-slate/25 h-full">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs text-titanium tracking-widest uppercase">Incoming Transaction</span>
            <Shield className="w-4 h-4 text-emerald/60" strokeWidth={1.5} />
          </div>
          <div className="font-mono text-sm space-y-3 text-steel">
            <div className="flex justify-between">
              <span className="text-steel/60">protocol:</span>
              <span>dex.example</span>
            </div>
            <div className="flex justify-between">
              <span className="text-steel/60">action:</span>
              <span>swap</span>
            </div>
            <div className="flex justify-between">
              <span className="text-steel/60">amount:</span>
              <span className="text-safe">1867 SOL      </span>
            </div>
            <div className="flex justify-between">
              <span className="text-steel/60">asset:</span>
              <span>TOKEN_X</span>
            </div>
            <div className="flex justify-between">
              <span className="text-steel/60">chain:</span>
              <span>mainnet</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Gate Console */}
      <div className="flex-1">
        <div className="p-6 rounded-xl bg-graphite/70 border border-slate/25 h-full flex flex-col">
          <span className="font-mono text-xs text-titanium tracking-widest uppercase mb-6">Gate Console</span>
          
          {/* Check Rows */}
          <div className="space-y-4 flex-1">
            {[{
            label: "contract_verification",
            delay: 0
          }, {
            label: "risk_assessment",
            delay: 0.4
          }, {
            label: "approval_check",
            delay: 0.8
          }, {
            label: "simulation_result",
            delay: 1.2
          }].map(check => <div key={check.label} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-steel/80">{check.label}</span>
                  {isInspecting ? <motion.div initial={{
                scale: 0
              }} animate={{
                scale: 1,
                rotate: 360
              }} transition={{
                delay: check.delay + 1.6,
                duration: 0.3
              }}>
                      <CheckCircle className="w-4 h-4 text-emerald" strokeWidth={1.5} />
                    </motion.div> : <CheckCircle className="w-4 h-4 text-emerald/30" strokeWidth={1.5} />}
                </div>
                <div className="h-1 bg-slate/30 rounded-full overflow-hidden">
                  <motion.div initial={{
                width: "0%"
              }} animate={{
                width: isInspecting ? "100%" : "0%"
              }} transition={{
                duration: 1.2,
                delay: check.delay,
                ease: "easeOut"
              }} className="h-full rounded-full bg-gradient-to-r from-emerald/60 to-safe/60" />
                </div>
              </div>)}
          </div>

          {/* Status Log */}
          <div className="mt-6 p-4 rounded-lg bg-graphite/80 border border-slate/20">
            <div className="font-mono text-xs space-y-1 text-steel/70">
              <AnimatePresence mode="wait">
                {!isInspecting ? <motion.div key="ready" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }}>
                    <div>gate.status = <span className="text-titanium">ready</span></div>
                  </motion.div> : <motion.div key="inspecting" initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} exit={{
                opacity: 0
              }} className="space-y-1">
                    <motion.div initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.2
                }}>
                      gate.load_abi() → <span className="text-emerald">ok</span>
                    </motion.div>
                    <motion.div initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 0.8
                }}>
                      gate.simulate(tx) → <span className="text-emerald">pass</span>
                    </motion.div>
                    <motion.div initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 1.4
                }}>
                      risk.score = <span className="text-safe">0.12 (low)</span>
                    </motion.div>
                    <motion.div initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} transition={{
                  delay: 2.0
                }} className="text-emerald font-semibold">
                      status: SAFE TO PROCEED
                    </motion.div>
                  </motion.div>}
              </AnimatePresence>
            </div>
          </div>

          {/* Inspect Button */}
          <button onClick={onInspect} disabled={isInspecting} className="mt-6 w-full py-3 rounded-lg border border-emerald/40 bg-emerald/5 
                     hover:bg-emerald/10 hover:border-emerald/60 transition-all duration-300
                     disabled:opacity-50 disabled:cursor-not-allowed font-display text-sm tracking-widest text-emerald">
            {isInspecting ? "INSPECTING..." : "RUN GATE INSPECT"}
          </button>
        </div>
      </div>
    </motion.div>;
};

// Corridor Burn Simulation Component
const CorridorBurnSimulation = ({
  isBurned,
  onBurn
}: {
  isBurned: boolean;
  onBurn: () => void;
}) => {
  return <motion.div initial={{
    opacity: 0,
    y: 10
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: -10
  }} transition={{
    duration: 0.3
  }} className="flex items-center justify-center h-full">
      <div className="w-full max-w-2xl">
        <motion.div className="p-8 rounded-xl border relative overflow-hidden" style={{
        background: isBurned ? 'linear-gradient(135deg, rgba(5,8,17,0.5), rgba(10,16,24,0.5))' : 'linear-gradient(135deg, rgba(5,8,17,0.8), rgba(10,16,24,0.8))',
        borderColor: isBurned ? 'rgba(60,66,83,0.15)' : 'rgba(60,66,83,0.3)'
      }} animate={{
        borderColor: isBurned ? 'rgba(60,66,83,0.15)' : 'rgba(60,66,83,0.3)'
      }} transition={{
        duration: 0.5
      }}>
          {/* Animated data stream background */}
          {!isBurned && <div className="absolute inset-0 opacity-20 pointer-events-none">
              <motion.div animate={{
            y: ['0%', '100%']
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }} className="font-mono text-[8px] leading-4 text-emerald/40">
                {Array.from({
              length: 30
            }, (_, i) => <div key={i}>{Math.random() > 0.5 ? '1' : '0'}</div>)}
              </motion.div>
            </div>}

          {/* Corridor Info */}
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl tracking-wide text-[#E3E8F4]">
                Corridor #37
              </h3>
              <motion.span className={`font-mono text-xs px-3 py-1 rounded-full border ${isBurned ? 'border-slate/20 text-steel/40 bg-graphite/30' : 'border-emerald/40 text-emerald bg-emerald/10'}`} animate={{
              opacity: isBurned ? 0.5 : 1
            }}>
                {isBurned ? 'burned' : 'active'}
              </motion.span>
            </div>

            <div className="font-mono text-sm space-y-3 mb-8">
              <motion.div className="flex justify-between" animate={{
              opacity: isBurned ? 0.3 : 1
            }}>
                <span className="text-[#A5AFC3]/60">mask:</span>
                <span className="text-[#C7CCD8]">trading_profile</span>
              </motion.div>
              <motion.div className="flex justify-between" animate={{
              opacity: isBurned ? 0.3 : 1
            }}>
                <span className="text-[#A5AFC3]/60">route:</span>
                <span className="text-[#C7CCD8]">zxora_relay_net</span>
              </motion.div>
              <motion.div className="flex justify-between" animate={{
              opacity: isBurned ? 0.3 : 1
            }}>
                <span className="text-[#A5AFC3]/60">fingerprint_variant:</span>
                <span className="text-primary">v5</span>
              </motion.div>
              <motion.div className="flex justify-between" animate={{
              opacity: isBurned ? 0.3 : 1
            }}>
                <span className="text-[#A5AFC3]/60">duration:</span>
                <span className="text-[#C7CCD8]">00:12:21</span>
              </motion.div>
              <motion.div className="flex justify-between" animate={{
              opacity: isBurned ? 0.3 : 1
            }}>
                <span className="text-[#A5AFC3]/60">open_approvals:</span>
                <span className="text-[#C7CCD8]">0</span>
              </motion.div>
            </div>

            {/* Status Log */}
            <div className="mb-6 p-4 rounded-lg bg-graphite/60 border border-slate/20">
              <div className="font-mono text-xs space-y-1 text-steel/70">
                <AnimatePresence mode="wait">
                  {!isBurned ? <motion.div key="ready" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0
                }}>
                      corridor_status: <span className="text-titanium">active</span>
                    </motion.div> : <motion.div key="burning" initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0
                }} className="space-y-1">
                      <motion.div initial={{
                    opacity: 0
                  }} animate={{
                    opacity: 1
                  }} transition={{
                    delay: 0.7
                  }}>
                        session_logs: <span className="text-titanium">wiped</span>
                      </motion.div>
                      <motion.div initial={{
                    opacity: 0
                  }} animate={{
                    opacity: 1
                  }} transition={{
                    delay: 1.3
                  }}>
                        corridor_state: <span className="text-safe">burned</span>
                      </motion.div>
                      <motion.div initial={{
                    opacity: 0
                  }} animate={{
                    opacity: 1
                  }} transition={{
                    delay: 1.8
                  }} className="text-safe font-semibold">
                        status: CLEAN EXIT
                      </motion.div>
                    </motion.div>}
                </AnimatePresence>
              </div>
            </div>

            {/* Burn Button */}
            <motion.button onClick={onBurn} disabled={isBurned} className="w-full py-4 rounded-lg border font-display text-sm tracking-widest transition-all duration-300 relative overflow-hidden" style={{
            borderColor: isBurned ? 'rgba(21,26,32,0.2)' : 'rgba(0,227,140,0.4)',
            backgroundColor: isBurned ? 'rgba(5,8,17,0.3)' : 'rgba(0,227,140,0.05)',
            color: isBurned ? 'rgba(167,176,195,0.4)' : 'hsl(var(--zx-emerald))'
          }} whileHover={!isBurned ? {
            borderColor: 'rgba(0,227,140,0.6)',
            boxShadow: '0 0 20px rgba(0,227,140,0.2)'
          } : {}}>
              {isBurned ? "BURNED" : "BURN CORRIDOR"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>;
};
export default AnimationsShowcase;