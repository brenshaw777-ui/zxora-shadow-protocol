import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useScrambleText } from "@/hooks/useScrambleText";
import { ArrowRight } from "lucide-react";
import zxoraIcon from "@/assets/zxora-icon.png";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { displayText } = useScrambleText("YOUR AGENTS. ACCOUNTABLE.", 1200, isInView);

  return (
    <section id="cta" ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-azonix mb-6 tracking-[0.10em] leading-[1.15] metallic-heading">
            {displayText}
          </h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-body font-medium"
          >
            Budgeted. Approved. Verified. Already running. The dashboard is live. Connect your OpenClaw gateway and start running missions with real economic controls.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 rounded-2xl metal-card"
        >
          {/* Logo Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/5 border border-emerald/20">
              <img src={zxoraIcon} alt="Zxora" className="w-5 h-5" />
              <span className="text-emerald text-xs font-mono tracking-wider uppercase">Zxora Economic Layer, Live</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.zxora.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto font-display tracking-widest"
              >
                LAUNCH DASHBOARD
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
            <a
              href="https://docs.zxora.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-display tracking-widest"
              >
                READ THE DOCS
              </Button>
            </a>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-6">
            Stablecoin-first · Verifiable receipts · On-chain anchored
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
