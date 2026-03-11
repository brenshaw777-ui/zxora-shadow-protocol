import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrambleText } from "@/hooks/useScrambleText";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const { displayText } = useScrambleText("QUESTIONS ABOUT THE ECONOMIC LAYER", 1200, isInView);

  const faqs = [
    {
      question: "What is Zxora?",
      answer: "Zxora is the economic operating system for autonomous AI agents. It adds budgets, approvals, stablecoin treasury, and verifiable receipts on top of OpenClaw, the open-source agent platform. Think of it as the CFO layer for your AI workforce.",
    },
    {
      question: "Do I need OpenClaw to use Zxora?",
      answer: "Yes. Zxora is built natively on OpenClaw. Your agents run on OpenClaw with their own personality, tools, and channels. Zxora connects to your OpenClaw gateway and adds the economic control plane: budgets, approvals, receipts, and treasury management.",
    },
    {
      question: "Does Zxora run my AI models?",
      answer: "No. Zxora never calls model APIs directly. OpenClaw owns all model routing: Claude, GPT, Gemini, Codex, whatever you configure. Zxora manages the money side: how much each agent can spend, on what, and whether it needs approval first.",
    },
    {
      question: "How do budgets work?",
      answer: "Each mission gets a budget vault funded in USDC. You set caps per spend category: model inference, paid APIs, x402 payments, on-chain transfers. Agents reserve budget before spending, commit on execution, and release unused funds. When a vault hits its ceiling, execution pauses automatically.",
    },
    {
      question: "What are verifiable receipts?",
      answer: "Every agent action produces a receipt, a structured record of what happened, when, and how much it cost. Receipts are hash-chained (each receipt references the previous one) and batched into Merkle trees that are anchored on-chain. The result is cryptographic proof that your agent did exactly what it claims.",
    },
    {
      question: "What stops an agent from going rogue?",
      answer: "Three layers of protection: Budget vaults enforce hard spend caps per category. Approval gates pause execution for any action above your threshold. Receipts create an immutable record of everything that happened. Your agents operate autonomously within the boundaries you set, and you can prove it.",
    },
  ];

  return (
    <section id="faq" ref={ref} className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-monument font-bold mb-4 text-center tracking-[0.03em] leading-[1.15] metallic-heading">
            {displayText}
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
                className="border border-border rounded-2xl px-6 metal-card hover:border-primary/40 hover:border-glow-emerald-soft transition-all duration-300 data-[state=open]:border-l-2 data-[state=open]:border-l-primary"
              >
                <AccordionTrigger className="font-machina text-base sm:text-lg text-foreground hover:no-underline tracking-[0.02em] font-medium">
                  {faq.question}
                </AccordionTrigger>
<AccordionContent className="text-muted-foreground leading-relaxed font-body font-normal">
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
