import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const AnimationsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [gateStatus, setGateStatus] = useState<"safe" | "caution" | "blocked">("safe");

  const simulateGate = () => {
    setGateStatus("caution");
    setTimeout(() => {
      const outcomes: ("safe" | "blocked")[] = ["safe", "blocked"];
      setGateStatus(outcomes[Math.floor(Math.random() * outcomes.length)]);
    }, 2000);
  };

  return (
    <section id="animations" ref={ref} className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 tracking-[0.08em] leading-[1.15] metallic-heading">
            SEE ZXORA IN MOTION
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Visual demonstrations of core functionality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Identity Masking Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-8 rounded-2xl metal-card"
          >
            <h3 className="font-display font-semibold text-xl mb-6 text-center tracking-wide">
              IDENTITY MASKING
            </h3>
            
            <div className="flex items-center justify-between py-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full border border-gunmetal bg-card flex items-center justify-center mb-3">
                  <span className="font-mono text-xs text-soft-steel tracking-wider">Y</span>
                </div>
                <p className="text-xs text-muted-foreground font-body">Static</p>
              </div>

              <div className="flex-1 px-4 relative">
                <div className="h-px bg-gunmetal" />
              </div>

              <div className="text-center relative">
                <motion.div
                  animate={{ 
                    x: [-3, 3, -3],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-10 h-10 mx-auto rounded-full border-2 border-primary bg-card flex items-center justify-center mb-3 relative"
                >
                  <div className="absolute inset-0 rounded-full bg-primary/5" />
                  <span className="font-mono text-xs text-primary tracking-wider z-10">M</span>
                </motion.div>
                <p className="text-xs text-muted-foreground font-body">Shifting</p>
              </div>

              <div className="flex-1 px-4 relative">
                <div className="h-px bg-gunmetal" />
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute top-0 left-0 h-px bg-primary/40"
                  style={{ originX: 0 }}
                />
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full border border-gunmetal bg-card flex items-center justify-center mb-3">
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">D</span>
                </div>
                <p className="text-xs text-muted-foreground font-body">Sees Mask</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center font-body">
              Your identity stays static while the mask shifts between variations
            </p>
          </motion.div>

          {/* Gate Simulation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="p-8 rounded-2xl metal-card"
          >
            <h3 className="font-display font-semibold text-xl mb-6 text-center tracking-wide">
              THE GATE SIMULATION
            </h3>
            
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-background/50 border border-foreground/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-foreground tracking-wider">TRANSACTION STATUS</span>
                  {gateStatus === "safe" && <CheckCircle className="w-5 h-5 text-green-400" strokeWidth={1.5} />}
                  {gateStatus === "caution" && <AlertTriangle className="w-5 h-5 text-primary animate-pulse" strokeWidth={1.5} />}
                  {gateStatus === "blocked" && <XCircle className="w-5 h-5 text-red-400" strokeWidth={1.5} />}
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground font-mono tracking-wide">Contract Verification</span>
                      <span className="text-xs text-foreground font-mono">
                        {gateStatus === "caution" ? "60%" : "100%"}
                      </span>
                    </div>
                    <div className="h-1 bg-gunmetal rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: gateStatus === "caution" ? "60%" : "100%" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          gateStatus === "safe" ? "bg-[#4CD964]" :
                          gateStatus === "caution" ? "bg-gradient-to-r from-primary/60 to-accent/60" :
                          "bg-red-400"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground font-mono tracking-wide">Risk Assessment</span>
                      <span className="text-xs text-foreground font-mono">
                        {gateStatus === "caution" ? "40%" : "100%"}
                      </span>
                    </div>
                    <div className="h-1 bg-gunmetal rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: gateStatus === "caution" ? "40%" : "100%" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          gateStatus === "safe" ? "bg-[#4CD964]" :
                          gateStatus === "caution" ? "bg-gradient-to-r from-primary/60 to-accent/60" :
                          "bg-red-400"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground font-mono tracking-wide">Approval Check</span>
                      <span className="text-xs text-foreground font-mono">
                        {gateStatus === "caution" ? "80%" : "100%"}
                      </span>
                    </div>
                    <div className="h-1 bg-gunmetal rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: gateStatus === "caution" ? "80%" : "100%" }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          gateStatus === "safe" ? "bg-[#4CD964]" :
                          gateStatus === "caution" ? "bg-gradient-to-r from-primary/60 to-accent/60" :
                          "bg-red-400"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-card border border-border">
                  <p className="text-xs font-mono tracking-wide text-soft-steel">
                    {gateStatus === "safe" && "✓ Transaction approved - Safe to proceed"}
                    {gateStatus === "caution" && "⚠ Analyzing transaction..."}
                    {gateStatus === "blocked" && "✗ Transaction blocked - High risk detected"}
                  </p>
                </div>
              </div>

              <Button
                onClick={simulateGate}
                className="w-full font-display tracking-widest text-xs"
                disabled={gateStatus === "caution"}
              >
                SIMULATE TRANSACTION
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-4 font-body">
              The Gate inspects and simulates before allowing through
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimationsShowcase;
