"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    label: "Test Automation", color: "#1A6B4A",
    skills: [
      { name: "Playwright" }, { name: "Selenium WebDriver" },
      { name: "Pytest" }, { name: "TestNG" },
      { name: "Page Object Model" }, { name: "JUnit" },
    ],
  },
  {
    label: "API & Backend", color: "#2563EB",
    skills: [
      { name: "API Testing" }, { name: "Postman" },
      { name: "FastAPI" }, { name: "REST APIs" },
      { name: "Deterministic Testing" }, { name: "Backend Validation" },
    ],
  },
  {
    label: "Programming", color: "#7C3AED",
    skills: [
      { name: "Python" }, { name: "Java" },
      { name: "SQL" }, { name: "Streamlit" },
      { name: "LangGraph" }, { name: "scikit-learn" },
    ],
  },
  {
    label: "CI/CD & DevOps", color: "#D97706",
    skills: [
      { name: "GitHub Actions" }, { name: "Git" },
      { name: "Maven" }, { name: "CI/CD Pipelines" },
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
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#1A6B4A]">Skills Dashboard</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-gray-900">
            What I <strong className="font-semibold text-[#1A6B4A]">work with</strong>
          </h2>
        </motion.div>

        {/* Skill pills — grouped, evidence-backed (see Projects) */}
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
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.04 }}
                    viewport={{ once: true }}
                    className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-[13px] text-gray-700 font-medium hover:shadow-sm transition-shadow cursor-default"
                    style={{ borderLeftWidth: "3px", borderLeftColor: group.color }}
                  >
                    {skill.name}
                  </motion.span>
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
