"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center bg-gray-50">
      <motion.div
        className="max-w-3xl space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-black">Renuka Bhuvana</span>
        </h1>

        <h2 className="text-xl text-gray-700">
          Java Full Stack Developer | Python | SDET (Playwright + Pytest)
        </h2>

        <p className="text-gray-500">
          Building scalable applications and automation frameworks while transitioning towards AI Engineering.
        </p>

        <a
          href="#projects"
          className="inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
}