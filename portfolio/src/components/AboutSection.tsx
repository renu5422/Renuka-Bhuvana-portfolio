"use client";

import { motion } from "framer-motion";
import { Code, GitBranch, Settings, Zap, Database, CheckCircle } from "lucide-react";

const strengths = [
  {
    icon: Code,
    title: "Framework Architect",
    body: "Builds POM-based automation frameworks from scratch — maintainable, modular, and team-ready. Production-grade Java and Python implementations.",
    tags: ["POM", "Playwright", "Selenium"],
    color: "#1A6B4A"
  },
  {
    icon: CheckCircle,
    title: "Zero Flaky Tolerance",
    body: "Designed NyayaSetu AI's entire test suite for deterministic behavior. Same input → same output → every time. No timing-based failures.",
    tags: ["Deterministic", "Pytest", "Stability"],
    color: "#1A6B4A"
  },
  {
    icon: GitBranch,
    title: "CI/CD Automation",
    body: "GitHub Actions pipelines with Pytest execution, JUnit reporting, and automated structure validation on every push. 60% cycle time reduction.",
    tags: ["GitHub Actions", "JUnit", "CI/CD"],
    color: "#1A6B4A"
  },
  {
    icon: Zap,
    title: "Developer-Turned-Tester",
    body: "Built Flask, FastAPI, and Firebase backends before testing them. Tests from the inside out. Understands backend implications.",
    tags: ["Flask", "FastAPI", "Firebase"],
    color: "#1A6B4A"
  },
  {
    icon: Database,
    title: "Cross-Stack Automation",
    body: "Python + Playwright for modern web E2E. Java + Selenium + TestNG for enterprise. Both frameworks production-structured.",
    tags: ["Python", "Java", "TestNG"],
    color: "#1A6B4A"
  },
  {
    icon: Settings,
    title: "Data Integrity Expert",
    body: "Implemented duplicate detection, contradiction detection, missing record validation validators. API-layer data consistency.",
    tags: ["API Testing", "Validation", "Integrity"],
    color: "#1A6B4A"
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-[#F7F6F2]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-[#1A6B4A]" />
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#1A6B4A]">About me</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-gray-900 mb-6">
            Over the past <strong className="font-semibold text-[#1A6B4A]">18 months</strong> I've moved<br />
            from building apps to automating them.
          </h2>
          <p className="text-[16px] leading-[1.85] text-gray-500 font-light max-w-2xl">
            BiblioManager gave me hands-on understanding of how Flask backends and databases work. I applied that to testing CourseHub — a live AI platform. 
            Most recently with NyayaSetu AI, I moved into designing quality engineering systems — validation frameworks, deterministic test suites, 
            relational integrity validators, and CI pipelines.
          </p>
        </motion.div>

        {/* Why hire me */}
        <div className="flex items-center gap-3 mb-6">
          <span className="block w-5 h-px bg-[#1A6B4A]" />
          <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#1A6B4A]">Why hire me</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {strengths.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#1A6B4A] hover:shadow-lg transition-all group"
              >
                <div className="mb-4">
                  <Icon size={28} style={{ color: s.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-[14px] font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{s.body}</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span key={tag} className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-[#E8F5EE] text-[#1A6B4A] border border-[#c0dece]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
