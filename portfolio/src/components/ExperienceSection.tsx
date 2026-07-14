"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    period: "Apr 2026 – Present", role: "SDET — API Testing & Backend Validation",
    org: "NyayaSetu AI", type: "Project", badge: "bg-[#1A6B4A] text-white", current: true,
    bullets: [
      "Designed and validated backend API workflows for a FastAPI-based legal information platform",
      "Implemented 20+ deterministic validation scenarios covering API response consistency and relational mapping integrity",
      "Engineered GitHub Actions CI pipeline with Pytest execution and JUnit report generation",
      "Built reusable Python validation utilities with stable error tokens for precise failure diagnosis",
      "Achieved zero flaky test behavior across the full test suite",
    ],
    stack: ["Python", "FastAPI", "Pytest", "GitHub Actions", "JUnit"],
  },
  {
    period: "Dec 2025 – Apr 2026", role: "QA Automation Engineer — Java Selenium Framework",
    org: "Independent Project", type: "Project", badge: "bg-[#EBF1FB] text-[#1A4FA0]", current: false,
    bullets: [
      "Built a production-structured Java automation framework from scratch using Selenium WebDriver, TestNG, and Maven",
      "Implemented Page Object Model architecture with zero test-locator duplication",
      "Automated smoke and functional test scenarios with stable assertion patterns",
      "Eliminated timing-based flakiness through explicit synchronization handling",
    ],
    stack: ["Java", "Selenium WebDriver", "TestNG", "Maven", "POM"],
  },
  {
    period: "Sep 2025 – Present", role: "QA Automation Engineer — Playwright Framework",
    org: "Independent Project", type: "Project", badge: "bg-[#E8F5EE] text-[#1A6B4A]", current: true,
    bullets: [
      "Architected a Playwright + Pytest end-to-end automation framework with POM architecture",
      "Automated 15+ real-world E2E scenarios covering search, navigation, and result validation",
      "Diagnosed and resolved live bot-detection failures through HTTP-level analysis",
      "Designed reusable fixtures and modular test structure for parallel-ready execution",
    ],
    stack: ["Python", "Playwright", "Pytest", "POM", "Git"],
  },
  {
    period: "Mar 2025 – Sep 2025", role: "QA Engineer — Functional & Firebase Testing",
    org: "CourseHub", type: "Project", badge: "bg-[#FEF3E2] text-[#92590A]", current: false,
    bullets: [
      "Executed functional testing across authentication, enrollment, course management, and RBAC workflows",
      "Validated Firebase Authentication flows and Firestore data consistency across concurrent users",
      "Tested AI-assisted content generation features for output stability and error handling",
      "Caught data propagation edge cases in eventually-consistent Firestore",
    ],
    stack: ["Firebase", "Firestore", "Python", "Functional Testing"],
  },
  {
    period: "Dec 2024 – Apr 2025", role: "Python Developer — Backend Engineering",
    org: "BiblioManager", type: "Project", badge: "bg-[#F3F0FA] text-[#5B3FA0]", current: false,
    bullets: [
      "Built a Streamlit-based bookstore system from scratch with full CRUD operations",
      "Structured application with clean route and data model separation",
      "Implemented SQLite relational database with structured data models",
    ],
    stack: ["Python", "Streamlit", "SQLite", "scikit-learn"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#F7F6F2]">
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
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#1A6B4A]">Experience</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-gray-900">
            18 months of <strong className="font-semibold text-[#1A6B4A]">project work</strong>
          </h2>
        </motion.div>

        <div className="relative pl-6">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200" />
          {experiences.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="relative mb-8 last:mb-0"
            >
              <div
                className={`absolute -left-6 top-2 w-3 h-3 rounded-full border-2 border-white ${e.current ? "bg-[#1A6B4A]" : "bg-gray-300"}`}
                style={{ boxShadow: e.current ? "0 0 0 2px #1A6B4A" : "0 0 0 2px #D1D5DB" }}
              />
              <div className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#1A6B4A] hover:shadow-lg transition-all group">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="font-mono text-[11px] text-gray-400 tracking-wide mb-1">{e.period}</div>
                    <h3 className="text-[16px] font-semibold text-gray-900 leading-snug">{e.role}</h3>
                    <div className="text-[13px] text-gray-500 mt-0.5">{e.org}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full tracking-[0.08em] uppercase ${e.badge}`}>{e.type}</span>
                    {e.current && <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#E8F5EE] text-[#1A6B4A] tracking-[0.08em] uppercase">Active</span>}
                  </div>
                </div>
                <ul className="mb-4 space-y-1.5">
                  {e.bullets.map((b) => (
                    <li key={b} className="text-[13px] text-gray-500 leading-relaxed flex gap-2">
                      <span className="text-[#1A6B4A] font-mono mt-[1px] flex-shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {e.stack.map((tag) => (
                    <span key={tag} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-gray-200 bg-[#F7F6F2] text-gray-500">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
