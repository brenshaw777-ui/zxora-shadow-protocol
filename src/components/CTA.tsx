import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrambleText } from "@/hooks/useScrambleText";
import zxoraIcon from "@/assets/zxora-icon.png";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const { displayText } = useScrambleText("OPERATE IN THE SHADOW LAYER", 1200, isInView);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Request submitted!",
      description: "We'll be in touch soon with access details.",
    });

    setEmail("");
    setContact("");
  };

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
            Zxora is in private build. If you're a serious operator, builder, or fund and want 
            a safer way to touch the chain, <span className="text-foreground font-semibold">get on the list</span>.
          </motion.p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-2xl metal-card"
        >
          {/* Logo Badge */}
          <div className="flex justify-center mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald/5 border border-emerald/20">
              <img src={zxoraIcon} alt="Zxora" className="w-5 h-5" />
              <span className="text-emerald text-xs font-mono tracking-wider uppercase">Secure Submission</span>
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 font-display tracking-wider">
              EMAIL ADDRESS *
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="bg-input border-border focus:border-primary/50 font-body transition-all duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium mb-2 font-display tracking-wider">
              TELEGRAM/X HANDLE (OPTIONAL)
            </label>
            <Textarea
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              placeholder="@yourhandle or t.me/yourhandle"
              className="bg-input border-border focus:border-primary/50 resize-none font-body transition-all duration-300"
              rows={3}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full font-display tracking-widest"
          >
            REQUEST EARLY ACCESS
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            We respect your privacy. No spam, just updates on access and development.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default CTA;
