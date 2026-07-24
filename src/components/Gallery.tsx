"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const nftImages = [
  { src: '/images/k3dnz-1.png', id: '0001' },
  { src: '/images/k3dnz-2.png', id: '0002' },
  { src: '/images/k3dnz-1.png', id: '0003' },
  { src: '/images/k3dnz-2.png', id: '0004' },
  { src: '/images/k3dnz-1.png', id: '0005' },
  { src: '/images/k3dnz-2.png', id: '0006' },
  { src: '/images/k3dnz-1.png', id: '0007' },
  { src: '/images/k3dnz-2.png', id: '0008' },
];

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

      {/* Marquee Gallery */}
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {nftImages.map((nft, index) => (
            <div
              key={index}
              className="w-[200px] h-[200px] border-2 border-[#FF5C00] rounded-lg overflow-hidden mx-3 flex-shrink-0 flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-[calc(100%-24px)]">
                <Image
                  src={nft.src}
                  alt={`K3DN #${nft.id}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="font-bebas text-[#FF5C00] text-sm text-center mt-1">
                K3DN #{nft.id}
              </p>
            </div>
          ))}
          {/* Duplicate images for seamless looping */}
          {nftImages.map((nft, index) => (
            <div
              key={`duplicate-${index}`}
              className="w-[200px] h-[200px] border-2 border-[#FF5C00] rounded-lg overflow-hidden mx-3 flex-shrink-0 flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-[calc(100%-24px)]">
                <Image
                  src={nft.src}
                  alt={`K3DN #${nft.id}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="font-bebas text-[#FF5C00] text-sm text-center mt-1">
                K3DN #{nft.id}
              </p>
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