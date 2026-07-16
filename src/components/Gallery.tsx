"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const nftCards = [
  { id: 1, color: "bg-[#2A1A0A]", trait: "UNHINGED" },
  { id: 2, color: "bg-[#1A0A0A]", trait: "CHAOTIC" },
  { id: 3, color: "bg-[#0A1A2A]", trait: "BROKEN" },
  { id: 4, color: "bg-[#2A1A0A]", trait: "DEGEN" },
  { id: 5, color: "bg-[#1A0A0A]", trait: "REJECTED" },
  { id: 6, color: "bg-[#0A1A2A]", trait: "APED" },
  { id: 7, color: "bg-[#2A1A0A]", trait: "RUGGED" },
  { id: 8, color: "bg-[#1A0A0A]", trait: "GLITCHED" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-k3d-black py-24 text-k3d-light">
      <div className="container mx-auto px-4 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bebas-neue text-6xl text-white mb-4"
        >
          THE K3DNZ
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-inter text-k3d-gray text-lg"
        >
          10,000 UNHINGED DEGENS. PICK YOUR POISON.
        </motion.p>
      </div>

      {/* Marquee Rows */}
      <div className="overflow-hidden py-8">
        {/* Row 1: Scrolls Left */}
        <div className="flex marquee-left mb-8">
          {[...nftCards, ...nftCards].map((nft, index) => (
            <div
              key={`marquee-1-${index}`}
              className="flex-shrink-0 w-[200px] h-[200px] bg-k3d-charcoal rounded-xl overflow-hidden border border-k3d-concrete hover:border-k3d-orange transition-colors mx-4"
            >
              <div className={`aspect-square flex items-center justify-center ${nft.color}`}>
                <span className="font-bebas-neue text-k3d-orange text-xl">K3DN #{nft.id.toString().padStart(4, '0')}</span>
              </div>
              <p className="font-mono text-xs text-k3d-gray p-2">TRAIT: {nft.trait}</p>
            </div>
          ))}
        </div>

        {/* Row 2: Scrolls Right */}
        <div className="flex marquee-right">
          {[...nftCards, ...nftCards].map((nft, index) => (
            <div
              key={`marquee-2-${index}`}
              className="flex-shrink-0 w-[200px] h-[200px] bg-k3d-charcoal rounded-xl overflow-hidden border border-k3d-concrete hover:border-k3d-orange transition-colors mx-4"
            >
              <div className={`aspect-square flex items-center justify-center ${nft.color}`}>
                <span className="font-bebas-neue text-k3d-orange text-xl">K3DN #{nft.id.toString().padStart(4, '0')}</span>
              </div>
              <p className="font-mono text-xs text-k3d-gray p-2">TRAIT: {nft.trait}</p>
            </div>
          ))}
        </div>
      </div>

      {/* View Collection Button */}
      <div className="text-center mt-16">
        <Link href="https://opensea.io/collection/k3dnz" target="_blank" rel="noopener noreferrer">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="border border-k3d-orange/50 text-k3d-orange hover:bg-k3d-orange/10 font-bebas-neue text-lg px-10 py-3 transition-colors"
          >
            VIEW FULL COLLECTION ON OPENSEA
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;