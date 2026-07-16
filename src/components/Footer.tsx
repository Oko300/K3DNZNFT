"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X, Gem, Copy, Link as LinkIcon, CheckCircle } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const contractAddress = "0xTBA"; // Placeholder for contract address
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-k3d-black border-t border-k3d-orange/20 py-16 px-8 text-k3d-light"
    >
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Top Row: Logo and Tagline */}
        <div className="mb-12">
          <h2 className="font-bebas-neue text-5xl text-k3d-orange mb-2">
            K3DNZ
          </h2>
          <p className="font-inter text-k3d-gray text-lg">
            Leave your brain at the door.
          </p>
        </div>

        {/* Middle Section: Navigation, Social, Contract */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full max-w-4xl mb-16 text-left md:text-center">
          {/* Column 1: Navigate */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bebas-neue text-xl text-white mb-4">
              NAVIGATE
            </h3>
            <ul className="space-y-2 font-inter text-k3d-gray">
              <li>
                <Link href="#story" className="hover:text-k3d-orange transition-colors">
                  Story
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-k3d-orange transition-colors">
                  The K3DNZ
                </Link>
              </li>
              <li>
                <Link href="#tasks" className="hover:text-k3d-orange transition-colors">
                  Tasks
                </Link>
              </li>
              <li>
                <Link href="#apply" className="hover:text-k3d-orange transition-colors">
                  Apply WL
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Degenerate On */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bebas-neue text-xl text-white mb-4">
              DEGENERATE ON
            </h3>
            <ul className="space-y-2 font-inter text-k3d-gray">
              <li>
                <a
                  href="https://x.com/k3dnz?s=21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-k3d-orange transition-colors"
                >
                  <X size={20} className="mr-2" /> Twitter/X
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-k3d-orange transition-colors"
                >
                  <LinkIcon size={20} className="mr-2" /> Discord
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-k3d-orange transition-colors"
                >
                  <Gem size={20} className="mr-2" /> OpenSea
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contract */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bebas-neue text-xl text-white mb-4">
              CONTRACT
            </h3>
            <ul className="space-y-2 font-inter text-k3d-gray">
              <li>Ethereum Mainnet</li>
              <li>10,000 Supply</li>
              <li className="flex items-center">
                {contractAddress}
                <button onClick={handleCopy} className="ml-2 text-k3d-orange hover:text-k3d-fire transition-colors">
                  {copied ? <CheckCircle size={16} /> : <Copy size={16} />}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Copyright and Disclaimer */}
        <p className="font-mono text-k3d-concrete text-xs text-center mt-8">
          &copy; {new Date().getFullYear()} K3DNZ. ALL WRONGS RESERVED. WE ARE NOT RESPONSIBLE FOR YOUR FINANCIAL DECISIONS.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;