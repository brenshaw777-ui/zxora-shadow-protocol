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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 tracking-wide">
            SEE ZXORA{" "}
            <span className="text-primary">IN MOTION</span>
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
                <div className="w-16 h-16 mx-auto rounded-full border border-foreground/20 bg-graphite flex items-center justify-center mb-3">
                  <span className="font-mono text-xs text-foreground tracking-wider">YOU</span>
                </div>
                <p className="text-xs text-muted-foreground font-body">Static</p>
              </div>

              <div className="flex-1 px-4">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="h-px bg-gradient-to-r from-transparent via-foreground/40 to-transparent"
                />
              </div>

              <div className="text-center">
                <motion.div
                  animate={{ 
                    x: [-2, 2, -2],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 mx-auto rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center mb-3"
                >
                  <span className="font-mono text-xs text-primary tracking-wider">MASK</span>
                </motion.div>
                <p className="text-xs text-muted-foreground font-body">Shifting</p>
              </div>

              <div className="flex-1 px-4">
                <motion.div
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5, ease: "easeInOut" }}
                  className="h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                />
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full border border-foreground/20 bg-graphite flex items-center justify-center mb-3">
                  <span className="font-mono text-xs text-muted-foreground tracking-wider">dApp</span>
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
                    <div className="h-1 bg-secondary/20 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: gateStatus === "caution" ? "60%" : "100%" }}
                        transition={{ duration: 0.3 }}
                        className={`h-full rounded-full ${
                          gateStatus === "safe" ? "bg-green-400" :
                          gateStatus === "caution" ? "bg-primary" :
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
                    <div className="h-1 bg-secondary/20 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: gateStatus === "caution" ? "40%" : "100%" }}
                        transition={{ duration: 0.3 }}
                        className={`h-full rounded-full ${
                          gateStatus === "safe" ? "bg-green-400" :
                          gateStatus === "caution" ? "bg-primary" :
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
                    <div className="h-1 bg-secondary/20 rounded-full overflow-hidden">
                      <motion.div
                        animate={{ width: gateStatus === "caution" ? "80%" : "100%" }}
                        transition={{ duration: 0.3 }}
                        className={`h-full rounded-full ${
                          gateStatus === "safe" ? "bg-green-400" :
                          gateStatus === "caution" ? "bg-primary" :
                          "bg-red-400"
                        }`}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-lg bg-charcoal-panel/50 border border-foreground/5">
                  <p className="text-xs font-mono tracking-wide">
                    {gateStatus === "safe" && "✓ Transaction approved - Safe to proceed"}
                    {gateStatus === "caution" && "⚠ Analyzing transaction..."}
                    {gateStatus === "blocked" && "✗ Transaction blocked - High risk detected"}
                  </p>
                </div>
              </div>

              <Button
                onClick={simulateGate}
                className="w-full bg-primary hover:bg-primary/80 font-display tracking-widest text-xs transition-all duration-300"
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
