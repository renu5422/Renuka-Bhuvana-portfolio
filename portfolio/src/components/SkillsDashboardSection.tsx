"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Test Automation", color: "#1A6B4A",
    skills: [
      { name: "Playwright", level: 85 }, { name: "Selenium WebDriver", level: 80 },
      { name: "Pytest", level: 85 }, { name: "TestNG", level: 75 },
      { name: "Page Object Model", level: 85 }, { name: "JUnit", level: 65 },
    ],
  },
  {
    label: "API & Backend", color: "#2563EB",
    skills: [
      { name: "API Testing", level: 80 }, { name: "Postman", level: 78 },
      { name: "FastAPI", level: 72 }, { name: "REST APIs", level: 80 },
      { name: "Deterministic Testing", level: 82 }, { name: "Backend Validation", level: 78 },
    ],
  },
  {
    label: "Programming", color: "#7C3AED",
    skills: [
      { name: "Python", level: 85 }, { name: "Java", level: 75 },
      { name: "SQL", level: 70 }, { name: "Flask", level: 68 },
    ],
  },
  {
    label: "CI/CD & DevOps", color: "#D97706",
    skills: [
      { name: "GitHub Actions", level: 78 }, { name: "Git", level: 85 },
      { name: "Maven", level: 72 }, { name: "CI/CD Pipelines", level: 75 },
    ],
  },
];

const tools = [
  { name: "VS Code", icon: "💻" }, { name: "Postman", icon: "🔌" },
  { name: "GitHub", icon: "🐙" }, { name: "Maven", icon: "📦" },
  { name: "Firebase", icon: "🔥" }, { name: "MySQL", icon: "🗄️" },
  { name: "SQLite", icon: "🗃️" }, { name: "JIRA", icon: "📋" },
  { name: "FastAPI", icon: "⚡" }, { name: "Pytest", icon: "🧪" },
  { name: "GitHub Actions", icon: "⚙️" }, { name: "TestNG", icon: "✅" },
];

export default function SkillsDashboardSection() {
  return (
    <section id="skills-dashboard" className="py-24 px-6 bg-white">
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
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#1A6B4A]">Skills Dashboard</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-gray-900">
            Proficiency <strong className="font-semibold text-[#1A6B4A]">breakdown</strong>
          </h2>
        </motion.div>

        {/* Skill bars */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: gi * 0.08 }}
              viewport={{ once: true }}
              className="bg-[#F7F6F2] border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-[11px] font-mono tracking-[0.1em] uppercase mb-5 pb-3 border-b border-gray-200" style={{ color: group.color }}>
                {group.label}
              </div>
              <div className="flex flex-col gap-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[13px] text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-[11px] font-mono text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: gi * 0.08 + si * 0.05 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ background: group.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-[11px] font-mono tracking-[0.1em] uppercase text-gray-400 mb-5">Tools & Technologies</div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                viewport={{ once: true }}
                className="bg-[#F7F6F2] border border-gray-100 rounded-2xl p-3 flex flex-col items-center gap-2 hover:border-[#1A6B4A] hover:shadow-md transition-all cursor-default"
              >
                <span className="text-xl">{tool.icon}</span>
                <span className="text-[11px] font-mono text-gray-500 text-center leading-tight">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
