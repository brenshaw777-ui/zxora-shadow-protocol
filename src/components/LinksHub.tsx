import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Send, Twitter, BookOpen, Youtube } from "lucide-react";
import { useScrambleText } from "@/hooks/useScrambleText";

const LinksHub = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { displayText } = useScrambleText("ECOSYSTEM LINKS", 1200, isInView);

  const links = [
    {
      title: "Chart",
      icon: BarChart3,
      url: "#",
      tooltip: "Open chart",
      animation: "pulse",
    },
    {
      title: "Telegram",
      icon: Send,
      url: "#",
      tooltip: "Join Telegram",
      animation: "rotate",
    },
    {
      title: "X / Twitter",
      icon: Twitter,
      url: "#",
      tooltip: "Follow on X",
      animation: "scale",
    },
    {
      title: "Gitbook",
      icon: BookOpen,
      url: "#",
      tooltip: "Visit Gitbook",
      animation: "pulse",
    },
    {
      title: "YouTube",
      icon: Youtube,
      url: "#",
      tooltip: "Watch on YouTube",
      animation: "scale",
    },
  ];

  return (
    <section id="links" ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-monument font-bold mb-4 text-center tracking-[0.03em] leading-[1.15] metallic-heading">
            {displayText}
          </h2>
          <p className="text-steel text-base sm:text-lg font-body font-normal">
            Navigate the full Zxora network.
          </p>
        </motion.div>

        {/* Animated Grid Lines Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <motion.div
            className="absolute inset-0 bg-grid"
            animate={{ 
              backgroundPositionX: ["0%", "100%"],
            }}
            transition={{ 
              duration: 60, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          {links.map((link, index) => {
            const Icon = link.icon;
            
            return (
              <motion.a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group relative"
                title={link.tooltip}
              >
                {/* Card */}
                <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-graphite to-slate border border-emerald/15 hover:border-emerald/40 transition-all duration-500 hover:shadow-[0_0_32px_rgba(0,227,140,0.25)] hover:-translate-y-2 active:translate-y-0">
                  {/* Inner Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Scan Line Sweep */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl overflow-hidden"
                    initial={{ opacity: 0 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald/20 to-transparent h-32"
                      animate={{ 
                        y: ["-100%", "200%"],
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="relative flex flex-col items-center gap-4">
                    {/* Icon */}
                    <motion.div
                      className="relative"
                      whileHover={
                        link.animation === "pulse" 
                          ? { scale: [1, 1.1, 1] }
                          : link.animation === "rotate"
                          ? { rotate: [0, 10, -10, 0] }
                          : { scale: [1, 1.15, 1] }
                      }
                      transition={{ duration: 0.4 }}
                    >
                      <div className="p-4 rounded-xl bg-slate/50 border border-emerald/20 group-hover:border-emerald/50 group-hover:bg-emerald/10 transition-all duration-300 group-hover:shadow-[0_0_16px_rgba(0,227,140,0.4)]">
                        <Icon 
                          className="w-8 h-8 text-emerald group-hover:text-emerald group-hover:drop-shadow-[0_0_8px_rgba(0,227,140,0.8)]" 
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Glow Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-emerald/0 group-hover:border-emerald/30"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0, 0.5, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                    {/* Label */}
                    <h3 className="text-base sm:text-lg lg:text-xl font-monument font-bold text-titanium tracking-[0.03em] uppercase group-hover:text-emerald transition-colors duration-300">
                      {link.title}
                    </h3>

                    {/* Hover Indicator */}
                    <motion.div
                      className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-emerald/0 group-hover:bg-emerald/60 transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "3rem" }}
                    />
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald/30 group-hover:bg-emerald group-hover:shadow-[0_0_8px_rgba(0,227,140,0.8)] transition-all duration-300" />
                </div>

                {/* External Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-emerald/0 group-hover:bg-emerald/5 blur-xl transition-all duration-500 -z-10" />
              </motion.a>
            );
          })}
        </div>

        {/* Bottom Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-emerald/30 to-transparent"
        />
      </div>
    </section>
  );
};

export default LinksHub;
