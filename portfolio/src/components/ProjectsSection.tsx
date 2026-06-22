"use client";

import { motion } from "framer-motion";

const projects = [
  {
    badge: "Lead Project", badgeClass: "bg-[#1A6B4A] text-white",
    category: "API Testing · Backend Validation", dates: "Apr 2026 – Present",
    title: "NyayaSetu AI",
    description: "FastAPI-based legal information platform for IPC-to-BNS section mapping. My role: entire quality engineering layer — validation frameworks, deterministic test suites, CI pipelines.",
    bullets: ["20+ deterministic validation scenarios — API consistency, relational integrity, duplicate & contradiction detection", "Reusable Python validation utilities with stable error tokens for precise failure diagnosis", "GitHub Actions CI pipeline with structure validation, Pytest execution, and JUnit reporting", "Zero flaky test behavior — same input → same output → every time"],
    stack: ["Python", "FastAPI", "Pytest", "GitHub Actions", "JUnit", "JSON", "Git"],
    github: "https://github.com/renu5422/ipc-bns-transition-platform",
    dark: true,
  },
  {
    badge: "Java SDET", badgeClass: "bg-[#EBF1FB] text-[#1A4FA0]",
    category: "Java · Selenium · TestNG", dates: "Dec 2025 – Apr 2026",
    title: "Java Selenium Automation Framework",
    description: "Production-structured Java automation framework built from scratch — covering the full SDET Java stack used in enterprise environments.",
    bullets: ["Page Object Model architecture with zero test-locator duplication", "Smoke and functional test coverage with stable assertion patterns", "Explicit synchronization handling to eliminate timing-based flakiness", "Maven dependency management with structured project layout"],
    stack: ["Java", "Selenium WebDriver", "TestNG", "Maven", "POM", "Git"],
    github: null,
    dark: false,
  },
  {
    badge: "Python E2E", badgeClass: "bg-[#E8F5EE] text-[#1A6B4A]",
    category: "Python · Playwright · Pytest", dates: "Sep 2025 – Present",
    title: "Playwright QA Automation Framework",
    description: "End-to-end automation framework for real-world web application testing — including live production challenges like bot detection.",
    bullets: ["POM architecture separating locator logic from test logic", "15+ E2E scenarios covering search, navigation, and result validation", "Diagnosed and resolved live bot-detection failures through HTTP-level analysis", "Reusable fixtures and modular design for parallel-ready execution"],
    stack: ["Python", "Playwright", "Pytest", "POM", "CSS/XPath", "Git"],
    github: "https://github.com/renu5422/qa-automation-journey",
    dark: false,
  },
  {
    badge: "QA Testing", badgeClass: "bg-[#FEF3E2] text-[#92590A]",
    category: "Firebase · Firestore · AI Testing", dates: "Mar 2025 – Sep 2025",
    title: "CourseHub — AI-Enhanced Platform Testing",
    description: "7-month functional testing engagement on a live AI-enhanced learning platform covering authentication, cloud database, and AI feature validation.",
    bullets: ["End-to-end functional testing across auth, enrollment, course management, and RBAC", "Firebase Authentication and Firestore data consistency validation", "AI content generation feature testing for output stability", "Data propagation edge case detection in eventually-consistent Firestore"],
    stack: ["Firebase", "Firestore", "Python", "Functional Testing", "RBAC"],
    github: "https://github.com/renu5422/CourseHub",
    dark: false,
  },
  {
    badge: "Backend Dev", badgeClass: "bg-[#F3F0FA] text-[#5B3FA0]",
    category: "Python · Flask · SQLite", dates: "Dec 2024 – Apr 2025",
    title: "BiblioManager — Python/Flask Backend",
    description: "Full-stack Flask application built from scratch — the foundation that gave me developer-level understanding of backends before testing them.",
    bullets: ["Full CRUD operations with clean route and data model separation", "SQLite relational database with structured data models", "Clean code architecture — routes, models, and business logic fully separated"],
    stack: ["Python", "Flask", "SQLite", "CRUD", "Git"],
    github: "https://github.com/renu5422/BiblioManager",
    dark: false,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0A1A12]">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-[#2D9566]" />
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#2D9566]">Projects</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-white">
            18 months of{" "}
            <strong className="font-semibold text-[#2D9566]">continuous building</strong>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-6 md:p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:border-[#1A6B4A] hover:bg-white/8 transition-all group"
            >
              {/* Gradient accent on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1A6B4A]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-[11px] font-mono tracking-[0.08em] uppercase text-[#2D9566]">{p.category}</span>
                    <span className="text-[11px] font-mono text-white/30">{p.dates}</span>
                  </div>
                  <h3 className="text-[20px] font-semibold text-white mb-2 leading-snug">{p.title}</h3>
                  <p className="text-[14px] text-white/50 leading-relaxed mb-4 max-w-xl">{p.description}</p>
                  <ul className="mb-4 space-y-1.5">
                    {p.bullets.map((b) => (
                      <li key={b} className="text-[13px] text-white/50 leading-relaxed flex gap-2">
                        <span className="text-[#2D9566] font-mono mt-[1px] flex-shrink-0">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((tag) => (
                      <span key={tag} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-white/15 bg-white/5 text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex md:flex-col items-start md:items-end gap-3 md:min-w-[130px]">
                  <span className={`text-[10px] font-mono px-3 py-1.5 rounded-full tracking-[0.08em] uppercase ${p.badgeClass}`}>{p.badge}</span>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="font-mono text-[11px] text-[#2D9566] flex items-center gap-1 hover:gap-2 transition-all">
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
