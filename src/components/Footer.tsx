"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative bg-[#0A0A0A] py-16 px-8 text-[#F0EDE8] overflow-hidden"
    >
      {/* Large cracked "K3DNZ" text as background watermark */}
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[20vw] text-[#F0EDE8] opacity-5 pointer-events-none whitespace-nowrap z-0 cracked-text">
        K3DNZ
      </h2>

      <div className="container mx-auto flex flex-col items-center text-center relative z-10">
        {/* Social Links Row */}
        <div className="flex space-x-6 mb-8">
          <a
            href="https://x.com/k3dnz?s=21"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F0EDE8] hover:text-[#FF4500] transition-colors"
            aria-label="Twitter/X"
          >
            <X size={32} />
          </a>
          {/* Add other social links here if needed */}
        </div>

        {/* Bottom Text */}
        <p className="font-inter text-[#F0EDE8] text-sm text-center mt-8">
          &copy; 2025 K3DNZ. NO RIGHTS RESERVED. APE RESPONSIBLY.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;