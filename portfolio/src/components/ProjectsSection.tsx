"use client";

import { motion } from "framer-motion";

const projects = [
  {
    badge: "Lead Project", badgeClass: "bg-[#1A6B4A] text-white",
    category: "AI · LangGraph · FastAPI · Next.js", dates: "Apr 2026 – Present",
    title: "NyayaSetu AI",
    description: "Full-stack AI legal intelligence platform (FastAPI + Next.js) with 482 validated IPC→BNS mappings. Built a LangGraph agent, a scikit-learn ranking model, and an MCP server on top of a deterministic rules engine kept as ground truth — 200+ tests, CI via GitHub Actions.",
    bullets: ["LangGraph agent: extract → retrieve → validate → compose, with a full audit trace on every answer", "scikit-learn TF-IDF ranking model (top-1 accuracy + MRR evaluation) and an MCP server exposing 5 tools", "482 validated IPC→BNS mappings behind a deterministic rules engine kept as ground truth — the LLM only composes", "200+ tests passing with GitHub Actions CI — zero flaky behavior, same input → same output"],
    stack: ["Python", "FastAPI", "LangGraph", "scikit-learn", "MCP", "Pytest", "GitHub Actions"],
    github: "https://github.com/renu5422/ipc-bns-transition-platform",
    dark: true,
  },
  {
    badge: "Full-Stack", badgeClass: "bg-[#E8F5EE] text-[#1A6B4A]",
    category: "Full-Stack · Next.js · Firebase", dates: "Mar 2025 – Sep 2025",
    title: "CourseHub — AI-Enhanced Learning Platform",
    description: "Full-stack AI learning platform (Next.js + Firebase + Firestore + Genkit) with course management, authentication, and AI-assisted tutoring — built and validated end to end, including real-time data consistency.",
    bullets: ["Course creation, enrollment, and role-based access (RBAC) on a Next.js + Firebase stack", "Genkit AI integration for tutoring and content generation features", "Firestore real-time data sync with eventual-consistency edge-case handling", "Firebase Authentication with end-to-end functional validation"],
    stack: ["Next.js", "Firebase", "Firestore", "Genkit", "RBAC"],
    github: "https://github.com/renu5422/CourseHub",
    dark: false,
  },
  {
    badge: "Backend Dev", badgeClass: "bg-[#F3F0FA] text-[#5B3FA0]",
    category: "Backend · Python · Databases", dates: "Dec 2024 – Apr 2025",
    title: "BiblioManager — Smart Bookstore System",
    description: "Full-stack bookstore built from scratch — browse, cart, checkout, orders, admin order-status, and email notifications, with a KNN-based book recommender and a rule-based support chatbot.",
    bullets: ["Full e-commerce flow: catalog, cart, checkout, and order management", "KNN book recommender (scikit-learn) trained on a ratings dataset", "SQLite relational schema with admin roles, order status, and email notifications"],
    stack: ["Python", "Streamlit", "SQLite", "scikit-learn", "Git"],
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
            Three production systems,{" "}
            <strong className="font-semibold text-[#2D9566]">built end to end</strong>
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
