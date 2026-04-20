"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    "Java",
    "Python",
    "Spring Boot",
    "Flask",
    "Playwright",
    "Pytest",
    "API Testing",
    "CI/CD",
    "SQL / Database",
    "AI-assisted Testing"
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          className="text-3xl font-semibold mb-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="p-6 border rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-medium">{skill}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}