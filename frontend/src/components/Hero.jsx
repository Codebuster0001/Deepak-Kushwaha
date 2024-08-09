import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center h-screen bg-black text-white mt-8"
    >
      <motion.div
        className="text-center z-7"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          I am a passionate developer crafting modern web experiences.
        </p>
        <motion.a
          href="#projects"
          className="px-6 py-3 bg-white text-black font-semibold rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View My Work
        </motion.a>
      </motion.div>

      {/* Optional: Background animation */}
      <motion.div
        className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      ></motion.div>
    </section>
  );
}
