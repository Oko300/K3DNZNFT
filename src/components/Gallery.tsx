"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/k3dnz-1.png.jpeg",
  "/images/k3dnz-2.png.jpeg",
];

const totalCards = 4; // We need 4 cards as per the requirement
const nftCards = Array.from({ length: totalCards }, (_, i) => {
  if (images[i]) {
    return {
      id: i + 1,
      src: images[i],
      alt: `K3DNZ #${(i + 1).toString().padStart(4, "0")}`,
      type: "image",
    };
  } else {
    return {
      id: i + 1,
      type: "placeholder",
      title: `K3DN #${(i + 1).toString().padStart(4, "0")}`,
    };
  }
});

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
            className={`relative p-2 shadow-lg polaroid-card ${
              nft.id % 2 === 1 ? "rotate-[-2deg]" : "rotate-[2deg]"
            } ${nft.type === "placeholder" ? "bg-[#1A0A00] border-2 border-[#FF5C00]" : "bg-[#F0EDE8]"}`}
          >
            {nft.type === "image" ? (
              <>
                <div className="aspect-square relative">
                  <Image
                    src={nft.src!}
                    alt={nft.alt!}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
                <div className="p-2 text-center">
                  <p className="font-marker text-sm text-[#0A0A0A]">
                    {nft.alt}
                  </p>
                </div>
              </>
            ) : (
              <div className="aspect-square flex flex-col items-center justify-center">
                <div className="text-6xl mb-2">💀</div>
                <div style={{fontFamily: 'var(--font-bebas)'}} className="text-xl text-[#FF5C00] tracking-widest">
                  {nft.title}
                </div>
              </div>
            )}
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