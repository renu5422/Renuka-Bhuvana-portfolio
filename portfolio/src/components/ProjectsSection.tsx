"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          className="text-3xl font-semibold mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* QA AUTOMATION */}
          <motion.div
            className="p-6 border rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold mb-2">
              QA Automation Framework
            </h3>

            <p className="text-gray-600 mb-4">
              Built a scalable Playwright automation framework for reliable testing workflows.
            </p>

            <ul className="text-sm text-gray-500 mb-4 list-disc pl-5 space-y-1">
              <li>Implemented Page Object Model (POM)</li>
              <li>Developed automation scripts using Python and Pytest</li>
              <li>Designed reusable utilities and fixtures</li>
            </ul>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Python, Playwright, Pytest
            </p>

            <a
              href="https://github.com/renu5422/qa-automation-journey"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border rounded-lg text-sm hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>
          </motion.div>

          {/* COURSEHUB */}
          <motion.div
            className="p-6 border rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold mb-2">
              CourseHub (E-Learning Platform)
            </h3>

            <p className="text-gray-600 mb-4">
              Developed a full stack platform for managing courses and user interactions.
            </p>

            <ul className="text-sm text-gray-500 mb-4 list-disc pl-5 space-y-1">
              <li>Designed backend logic using Java</li>
              <li>Managed user and course data</li>
              <li>Focused on scalable structure</li>
            </ul>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Java, Web, Database
            </p>

            <a
              href="https://github.com/renu5422/CourseHub"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border rounded-lg text-sm hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>
          </motion.div>

          {/* BIBLIOMANAGER */}
          <motion.div
            className="p-6 border rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-2xl font-semibold mb-2">
              BiblioManager (Library Management Web App)
            </h3>

            <p className="text-gray-600 mb-4">
              Developed a modular Flask-based web application for managing library workflows.
            </p>

            <ul className="text-sm text-gray-500 mb-4 list-disc pl-5 space-y-1">
              <li>Built backend using Flask</li>
              <li>Implemented CRUD operations</li>
              <li>Handled borrowing/return workflows</li>
              <li>Used Jinja2 templates for UI</li>
            </ul>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Python, Flask, HTML, CSS, Jinja2
            </p>

            <a
              href="https://github.com/renu5422/BiblioManager"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border rounded-lg text-sm hover:bg-black hover:text-white transition"
            >
              GitHub
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}