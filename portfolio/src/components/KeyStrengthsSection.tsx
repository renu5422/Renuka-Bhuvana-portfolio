"use client";

import { motion } from "framer-motion";
import { Code, Shield, Wrench, Brain, Layers, Zap } from "lucide-react";

const strengths = [
  {
    icon: Code,
    title: "Framework Architect",
    body: "Builds POM-based automation frameworks from scratch — maintainable, modular, and team-ready.",
    tags: ["POM", "Playwright", "Selenium"]
  },
  {
    icon: Shield,
    title: "Zero Flaky Tolerance",
    body: "Designed NyayaSetu AI's entire test suite for deterministic behavior — same input, same output, every time.",
    tags: ["Deterministic", "Pytest", "Stability"]
  },
  {
    icon: Wrench,
    title: "CI/CD Practitioner",
    body: "GitHub Actions pipelines with Pytest execution, JUnit reporting, and automated structure validation on every push.",
    tags: ["GitHub Actions", "JUnit", "CI/CD"]
  },
  {
    icon: Brain,
    title: "Developer-Turned-Tester",
    body: "Built FastAPI, Streamlit, and Firebase backends before testing them — tests from the inside out.",
    tags: ["FastAPI", "Streamlit", "Firebase"]
  },
  {
    icon: Layers,
    title: "Cross-Stack Automation",
    body: "Python + Playwright for modern web. Java + Selenium + TestNG for enterprise environments.",
    tags: ["Python", "Java", "TestNG"]
  },
  {
    icon: Zap,
    title: "Data Integrity Expert",
    body: "Implemented duplicate detection, contradiction detection, and missing mapping validation in production.",
    tags: ["API Testing", "Validation", "Integrity"]
  },
];

export default function KeyStrengthsSection() {
  return (
    <section id="strengths" className="py-24 px-6 bg-white">
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
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#1A6B4A]">Key Strengths</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-gray-900">
            What makes me <strong className="font-semibold text-[#1A6B4A]">different</strong>
          </h2>
        </motion.div>

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
                className="bg-[#F7F6F2] border border-gray-100 rounded-2xl p-6 hover:border-[#1A6B4A] hover:shadow-lg transition-all group"
              >
                <div className="mb-4">
                  <Icon size={28} color="#1A6B4A" strokeWidth={1.5} />
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
