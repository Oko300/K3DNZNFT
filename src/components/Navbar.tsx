"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? "bg-[#0A0A0A]/90" : "bg-transparent"} border-b border-[#CC0000]/30`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
        {/* Left: Logo */}
        <Link href="/" className="relative font-bebas text-4xl text-[#FF4500] drop-shadow-[0_0_5px_rgba(255,69,0,0.7)]">
          K3DNZ
          <span className="absolute bottom-0 left-0 w-full h-2 bg-[#CC0000] opacity-70 blur-sm animate-drip"></span>
        </Link>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("lore")} className="font-marker uppercase tracking-widest text-[#F0EDE8] text-lg hover:text-[#FFB800] transition-colors stencil-text">
            LORE
          </button>
          <button onClick={() => scrollToSection("the-k3dnz")} className="font-marker uppercase tracking-widest text-[#F0EDE8] text-lg hover:text-[#FFB800] transition-colors stencil-text">
            THE K3DNZ
          </button>
          <button onClick={() => scrollToSection("tasks")} className="font-marker uppercase tracking-widest text-[#F0EDE8] text-lg hover:text-[#FFB800] transition-colors stencil-text">
            TASKS
          </button>
          <button onClick={() => scrollToSection("tasks")} className="font-marker uppercase tracking-widest text-[#F0EDE8] text-lg hover:text-[#FFB800] transition-colors stencil-text">
            GET WL
          </button>
        </div>

        {/* Right: Connect Wallet Button (Desktop) */}
        <div className="hidden md:block">
          <button className="font-bebas text-xl border-2 border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-[#0A0A0A] transition px-6 py-2 cracked-border">
            CONNECT
          </button>
        </div>

        {/* Mobile: Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#F0EDE8] focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile: Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-[#0A0A0A]/95 z-40 flex flex-col items-center justify-center space-y-8"
          >
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-[#F0EDE8] focus:outline-none">
              <X size={32} />
            </button>
            <button onClick={() => scrollToSection("lore")} className="font-marker text-3xl uppercase tracking-widest text-[#F0EDE8] hover:text-[#FFB800] transition-colors stencil-text">
              LORE
            </button>
            <button onClick={() => scrollToSection("the-k3dnz")} className="font-marker text-3xl uppercase tracking-widest text-[#F0EDE8] hover:text-[#FFB800] transition-colors stencil-text">
              THE K3DNZ
            </button>
            <button onClick={() => scrollToSection("tasks")} className="font-marker text-3xl uppercase tracking-widest text-[#F0EDE8] hover:text-[#FFB800] transition-colors stencil-text">
              TASKS
            </button>
            <button onClick={() => scrollToSection("tasks")} className="font-marker text-3xl uppercase tracking-widest text-[#F0EDE8] hover:text-[#FFB800] transition-colors stencil-text">
              GET WL
            </button>
            <button className="font-bebas text-2xl border-2 border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-[#0A0A0A] transition px-8 py-3 mt-8 cracked-border" onClick={toggleMenu}>
              CONNECT
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating APE IN button (removed as per new design, not explicitly requested but implied by overall redesign) */}
    </nav>
  );
};

export default Navbar;