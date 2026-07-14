"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Test Automation",
    skills: [
      { name: "Playwright", tier: "primary" }, { name: "Selenium WebDriver", tier: "primary" },
      { name: "Pytest", tier: "primary" }, { name: "TestNG", tier: "primary" },
      { name: "Page Object Model", tier: "secondary" }, { name: "Smoke Testing", tier: "secondary" },
      { name: "Regression Testing", tier: "secondary" }, { name: "Functional Testing", tier: "secondary" },
      { name: "JUnit", tier: "tertiary" }, { name: "BDD", tier: "tertiary" },
    ],
  },
  {
    label: "API & Backend",
    skills: [
      { name: "API Testing", tier: "primary" }, { name: "Postman", tier: "primary" },
      { name: "REST APIs", tier: "primary" }, { name: "FastAPI", tier: "secondary" },
      { name: "Backend Validation", tier: "secondary" }, { name: "Deterministic Testing", tier: "secondary" },
      { name: "JSON", tier: "secondary" }, { name: "Rest Assured", tier: "tertiary" },
    ],
  },
  {
    label: "Programming",
    skills: [
      { name: "Python", tier: "primary" }, { name: "Java", tier: "primary" },
      { name: "SQL", tier: "secondary" }, { name: "Streamlit", tier: "secondary" },
      { name: "JavaScript", tier: "tertiary" },
    ],
  },
  {
    label: "CI/CD & DevOps",
    skills: [
      { name: "GitHub Actions", tier: "primary" }, { name: "Git", tier: "primary" },
      { name: "Maven", tier: "secondary" }, { name: "CI/CD", tier: "secondary" },
      { name: "Jenkins", tier: "tertiary" }, { name: "Docker", tier: "tertiary" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MySQL", tier: "secondary" }, { name: "SQLite", tier: "secondary" },
      { name: "Firebase Firestore", tier: "secondary" }, { name: "JIRA", tier: "tertiary" },
    ],
  },
  {
    label: "Process",
    skills: [
      { name: "SDLC", tier: "secondary" }, { name: "Agile", tier: "secondary" },
      { name: "Debugging", tier: "secondary" }, { name: "Root Cause Analysis", tier: "secondary" },
      { name: "Test Planning", tier: "tertiary" }, { name: "Scrum", tier: "tertiary" },
    ],
  },
];

const tierClass: Record<string, string> = {
  primary: "bg-[#1A6B4A] text-white border-transparent",
  secondary: "bg-[#E8F5EE] text-[#1A6B4A] border-[#c0dece]",
  tertiary: "bg-white text-gray-500 border-gray-200",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-[#1A6B4A]" />
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#1A6B4A]">Skills</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-gray-900">
            Full <strong className="font-semibold text-[#1A6B4A]">tech stack</strong>
          </h2>
          <p className="text-sm text-gray-400 font-mono mt-3 flex items-center gap-4">
            <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded-sm bg-[#1A6B4A]" />Primary</span>
            <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded-sm bg-[#E8F5EE] border border-[#c0dece]" />Secondary</span>
            <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-3 rounded-sm bg-white border border-gray-200" />Familiar</span>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: gi * 0.06 }}
              viewport={{ once: true }}
              className="bg-[#F7F6F2] border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="text-[11px] font-mono tracking-[0.1em] uppercase text-[#1A6B4A] mb-3 pb-3 border-b border-gray-200">
                {group.label}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill.name} className={`text-[11px] font-mono px-2.5 py-1 rounded-full border tracking-wide ${tierClass[skill.tier]}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
