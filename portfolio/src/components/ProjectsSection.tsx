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
            className="p-6 border rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              QA Automation Framework
            </h3>

            <p className="text-gray-600 mb-3">
              Built a Playwright automation framework using Python and Pytest for scalable test execution.
            </p>

            <ul className="text-sm text-gray-500 mb-3 list-disc pl-5 space-y-1">
              <li>Implemented Page Object Model (POM)</li>
              <li>Reusable utilities and fixtures</li>
              <li>Automated UI test flows</li>
            </ul>

            <p className="text-xs text-gray-500 mb-3 italic">
              Built to simulate real-world testing workflows used in production environments.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Python, Playwright, Pytest
            </p>

            <a
              href="https://github.com/renu5422/qa-automation-journey"
              target="_blank"
              className="text-sm underline"
            >
              GitHub
            </a>
          </motion.div>

          {/* COURSEHUB */}
          <motion.div
            className="p-6 border rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              CourseHub (E-Learning Platform)
            </h3>

            <p className="text-gray-600 mb-3">
              Developed a full stack system for managing courses and user interactions.
            </p>

            <ul className="text-sm text-gray-500 mb-3 list-disc pl-5 space-y-1">
              <li>Backend logic using Java</li>
              <li>Data handling and structure</li>
              <li>Scalable architecture design</li>
            </ul>

            <p className="text-xs text-gray-500 mb-3 italic">
              Designed with real-world system architecture concepts.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Java, Web, Database
            </p>

            <a
              href="https://github.com/renu5422/CourseHub"
              target="_blank"
              className="text-sm underline"
            >
              GitHub
            </a>
          </motion.div>

          {/* BIBLIOMANAGER */}
          <motion.div
            className="p-6 border rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition text-left"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              BiblioManager (Flask App)
            </h3>

            <p className="text-gray-600 mb-3">
              Built a modular Flask application to manage books, users, and borrowing workflows.
            </p>

            <ul className="text-sm text-gray-500 mb-3 list-disc pl-5 space-y-1">
              <li>Flask backend with modular structure</li>
              <li>CRUD operations for library system</li>
              <li>Jinja2 templates for UI</li>
            </ul>

            <p className="text-xs text-gray-500 mb-3 italic">
              Demonstrates backend design using Python web frameworks.
            </p>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Python, Flask, HTML, CSS
            </p>

            <a
              href="https://github.com/renu5422/BiblioManager"
              target="_blank"
              className="text-sm underline"
            >
              GitHub
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}