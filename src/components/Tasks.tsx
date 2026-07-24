"use client";

import { motion } from "framer-motion";
import * as Tabs from "@radix-ui/react-tabs";
import { useState } from "react";
import { CheckCircle, X, Repeat2, MessageSquareQuote, Users } from "lucide-react";

const tasks = [
  {
    id: 1,
    name: "Follow @K3DNZ on X",
    icon: <X size={24} />,
    action: "FOLLOW",
    link: "https://x.com/k3dnz?s=21",
  },
  {
    id: 2,
    name: "Retweet our pinned post",
    icon: <Repeat2 size={24} />,
    action: "RETWEET",
    link: "https://x.com/k3dnz?s=21",
  },
  {
    id: 3,
    name: "Quote tweet with #K3DNZ",
    icon: <MessageSquareQuote size={24} />,
    action: "QUOTE TWEET",
    link: "https://x.com/k3dnz?s=21",
  },
  {
    id: 4,
    name: "Tag 3 degens in our post",
    icon: <Users size={24} />,
    action: "TAG NOW",
    link: "https://x.com/k3dnz?s=21",
  },
];

const Tasks = () => {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [showConfirmationInput, setShowConfirmationInput] = useState(false);
  const [confirmationInput, setConfirmationInput] = useState("");

  const handleTabChange = (value: string) => {
    // No specific scroll logic needed here for "apply" tab as it's now a button
  };

  const handleTaskAction = (id: number, link: string) => {
    window.open(link, '_blank');
    if (id === 1) { // For "Follow @K3DNZ on X"
      setShowConfirmationInput(true);
    } else {
      setCompletedTasks((prev) =>
        prev.includes(id) ? prev.filter((taskId) => taskId !== id) : [...prev, id]
      );
    }
  };

  const handleConfirmationSubmit = () => {
    // For this task, we'll just mark it as complete after confirmation input
    setCompletedTasks((prev) => [...prev, 1]);
    setShowConfirmationInput(false);
    setConfirmationInput("");
  };

  return (
    <section id="tasks" className="bg-[#111111] py-24 text-k3d-light">
      <div id="tasks-content" className="container mx-auto px-4 text-center mb-16">
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
                    <div className="flex justify-end items-center">
                      <a
                        href={task.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleTaskAction(task.id, task.link)}
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
            {showConfirmationInput && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 bg-k3d-charcoal rounded-xl p-6 border border-k3d-concrete max-w-md mx-auto"
              >
                <h3 className="font-bebas-neue text-xl text-white mb-4">Confirm X Handle</h3>
                <input
                  type="text"
                  placeholder="Enter your X handle to confirm"
                  value={confirmationInput}
                  onChange={(e) => setConfirmationInput(e.target.value)}
                  className="bg-k3d-black border border-k3d-concrete focus:border-k3d-orange text-white rounded-lg px-4 py-3 w-full outline-none mb-4"
                />
                <button
                  onClick={handleConfirmationSubmit}
                  className="w-full bg-k3d-orange hover:bg-k3d-fire text-black font-bebas-neue text-xl py-3 rounded-lg transition-colors"
                >
                  CONFIRM
                </button>
              </motion.div>
            )}
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