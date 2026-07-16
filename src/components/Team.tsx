"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const teamMembers = [
  {
    name: "K3DN #0001",
    role: "FOUNDER / DEGEN",
    image: "https://via.placeholder.com/150/FF5C00/000000?text=K3DN+0001",
    social: { twitter: "#", opensea: "#" },
  },
  {
    name: "K3DN #0002",
    role: "ARTIST / RUGGER",
    image: "https://via.placeholder.com/150/FF8C00/000000?text=K3DN+0002",
    social: { twitter: "#", opensea: "#" },
  },
  {
    name: "K3DN #0003",
    role: "DEV / GLITCH",
    image: "https://via.placeholder.com/150/FFAA00/000000?text=K3DN+0003",
    social: { twitter: "#", opensea: "#" },
  },
  {
    name: "K3DN #0004",
    role: "COMMUNITY / CHAOS",
    image: "https://via.placeholder.com/150/CC2200/000000?text=K3DN+0004",
    social: { twitter: "#", opensea: "#" },
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#111111] py-24 text-k3d-light">
      <div className="container mx-auto px-4 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bebas-neue text-6xl text-white mb-4"
        >
          THE DEGENS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-inter text-k3d-gray text-lg"
        >
          THE BROKEN MINDS BEHIND THE CHAOS.
        </motion.p>
      </div>

      <motion.div
        ref={ref}
        className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-k3d-charcoal border border-k3d-concrete rounded-lg p-6 text-center hover:border-k3d-orange transition-colors"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-k3d-orange"
            />
            <h3 className="font-bebas-neue text-2xl text-white mb-1">
              {member.name}
            </h3>
            <p className="font-inter text-k3d-fire text-sm uppercase tracking-wider mb-4">
              {member.role}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-k3d-gray hover:text-k3d-orange transition-colors"
              >
                {/* Placeholder for Twitter Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2 1.1 1.2 3 1.9 5 1.9 2 0 3.8-.7 5.1-1.8 1.1.1 2.2-.3 3.2-.9-.3 1.2-.9 2.1-1.8 2.7 1-.1 1.9-.4 2.8-.8-.6-.2-1.1-.5-1.6-.8z" />
                </svg>
              </a>
              <a
                href={member.social.opensea}
                target="_blank"
                rel="noopener noreferrer"
                className="text-k3d-gray hover:text-k3d-orange transition-colors"
              >
                {/* Placeholder for Opensea Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-gem"
                >
                  <path d="M6 3h12l4 6-10 13L2 9l4-6Z" />
                  <path d="M12 20v-9" />
                  <path d="m2.7 9 9.3 11 9.3-11" />
                  <path d="M4 9h16" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;