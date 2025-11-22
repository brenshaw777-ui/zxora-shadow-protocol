import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-100" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-subtle-float" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-primary/8 rounded-full blur-3xl animate-subtle-float" style={{ animationDelay: "4s" }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-graphite border border-primary/40 text-xs font-mono text-primary tracking-wider">
                ZK-POWERED SHADOW CLIENT
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight"
            >
              OPERATE IN THE{" "}
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                SHADOW LAYER
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl font-body"
            >
              Zxora sits between you and every dApp, wallet, and website. It masks your identity, 
              randomizes your fingerprint, and routes every interaction through a hardened Gate 
              so who you are is never on the table.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("cta")}
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-display tracking-wide border-glow-ember transition-all duration-300"
              >
                REQUEST EARLY ACCESS
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("how-it-works")}
                className="border-foreground/20 hover:border-accent/50 hover:bg-accent/5 font-display tracking-wide transition-all duration-300"
              >
                VIEW HOW IT WORKS
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Central Gate - Minimal Radar Style */}
              <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-accent/20 flex items-center justify-center animate-pulse-glow">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/10 to-transparent" />
                <Shield className="w-16 h-16 text-foreground z-10" strokeWidth={1.5} />
                <span className="absolute -bottom-10 font-display text-xs text-primary tracking-widest">THE GATE</span>
              </div>

              {/* User Node - Top */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full metal-card flex items-center justify-center"
              >
                <span className="font-mono text-xs text-foreground tracking-wider">YOU</span>
              </motion.div>

              {/* Mask Node - Left */}
              <motion.div
                animate={{ x: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full metal-card border border-primary/30 flex items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-primary/5" />
                <span className="font-mono text-xs text-primary tracking-wider z-10">MASK</span>
              </motion.div>

              {/* dApp Nodes - Right */}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute right-4 top-1/3 w-14 h-14 rounded-full metal-card border border-foreground/20 flex items-center justify-center"
              >
                <span className="font-mono text-xs text-muted-foreground tracking-wider">dApp</span>
              </motion.div>

              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                className="absolute right-4 bottom-1/3 w-14 h-14 rounded-full metal-card border border-foreground/20 flex items-center justify-center"
              >
                <span className="font-mono text-xs text-muted-foreground tracking-wider">dApp</span>
              </motion.div>

              {/* Subtle Connection Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40" style={{ zIndex: -1 }}>
                <motion.line
                  x1="50%"
                  y1="16%"
                  x2="50%"
                  y2="42%"
                  stroke="hsl(var(--titanium-silver))"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.line
                  x1="23%"
                  y1="50%"
                  x2="42%"
                  y2="50%"
                  stroke="hsl(var(--electric-ember))"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1, ease: "linear" }}
                />
              </svg>

              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-foreground/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
