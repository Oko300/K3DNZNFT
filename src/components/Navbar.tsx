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
    <nav className="sticky top-0 z-50 w-full bg-k3d-black/80 backdrop-blur-md border-b border-k3d-orange/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="font-bebas-neue text-2xl text-k3d-orange glitch-hover">
          K3DNZ
        </Link>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("story")} className="font-inter uppercase tracking-widest text-k3d-light hover:text-k3d-orange transition-colors">
            STORY
          </button>
          <button onClick={() => scrollToSection("gallery")} className="font-inter uppercase tracking-widest text-k3d-light hover:text-k3d-orange transition-colors">
            THE K3DNZ
          </button>
          <button onClick={() => scrollToSection("tasks")} className="font-inter uppercase tracking-widest text-k3d-light hover:text-k3d-orange transition-colors">
            TASKS
          </button>
          <button onClick={() => scrollToSection("apply")} className="font-inter uppercase tracking-widest text-k3d-light hover:text-k3d-orange transition-colors">
            WL APPLY
          </button>
        </div>

        {/* Right: Connect Wallet Button (Desktop) */}
        <div className="hidden md:block">
          <button className="font-bebas-neue border-2 border-k3d-orange text-k3d-orange hover:bg-k3d-orange hover:text-k3d-black transition px-6 py-2">
            CONNECT WALLET
          </button>
        </div>

        {/* Mobile: Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-k3d-light focus:outline-none">
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
            className="md:hidden fixed inset-0 bg-k3d-black/95 z-40 flex flex-col items-center justify-center space-y-8"
          >
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-k3d-light focus:outline-none">
              <X size={32} />
            </button>
            <button onClick={() => scrollToSection("story")} className="font-inter text-3xl uppercase tracking-widest text-k3d-light hover:text-k3d-orange transition-colors">
              STORY
            </button>
            <button onClick={() => scrollToSection("gallery")} className="font-inter text-3xl uppercase tracking-widest text-k3d-light hover:text-k3d-orange transition-colors">
              THE K3DNZ
            </button>
            <button onClick={() => scrollToSection("tasks")} className="font-inter text-3xl uppercase tracking-widest text-k3d-light hover:text-k3d-orange transition-colors">
              TASKS
            </button>
            <button onClick={() => scrollToSection("apply")} className="font-inter text-3xl uppercase tracking-widest text-k3d-light hover:text-k3d-orange transition-colors">
              WL APPLY
            </button>
            <button className="font-bebas-neue text-2xl border-2 border-k3d-orange text-k3d-orange hover:bg-k3d-orange hover:text-k3d-black transition px-8 py-3 mt-8" onClick={toggleMenu}>
              CONNECT WALLET
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating APE IN button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.a
            href="#apply"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 bg-k3d-orange text-black font-bebas-neue px-6 py-3 rounded-lg shadow-lg shadow-orange-500/20 z-50"
            onClick={() => scrollToSection("apply")}
          >
            APE IN →
          </motion.a>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;