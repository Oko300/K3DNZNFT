"use client";

import { motion } from "framer-motion";

const TickerBanner = () => {
  const textContent =
    "K3DNZ • 10,000 DEGENS • NO ROADMAP • NO UTILITY • JUST VIBES • BUY THE TOP • APE IN • ETHEREUM • ";

  return (
    <div className="bg-k3d-orange py-3 overflow-hidden">
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
        <span className="font-bebas-neue text-black tracking-widest text-sm whitespace-nowrap px-4">
          {textContent}
        </span>
        <span className="font-bebas-neue text-black tracking-widest text-sm whitespace-nowrap px-4">
          {textContent}
        </span>
      </motion.div>
    </div>
  );
};

export default TickerBanner;