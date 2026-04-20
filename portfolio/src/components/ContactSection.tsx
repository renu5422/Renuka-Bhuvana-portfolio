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

        <p className="text-gray-600 mb-4">
          I'm actively looking for QA Automation, Java Full Stack, and AI-related opportunities.
        </p>

        <p className="text-sm text-gray-500 mb-6 italic">
          Available for freelance projects in automation testing and web development.
        </p>

        <div className="flex justify-center gap-6">

          <motion.a
            href="mailto:renukabhuvanac05@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="underline"
          >
            Email
          </motion.a>

          <motion.a
            href="https://github.com/renu5422"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="underline"
          >
            GitHub
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/renuka-bhuvana"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="underline"
          >
            LinkedIn
          </motion.a>

        </div>

      </motion.div>
    </section>
  );
}