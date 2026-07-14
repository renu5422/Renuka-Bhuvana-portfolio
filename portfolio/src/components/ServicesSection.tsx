"use client";

import { motion } from "framer-motion";

const services = [
  { icon: "🧪", title: "UI Test Automation", body: "Playwright + Python or Selenium + Java frameworks with POM architecture, reusable fixtures, and CI integration." },
  { icon: "🔌", title: "API Testing & Validation", body: "End-to-end API test suites using Pytest + Requests or Postman — covering CRUD, auth, schema validation, and negative cases." },
  { icon: "⚙️", title: "CI/CD Pipeline Setup", body: "GitHub Actions workflows for automated test execution, JUnit reporting, and structure validation on every push." },
  { icon: "🔍", title: "Backend Quality Engineering", body: "Deterministic validation frameworks, relational integrity checks, and reusable debugging utilities for backend systems." },
  { icon: "🐛", title: "Debugging & Root Cause Analysis", body: "Failure triage, root-cause identification, and regression verification — practiced through real production debugging." },
  { icon: "📋", title: "Test Strategy & Planning", body: "Test case design, coverage mapping, and defect tracking aligned to SDLC and Agile workflows." },
];

export default function ServicesSection() {
  return (
    <>
      <section id="services" className="py-24 px-6 bg-[#F7F6F2]">
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
              <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#1A6B4A]">Services</span>
            </div>
            <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-gray-900">
              What I can do for <strong className="font-semibold text-[#1A6B4A]">your team</strong>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#1A6B4A] hover:shadow-lg transition-all group"
              >
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className="text-[14px] font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
