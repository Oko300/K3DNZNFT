"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
    <section className="relative h-screen bg-[#0A0A0A] text-[#F0EDE8] flex items-center overflow-hidden">
      {/* Background with animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-cracked-concrete opacity-10"></div>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-[#FF4500] rounded-full opacity-0 animate-particle"
            style={{
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 10}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Large background text "DEGENS" */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[20vw] text-[#F0EDE8] opacity-5 pointer-events-none whitespace-nowrap">
        DEGENS
      </h2>

      <motion.div
        className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side: Hero Text and Buttons */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
          <motion.span
            className="bg-[#CC0000] text-[#F0EDE8] font-marker text-sm px-3 py-1 uppercase tracking-widest mb-4 inline-block spray-paint-effect"
            variants={itemVariants}
          >
            10,000 DEGENS ON ETHEREUM
          </motion.span>
          <motion.h1
            className="font-bebas text-5xl md:text-8xl text-[#F0EDE8] leading-tight mb-6"
            variants={itemVariants}
          >
            <span className="text-[#FF4500]">NOBODY</span> KNOWS WHERE WE CAME
            FROM.
          </motion.h1>
          <motion.p
            className="font-inter text-[#F0EDE8] max-w-lg mb-8 text-lg"
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
            <button
              onClick={() => document.getElementById('tasks')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-[#FF4500] text-[#0A0A0A] font-bebas text-xl px-8 py-4 hover:bg-[#FFB800] transition-colors cracked-button"
            >
              APE IN — APPLY FOR WL
            </button>
            <Link href="/story">
              <button className="border-2 border-[#FF4500] text-[#FF4500] font-bebas text-xl px-8 py-4 hover:bg-[#FF4500]/20 transition-colors cracked-border">
                READ THE CHAOS
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Side: K3DNZ Character Image Placeholder */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0"
          variants={itemVariants}
        >
          <div className="relative flex-1 flex items-center justify-center">
            <div className="relative w-[350px] h-[400px] border-2 border-[#FF4500] bg-[#111] rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/images/k3dnz-1.png"
                alt="K3DNZ #0001"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute bottom-4 text-center">
                <p style={{fontFamily: 'var(--font-bebas)'}} className="text-xl text-[#FF4500] tracking-widest">
                  K3DN #0001
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Stat Bar at Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-[#FF4500]/10 border-t border-[#FF4500]/30 py-4 text-center font-inter text-sm uppercase tracking-wider text-[#F0EDE8] z-20">
        10,000 SUPPLY 🔥 FREE MINT 🔥 ETHEREUM
      </div>
    </section>
  );
};

export default Hero;