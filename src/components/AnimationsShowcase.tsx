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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            See Zxora{" "}
            <span className="text-secondary">in Motion</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visual demonstrations of core functionality
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Identity Masking Animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-lg bg-card border border-border"
          >
            <h3 className="font-display font-semibold text-2xl mb-6 text-center">
              Identity Masking
            </h3>
            
            <div className="flex items-center justify-between py-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center mb-3">
                  <span className="font-mono text-sm">YOU</span>
                </div>
                <p className="text-xs text-muted-foreground">Static</p>
              </div>

              <div className="flex-1 px-4">
                <motion.div
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-0.5 bg-gradient-to-r from-primary to-secondary"
                />
              </div>

              <div className="text-center">
                <motion.div
                  animate={{ 
                    rotate: [0, 120, 240, 360],
                    backgroundColor: ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))", "hsl(var(--primary))"]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-3"
                >
                  <span className="font-mono text-sm text-white">MASK</span>
                </motion.div>
                <p className="text-xs text-muted-foreground">Rotating</p>
              </div>

              <div className="flex-1 px-4">
                <motion.div
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="h-0.5 bg-gradient-to-r from-secondary to-accent"
                />
              </div>

              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-secondary/20 border border-secondary flex items-center justify-center mb-3">
                  <span className="font-mono text-sm text-secondary">dApp</span>
                </div>
                <p className="text-xs text-muted-foreground">Sees Mask</p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Your identity stays static while the mask rotates through variations
            </p>
          </motion.div>

          {/* Gate Simulation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-lg bg-card border border-border"
          >
            <h3 className="font-display font-semibold text-2xl mb-6 text-center">
              The Gate Simulation
            </h3>
            
            <div className="space-y-6">
              <div className="p-6 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm">Transaction Status</span>
                  {gateStatus === "safe" && <CheckCircle className="w-6 h-6 text-green-500" />}
                  {gateStatus === "caution" && <AlertTriangle className="w-6 h-6 text-yellow-500 animate-pulse" />}
                  {gateStatus === "blocked" && <XCircle className="w-6 h-6 text-red-500" />}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Contract Verification</span>
                    <motion.div
                      animate={{ width: gateStatus === "caution" ? "60%" : "100%" }}
                      className={`h-2 rounded-full ${
                        gateStatus === "safe" ? "bg-green-500" :
                        gateStatus === "caution" ? "bg-yellow-500" :
                        "bg-red-500"
                      }`}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Risk Assessment</span>
                    <motion.div
                      animate={{ width: gateStatus === "caution" ? "40%" : "100%" }}
                      className={`h-2 rounded-full ${
                        gateStatus === "safe" ? "bg-green-500" :
                        gateStatus === "caution" ? "bg-yellow-500" :
                        "bg-red-500"
                      }`}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Approval Check</span>
                    <motion.div
                      animate={{ width: gateStatus === "caution" ? "80%" : "100%" }}
                      className={`h-2 rounded-full ${
                        gateStatus === "safe" ? "bg-green-500" :
                        gateStatus === "caution" ? "bg-yellow-500" :
                        "bg-red-500"
                      }`}
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>

                <div className="mt-6 p-4 rounded bg-background/50">
                  <p className="text-sm font-mono">
                    {gateStatus === "safe" && "✓ Transaction approved - Safe to proceed"}
                    {gateStatus === "caution" && "⚠ Analyzing transaction..."}
                    {gateStatus === "blocked" && "✗ Transaction blocked - High risk detected"}
                  </p>
                </div>
              </div>

              <Button
                onClick={simulateGate}
                className="w-full bg-primary hover:bg-primary/90 font-display"
                disabled={gateStatus === "caution"}
              >
                Simulate Transaction
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-4">
              The Gate inspects and simulates before allowing through
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimationsShowcase;
