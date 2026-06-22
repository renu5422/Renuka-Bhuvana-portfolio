"use client";

import { motion } from "framer-motion";

const goals = [
  { term: "Immediate", icon: "🎯", title: "Entry-level SDET / QA Automation Engineer", body: "Join a team that ships fast and needs automation that keeps up — contribute to test quality from day one using Playwright, Java/Selenium, and API testing." },
  { term: "6–12 Months", icon: "📈", title: "API & Performance Testing", body: "Deepen API testing expertise with Rest Assured and add performance testing exposure using Locust or k6 — moving toward full-stack quality engineering." },
  { term: "1–2 Years", icon: "🤖", title: "AI-Assisted Quality Engineering", body: "Build systems that use LLMs to generate test cases, detect regressions, and validate AI feature outputs — the intersection of automation and intelligence." },
];

export default function CareerGoalsSection() {
  return (
    <section id="goals" className="py-24 px-6 bg-[#0A1A12] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#1A6B4A] opacity-10 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-[#2D9566]" />
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#2D9566]">Career Goals</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-white">
            Where I&apos;m <strong className="font-semibold text-[#2D9566]">headed</strong>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {goals.map((g, i) => (
            <motion.div
              key={g.term}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-[#1A6B4A] transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{g.icon}</span>
                <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-[#1A6B4A]/30 text-[#2D9566] tracking-wide uppercase">{g.term}</span>
              </div>
              <h3 className="text-[14px] font-semibold text-white mb-2 leading-snug">{g.title}</h3>
              <p className="text-[13px] text-white/50 leading-relaxed">{g.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-10"
        >
          <h3 className="text-[clamp(18px,2.5vw,24px)] font-light text-white leading-snug mb-6">
            Looking for an entry-level SDET or QA Automation Engineer role where I can{" "}
            <strong className="font-semibold text-[#2D9566]">contribute to test quality from day one.</strong>
          </h3>
          <ul className="space-y-3 mb-8">
            {["Open to full-time roles in Bengaluru — on-site, hybrid, or remote", "Bring Playwright + Java/Selenium + API testing skills into a real codebase", "Available for freelance automation projects and short-term contracts", "Target companies: product-led teams, AI-first startups, quality-focused engineering orgs"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[14px] text-white/60 leading-relaxed">
                <span className="text-[#2D9566] font-mono mt-[3px] flex-shrink-0">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://mail.google.com/mail/?view=cm&to=renukabhuvanac05@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1A6B4A] text-white text-sm font-semibold hover:bg-[#2D9566] transition-colors"
          >
            Let&apos;s talk →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
