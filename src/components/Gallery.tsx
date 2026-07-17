"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const nftCards = Array.from({ length: 16 }, (_, i) => ({
  id: i + 1,
  color: "bg-[#0A0A0A]", // Dark background for polaroid
  trait: "DEGEN", // Placeholder trait
}));

const Gallery = () => {
  return (
    <section id="gallery" className="bg-[#0A0A0A] py-24 text-[#F0EDE8]">
      <div className="container mx-auto px-4 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bebas text-6xl text-[#F0EDE8] mb-4"
        >
          THE ROGUES GALLERY
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-inter text-[#F0EDE8] text-lg"
        >
          10,000 UNHINGED DEGENS. PICK YOUR POISON.
        </motion.p>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-8">
        {nftCards.map((nft, index) => (
          <motion.div
            key={nft.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative bg-[#F0EDE8] p-2 shadow-lg polaroid-card ${
              nft.id % 2 === 1 ? "rotate-[-2deg]" : "rotate-[2deg]"
            }`}
          >
            <div className="aspect-square bg-[#0A0A0A] flex items-center justify-center border border-dashed border-[#FF4500]">
              <span className="font-bebas text-[#FFB800] text-xl">
                K3DN #{nft.id.toString().padStart(4, "0")}
              </span>
            </div>
            <div className="p-2 text-center">
              <p className="font-marker text-sm text-[#0A0A0A]">
                {nft.trait}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View Collection Button */}
      <div className="text-center mt-16">
        <Link href="https://opensea.io/collection/k3dnz" target="_blank" rel="noopener noreferrer">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="border-2 border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500]/20 font-bebas text-lg px-10 py-3 transition-colors cracked-border"
          >
            VIEW FULL COLLECTION ON OPENSEA
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Gallery;