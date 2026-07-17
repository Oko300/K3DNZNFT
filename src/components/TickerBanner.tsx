"use client";

import { motion } from "framer-motion";

const TickerBanner = () => {
  const textContent =
    "K3DNZ ✦ 10,000 DEGENS ✦ NO ROADMAP ✦ BUY THE TOP ✦ FREE MINT ✦ APE FIRST ✦ ETHEREUM ✦ ";

  return (
    <div className="py-3 overflow-hidden" style={{ background: 'repeating-linear-gradient(45deg, #1a0a00 0px, #1a0a00 10px, #220d00 10px, #220d00 20px)' }}>
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-100%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        <span className="font-bebas text-[#FFB800] tracking-widest text-sm whitespace-nowrap px-4">
          {textContent}
        </span>
        <span className="font-bebas text-[#FFB800] tracking-widest text-sm whitespace-nowrap px-4">
          {textContent}
        </span>
      </motion.div>
    </div>
  );
};

export default TickerBanner;