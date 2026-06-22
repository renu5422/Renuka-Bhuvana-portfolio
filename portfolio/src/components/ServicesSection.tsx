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

const goals = [
  "Open to full-time roles in Bengaluru — on-site, hybrid, or remote",
  "Bring Playwright + Java/Selenium + API testing skills into a real codebase",
  "Available for freelance automation projects and short-term contracts",
  "Target companies: product-led teams, AI-first startups, quality-focused engineering orgs",
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

      {/* Career Goals — dark section */}
      <section className="py-24 px-6 bg-[#0A1A12] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#1A6B4A] opacity-10 blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="block w-5 h-px bg-[#2D9566]" />
              <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#2D9566]">Career Goals</span>
            </div>
            <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-white">
              Where I&apos;m <strong className="font-semibold text-[#2D9566]">headed</strong>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12"
          >
            <h3 className="text-[clamp(18px,3vw,26px)] font-light text-white leading-snug mb-8">
              Looking for an entry-level SDET or QA Automation Engineer role where I can{" "}
              <strong className="font-semibold text-[#2D9566]">contribute to test quality from day one.</strong>
            </h3>
            <ul className="space-y-4 mb-8">
              {goals.map((g) => (
                <li key={g} className="flex items-start gap-3 text-[14px] text-white/60 leading-relaxed">
                  <span className="text-[#2D9566] font-mono mt-[2px] flex-shrink-0">◆</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://mail.google.com/mail/?view=cm&to=renukabhuvanac05@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1A6B4A] text-white text-sm font-medium hover:bg-[#2D9566] transition-colors"
            >
              Let&apos;s talk →
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
