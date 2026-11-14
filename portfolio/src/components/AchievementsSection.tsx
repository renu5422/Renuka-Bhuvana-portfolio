"use client";

import { motion } from "framer-motion";
import { Award, Cpu, CheckCircle2, Zap, Target, Database } from "lucide-react";

const achievements = [
  {
    icon: Award,
    metric: "260+",
    title: "Pytest Tests in CI (85% Coverage)",
    body: "NyayaSetu AI unit and API tests — mapping search, ML ranking, JWT auth, agent graph, grounding, and duplicate & contradiction detection — run on every push.",
    tag: "NyayaSetu AI · 2026"
  },
  {
    icon: Database,
    metric: "482",
    title: "Validated IPC→BNS Mappings",
    body: "A deterministic rules engine is the source of truth; the LangGraph agent leaves an audit trace on every answer.",
    tag: "NyayaSetu AI · 2026"
  },
  {
    icon: CheckCircle2,
    metric: "25",
    title: "Playwright E2E Tests in CI",
    body: "A separate CI job builds the Next.js frontend, starts the FastAPI backend and runs browser tests against the live stack, after flake8 and Pytest (70% coverage gate).",
    tag: "GitHub Actions · 2026"
  },
  {
    icon: Zap,
    metric: "5",
    title: "MCP Tools Exposed",
    body: "A custom MCP server exposes search, mapping lookup, contradiction detection, section summary and the legal agent as tools.",
    tag: "NyayaSetu AI · 2026"
  },
  {
    icon: Cpu,
    metric: "2",
    title: "Automation Frameworks Built from Scratch",
    body: "Java + Selenium + TestNG + Maven and Python + Playwright + Pytest, both on the Page Object Model.",
    tag: "Playwright · Selenium"
  },
  {
    icon: Target,
    metric: "15+",
    title: "End-to-End Scenarios Automated",
    body: "Playwright framework covering search, navigation and result validation, with explicit waits and resilient locators.",
    tag: "Playwright"
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 px-6 bg-[#F7F6F2]">
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
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#1A6B4A]">Achievements</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-gray-900">
            Key metrics & <strong className="font-semibold text-[#1A6B4A]">outcomes</strong>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#1A6B4A] hover:shadow-lg transition-all"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <div className="text-[28px] font-semibold text-[#1A6B4A]">{a.metric}</div>
                  <Icon size={20} color="#1A6B4A" strokeWidth={1.5} />
                </div>
                <h3 className="text-[14px] font-semibold text-gray-900 mb-2">{a.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{a.body}</p>
                <div className="inline-block">
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-[#E8F5EE] text-[#1A6B4A] border border-[#c0dece]">
                    {a.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
