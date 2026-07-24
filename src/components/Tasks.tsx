"use client";

import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { CheckCircle, X, Repeat2, MessageSquareQuote, Users, Image, Link as LinkIcon } from "lucide-react";

const tasks = [
  {
    id: 1,
    name: "Follow @K3DNZ on X",
    points: 100,
    icon: <X size={24} />,
    action: "FOLLOW",
    link: "https://x.com/k3dnz?s=21",
  },
  {
    id: 2,
    name: "Retweet our pinned post",
    points: 150,
    icon: <Repeat2 size={24} />,
    action: "RETWEET",
    link: "#",
  },
  {
    id: 3,
    name: "Quote tweet with #K3DNZ",
    points: 200,
    icon: <MessageSquareQuote size={24} />,
    action: "QUOTE TWEET",
    link: "#",
  },
  {
    id: 4,
    name: "Tag 3 degens in our post",
    points: 250,
    icon: <Users size={24} />,
    action: "TAG NOW",
    link: "#",
  },
  {
    id: 5,
    name: "Share a K3DNZ meme",
    points: 300,
    icon: <Image size={24} />,
    action: "SHARE",
    link: "#",
  },
  {
    id: 6,
    name: "Join our Discord",
    points: 100,
    icon: <LinkIcon size={24} />,
    action: "JOIN",
    link: "#",
  },
];

const Tasks = () => {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [xHandle, setXHandle] = useState("");
  const [ethAddress, setEthAddress] = useState("");
  const [reason, setReason] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  // Ensure the "apply" section is visible when the tab is active
  const handleTabChange = (value: string) => {
    if (value === "tab2") {
      const element = document.getElementById("apply");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleTaskComplete = (id: number) => {
    setCompletedTasks((prev) =>
      prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id]
    );
  };

  const handleSubmit = async () => {
    const errors: string[] = [];
    if (!xHandle) errors.push("X (Twitter) Handle is required.");
    if (!ethAddress) errors.push("ETH Wallet Address is required.");
    if (!agreedToTerms) errors.push("You must agree to the terms.");

    if (errors.length > 0) {
      setFormErrors(errors);
      setSubmitted(false);
    } else {
      setFormErrors([]);
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
      const formData = new FormData();
      formData.append('twitter', xHandle);
      formData.append('wallet', ethAddress);
      formData.append('why', reason);
      formData.append('timestamp', new Date().toISOString());

      try {
        await fetch(scriptUrl!, {
          method: 'POST',
          mode: 'no-cors',
          body: formData
        });
        setSubmitted(true);
      } catch (error) {
        console.error('Submission error:', error);
        setSubmitted(true);
      }
    }
  };

  return (
    <section id="tasks" className="bg-[#111111] py-24 text-k3d-light">
      <div className="container mx-auto px-4 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-bebas-neue text-5xl text-white mb-4"
        >
          EARN YOUR SPOT
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-inter text-k3d-gray text-lg max-w-xl mx-auto"
        >
          Complete tasks to secure a whitelist spot. No promises. But maybe.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <Tabs.Root className="flex flex-col" defaultValue="tab1" onValueChange={handleTabChange}>
          <Tabs.List
            className="flex border-b border-k3d-concrete mb-8"
            aria-label="Whitelist application"
          >
            <Tabs.Trigger
              className="bg-k3d-charcoal px-8 py-3 text-k3d-light font-bebas-neue text-xl data-[state=active]:bg-k3d-orange data-[state=active]:text-black transition-colors rounded-t-lg"
              value="tab1"
            >
              TASKS
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-k3d-charcoal px-8 py-3 text-k3d-light font-bebas-neue text-xl data-[state=active]:bg-k3d-orange data-[state=active]:text-black transition-colors rounded-t-lg"
              value="tab2"
            >
              APPLY FOR WL
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content className="py-4" value="tab1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tasks.map((task) => {
                const isCompleted = completedTasks.includes(task.id);
                return (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-k3d-charcoal rounded-xl p-6 border border-k3d-concrete hover:border-k3d-fire/50 transition-colors flex flex-col justify-between"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-k3d-orange mr-4">{task.icon}</div>
                      <h3 className="font-bebas-neue text-xl text-white">
                        {task.name}
                      </h3>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="bg-k3d-orange/20 text-k3d-orange text-xs px-2 py-1 rounded font-mono">
                        {task.points} POINTS
                      </span>
                      <a
                        href={task.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleTaskComplete(task.id)}
                        className={`font-bebas-neue text-sm px-4 py-2 rounded-lg transition-colors ${
                          isCompleted
                            ? "bg-green-600 text-white"
                            : "border border-k3d-orange text-k3d-orange hover:bg-k3d-orange hover:text-black"
                        }`}
                      >
                        {isCompleted ? (
                          <span className="flex items-center">
                            <CheckCircle size={16} className="mr-2" /> DONE
                          </span>
                        ) : (
                          task.action
                        )}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Tabs.Content>

          <Tabs.Content className="py-4" value="tab2">
            <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
              <div className="text-6xl mb-6">💀</div>
              <h3 style={{fontFamily: 'var(--font-bebas)'}} className="text-4xl text-[#FF5C00] mb-4 tracking-widest">
                THINK YOU GOT WHAT IT TAKES?
              </h3>
              <p className="text-[#7A7A7A] mb-4 max-w-md">
                No promises. No roadmap. No chill. Just 10,000 beautifully broken degens.
              </p>
              <p className="text-[#FF5C00] text-sm mb-8 font-mono">
                Leave your brain at the door before applying.
              </p>
              <button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfHji1vFpxvvagYiADSGzpAXq1jYG9wRryoaiq4IjHkusjbCA/viewform?usp=publish-editor', '_blank')}
                className="bg-[#FF5C00] hover:bg-[#FF8C00] text-black font-bold px-12 py-4 text-2xl tracking-widest transition-colors cursor-pointer border-none"
                style={{fontFamily: 'var(--font-bebas)'}}
              >
                APE IN →
              </button>
              <p className="text-[#3A3A3A] text-xs mt-6 font-mono">
                WE PROBABLY WON'T READ IT. BUT MAYBE.
              </p>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  );
};

export default Tasks;