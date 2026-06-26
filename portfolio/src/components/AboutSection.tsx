"use client";

import { motion } from "framer-motion";
import { Code, GitBranch, Settings, Zap, Database, CheckCircle } from "lucide-react";

const strengths = [
  {
    icon: Code,
    title: "Full-Stack Builder",
    body: "Builds complete systems end to end — FastAPI and Streamlit backends, Next.js frontends, SQLite and Firestore data layers. Three production projects shipped from requirements to deployment.",
    tags: ["FastAPI", "Next.js", "Python"],
    color: "#1A6B4A"
  },
  {
    icon: Database,
    title: "Backend & Data Modeling",
    body: "Designs relational schemas, rule engines, and APIs that hold up under real workloads. SQLite for transactional integrity, Firestore for real-time sync.",
    tags: ["SQLite", "REST APIs", "Schema Design"],
    color: "#1A6B4A"
  },
  {
    icon: Zap,
    title: "AI Integration",
    body: "Wires LLMs into real products — Genkit-powered tutoring in CourseHub, a GPT support assistant in BiblioManager, and AI-assisted reasoning in NyayaSetu.",
    tags: ["Genkit", "OpenAI", "LLM Apps"],
    color: "#1A6B4A"
  },
  {
    icon: GitBranch,
    title: "CI/CD Automation",
    body: "GitHub Actions pipelines with automated test execution, JUnit reporting, and structure validation on every push. 60% cycle time reduction.",
    tags: ["GitHub Actions", "CI/CD", "Docker"],
    color: "#1A6B4A"
  },
  {
    icon: CheckCircle,
    title: "Quality-First Engineering",
    body: "Designed NyayaSetu AI for deterministic behavior — same input, same output, every time. Zero flaky tests, with validation built in rather than bolted on.",
    tags: ["Deterministic", "Pytest", "Reliability"],
    color: "#1A6B4A"
  },
  {
    icon: Settings,
    title: "Data Integrity",
    body: "Built duplicate-detection, contradiction-detection, and missing-record validators that keep API-layer data consistent across complex relational mappings.",
    tags: ["Validation", "Integrity", "API Testing"],
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
            I'm a software engineer who builds <strong className="font-semibold text-[#1A6B4A]">full-stack systems</strong><br />
            — and the validation that keeps them reliable.
          </h2>
          <p className="text-[16px] leading-[1.85] text-gray-500 font-light max-w-2xl">
            Across three production projects I've built backends with FastAPI, Streamlit, and Firebase, frontends with Next.js,
            and data layers with SQLite and Firestore. BiblioManager taught me how backends and databases really work; CourseHub put that
            into a live AI platform; and NyayaSetu AI is where I went deeper on engineering rigor — deterministic validation
            frameworks, relational integrity checks, and CI pipelines. Quality isn't a separate track for me; it's how I build.
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
