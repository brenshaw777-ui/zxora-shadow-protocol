import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const faqs = [
    {
      question: "Is Zxora a browser, a wallet, or something else?",
      answer: "Zxora is a shadow client—a privacy layer that sits between you and every dApp, wallet, and blockchain. It's not a browser or wallet replacement, but rather an intermediary that masks your identity, manages sessions, and enforces a zk-powered firewall on all your crypto interactions.",
    },
    {
      question: "How is Zxora different from using Tor + MetaMask?",
      answer: "Tor provides network anonymity, but doesn't understand crypto-specific threats like wallet fingerprinting, transaction patterns, or approval risks. Zxora is purpose-built for crypto: it manages profiles (Masks), isolates sessions (Corridors), simulates transactions through The Gate, and gives you a unified control deck for all approvals across chains.",
    },
    {
      question: "Do you store any logs or analytics on your servers?",
      answer: "No. Zxora is local-first by design. Privacy logic and transaction simulation run on your device. We don't track your behavior, wallet connections, or browsing patterns. Your data isn't our product—it's your advantage.",
    },
    {
      question: "What does 'zk-powered' actually mean in Zxora?",
      answer: "Zero-knowledge proofs allow you to prove ownership of assets or wallet credentials without revealing your actual wallet address. In Zxora, The Gate uses zk techniques to verify your identity and permissions while keeping your real wallet hidden from dApps and external observers.",
    },
    {
      question: "Will Zxora have a token?",
      answer: "We're focused on building the product first. Token discussions are premature. If a token makes sense for decentralized relay operations or governance down the line, we'll be transparent about it.",
    },
    {
      question: "Which chains and wallets will you support first?",
      answer: "Phase 1 will support Ethereum and EVM-compatible chains with MetaMask, Coinbase Wallet, and WalletConnect. We'll expand to other ecosystems (Solana, Cosmos, etc.) and wallets based on operator demand and technical readiness.",
    },
    {
      question: "How can I get early access?",
      answer: "Zxora is in private build. If you're a serious operator, builder, fund, or researcher who needs better privacy and safety tooling, submit your email below. We're onboarding in small, controlled batches.",
    },
  ];

  return (
    <section id="faq" ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4 tracking-wide">
            QUESTIONS,{" "}
            <span className="text-primary">ANSWERED</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-2xl px-6 metal-card hover:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="font-display text-lg hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
