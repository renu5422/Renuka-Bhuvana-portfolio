"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

        <h2 className="text-3xl font-semibold mb-6">
          Let’s Connect
        </h2>

        <p className="text-gray-600 mb-8">
          I'm actively looking for QA Automation and AI-related opportunities.
          Feel free to reach out.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <motion.a
            href="mailto:renukabhuvanac05@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2 border rounded-lg hover:bg-black hover:text-white transition"
          >
            Email
          </motion.a>

          <motion.a
            href="https://github.com/renu5422"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2 border rounded-lg hover:bg-black hover:text-white transition"
          >
            GitHub
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/renuka-bhuvana"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2 border rounded-lg hover:bg-black hover:text-white transition"
          >
            LinkedIn
          </motion.a>

        </div>

      </motion.div>
    </section>
  );
}