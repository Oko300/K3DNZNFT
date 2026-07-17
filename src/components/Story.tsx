"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Story = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative w-full bg-[#0A0A0A] py-32 text-[#F0EDE8] overflow-hidden">
      {/* Large cracked number "10K" as background watermark */}
      <h2 className="absolute top-1/2 right-0 -translate-y-1/2 font-bebas text-[25vw] text-[#F0EDE8] opacity-5 pointer-events-none whitespace-nowrap z-0 cracked-text">
        10K
      </h2>

      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-16 relative z-10">
        {/* Left Column: Lore */}
        <div className="w-full md:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-marker text-[#FF4500] text-sm tracking-widest mb-4 relative spray-paint-effect"
          >
            BORN BROKE. DIED DEGEN.
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="font-bebas text-5xl text-[#F0EDE8] leading-tight mb-8"
          >
            <span className="text-[#FF4500]">NOBODY</span> KNOWS WHERE WE CAME
            FROM.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="font-inter text-[#F0EDE8] text-base leading-relaxed mb-6"
          >
            Nobody knows where the K3DNZ came from. Some say they escaped a
            broken smart contract. Others swear they were rejected from every
            respectable NFT collection ever created. The truth? They don't even
            know.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="font-inter text-[#F0EDE8] text-base leading-relaxed mb-6"
          >
            There are 10,000 K3DNZ roaming Ethereum, surviving purely on bad
            decisions, zero plans, and unlimited confidence. They don't chase
            utility. They don't read roadmaps. They don't care about floor
            prices.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="font-inter text-[#F0EDE8] text-base leading-relaxed mb-8"
          >
            They buy tops. They celebrate rugs. They ape first and ask questions
            never.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="font-bebas text-2xl text-[#FFB800]"
          >
            WELCOME TO K3DNZ. LEAVE YOUR BRAIN AT THE DOOR.
          </motion.p>
        </div>

        {/* Right Column: Trait Cards */}
        <div ref={ref} className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="bg-[#0A0A0A] border-l-4 border-[#CC0000] p-6 hover:border-[#FF4500] transition-colors shadow-lg"
          >
            <p className="text-[#FF4500] text-4xl mb-4">🔥</p>
            <h3 className="font-bebas text-2xl text-[#F0EDE8] mb-2">NO UTILITY</h3>
            <p className="font-inter text-[#F0EDE8] text-sm">
              We don't have a roadmap. We ate it.
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="bg-[#0A0A0A] border-l-4 border-[#CC0000] p-6 hover:border-[#FF4500] transition-colors shadow-lg"
          >
            <p className="text-[#FF4500] text-4xl mb-4">💀</p>
            <h3 className="font-bebas text-2xl text-[#F0EDE8] mb-2">NO PROMISES</h3>
            <p className="font-inter text-[#F0EDE8] text-sm">
              We lied about having no promises.
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="bg-[#0A0A0A] border-l-4 border-[#CC0000] p-6 hover:border-[#FF4500] transition-colors shadow-lg"
          >
            <p className="text-[#FF4500] text-4xl mb-4">🎯</p>
            <h3 className="font-bebas text-2xl text-[#F0EDE8] mb-2">BUY TOPS</h3>
            <p className="font-inter text-[#F0EDE8] text-sm">
              It's not a bug. It's the whole point.
            </p>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.8 }}
            className="bg-[#0A0A0A] border-l-4 border-[#CC0000] p-6 hover:border-[#FF4500] transition-colors shadow-lg"
          >
            <p className="text-[#FF4500] text-4xl mb-4">⚡</p>
            <h3 className="font-bebas text-2xl text-[#F0EDE8] mb-2">APE FIRST</h3>
            <p className="font-inter text-[#F0EDE8] text-sm">
              Questions are for people with plans.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;