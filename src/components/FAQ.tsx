"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "WHAT IS K3DNZ?",
    answer:
      "K3DNZ is a collection of 10,000 beautifully broken degens roaming Ethereum. They escaped a broken smart contract and were rejected by every respectable collection. They thrive on bad decisions and unlimited confidence.",
  },
  {
    question: "HOW MANY K3DNZ ARE THERE?",
    answer: "There are exactly 10,000 K3DNZ in the collection.",
  },
  {
    question: "WHAT IS THE MINT PRICE?",
    answer: "K3DNZ is a FREE MINT. Just pay gas.",
  },
  {
    question: "WHAT IS THE UTILITY?",
    answer:
      "We don't have a roadmap. We ate it. Our utility is pure degen culture and the freedom to ape first and ask questions never.",
  },
  {
    question: "WHERE CAN I BUY K3DNZ?",
    answer:
      "You can view the full collection and trade K3DNZ on Opensea and other secondary marketplaces after the mint.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-k3d-black py-24 text-k3d-light">
      <div className="container mx-auto px-4 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bebas-neue text-6xl text-white mb-4"
        >
          FAQ
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-inter text-k3d-gray text-lg"
        >
          GOT QUESTIONS? WE PROBABLY DON'T HAVE ANSWERS.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 max-w-3xl">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="mb-4 border border-k3d-concrete rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-6 bg-k3d-charcoal hover:bg-k3d-concrete transition-colors cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-bebas-neue text-xl text-white">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-k3d-orange" size={24} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-k3d-black p-6 border-t border-k3d-concrete"
                >
                  <p className="font-inter text-k3d-gray text-base leading-relaxed">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;