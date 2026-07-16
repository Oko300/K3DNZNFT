"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative h-screen bg-k3d-black text-k3d-light flex items-center overflow-hidden">
      {/* Background with cracked concrete texture */}
      <div className="absolute inset-0 bg-cracked-concrete"></div>

        <motion.div
          className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side */}
          <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
            <motion.span
              className="bg-k3d-concrete text-k3d-fire font-mono text-xs px-3 py-1 uppercase tracking-widest mb-4 inline-block"
              variants={itemVariants}
            >
              10,000 DEGENS ON ETHEREUM
            </motion.span>
            <motion.h1
              className="font-bebas-neue text-4xl md:text-7xl text-white leading-tight mb-6"
              variants={itemVariants}
            >
              <span className="text-k3d-orange">NOBODY</span> KNOWS WHERE WE CAME
              FROM.
            </motion.h1>
          <motion.p
            className="font-inter text-k3d-gray max-w-lg mb-8"
            variants={itemVariants}
          >
            Escaped a broken smart contract. Rejected by every respectable
            collection. 10,000 beautifully broken degens. Leave your brain at
            the door.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
            variants={itemVariants}
          >
            <Link href="/wl-apply">
              <button className="bg-k3d-orange text-k3d-black font-bold font-bebas-neue text-xl px-8 py-4 hover:bg-k3d-fire transition-colors">
                APE IN — APPLY FOR WL
              </button>
            </Link>
            <Link href="/story">
              <button className="border-2 border-k3d-orange text-k3d-orange font-bold font-bebas-neue text-xl px-8 py-4 hover:bg-k3d-orange/10 transition-colors">
                READ THE CHAOS
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="font-inter text-k3d-light text-sm uppercase tracking-wider"
            variants={itemVariants}
          >
            10,000 SUPPLY 🔥 FREE MINT 🔥 ETHEREUM
          </motion.div>
        </div>

        {/* Right Side */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center md:justify-end mt-8 md:mt-0"
          variants={itemVariants}
        >
          <div className="rounded-lg bg-k3d-charcoal border border-k3d-orange/40 aspect-square w-full max-w-md flex items-center justify-center text-k3d-gray font-bebas-neue text-3xl p-4">
            DROP YOUR K3DN HERE
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;