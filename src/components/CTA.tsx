import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

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
    <section id="cta" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/8 rounded-full blur-3xl" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6 tracking-[0.08em] leading-[1.15] metallic-heading">
            OPERATE IN THE SHADOW LAYER
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Zxora is in private build. If you're a serious operator, builder, or fund and want 
            a safer way to touch the chain, get on the list.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-2xl metal-card"
        >
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
