"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "3", label: "Production Projects" },
  { num: "20+", label: "Validations" },
  { num: "AI", label: "Integrated" },
  { num: "8.01", label: "MCA CGPA" },
];

const stack = [
  "Python", "FastAPI", "Django", "Next.js",
  "PostgreSQL", "Playwright", "Pytest", "GitHub Actions",
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#0A1A12]">

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[#1A6B4A] opacity-20 blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0D4A30] opacity-30 blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-[#2D9566] opacity-10 blur-[80px] pointer-events-none" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Code watermark */}
      <div aria-hidden="true" className="absolute right-8 top-1/2 -translate-y-1/2 text-right text-[11px] leading-relaxed font-mono text-white opacity-[0.06] pointer-events-none select-none hidden xl:block space-y-0.5">
        {["def validate_response(data):","  assert data[\"status\"] == 200","  assert len(data[\"results\"]) > 0","  return True","","@pytest.fixture(scope=\"session\")","def api_client():","  return APIClient(base_url)","","class SearchPage(BasePage):","  def __init__(self, page):","    self.box = page.locator(\"#search\")","","✓ 20 passed in 1.42s","✓ CI pipeline: success","✓ 0 flaky tests"].map((line, i) => <div key={i}>{line || <>&nbsp;</>}</div>)}
      </div>

      <motion.div
        className="relative max-w-3xl w-full py-32 z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <span className="block w-8 h-px bg-[#2D9566]" />
          <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-[#2D9566]">
            Software Engineer · Test Infrastructure · Backend Systems
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-[clamp(52px,9vw,96px)] font-light leading-[1.0] tracking-tight mb-6 text-white"
        >
          Renuka{" "}
          <span className="font-semibold" style={{ color: "#2D9566" }}>Bhuvana</span>
        </motion.h1>

        {/* Role */}
        <motion.p variants={item} className="font-mono text-sm tracking-[0.06em] text-white/40 mb-6">
          Python · FastAPI · Django · Next.js · PostgreSQL · Playwright · CI/CD
        </motion.p>

        {/* Summary */}
        <motion.p variants={item} className="text-[18px] leading-[1.8] text-white/60 font-light max-w-xl mb-10">
          I build production systems — and the test infrastructure that keeps them reliable.
          Full-stack work across FastAPI, Django, and Next.js, with a backend and quality edge
          most engineers pick up years later.
        </motion.p>

        {/* Stats — glassmorphism panel */}
        <motion.div
          variants={item}
          className="grid grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden mb-10 backdrop-blur-sm border border-white/10"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 px-4 py-5 text-center">
              <div className="text-[28px] sm:text-[36px] font-semibold text-white leading-none tracking-tight">
                {s.num}
              </div>
              <div className="text-[10px] font-mono tracking-[0.1em] uppercase text-white/40 mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Stack tags */}
        <motion.div variants={item} className="flex flex-wrap gap-2 mb-10">
          {stack.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/60 tracking-wide backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div variants={item} className="flex gap-3 flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1A6B4A] text-white text-sm font-medium hover:bg-[#2D9566] transition-colors"
          >
            View Projects →
          </a>
          <a
            href="https://www.linkedin.com/in/renukabhuvana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-colors backdrop-blur-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/renu5422"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-colors backdrop-blur-sm"
          >
            GitHub
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=renukabhuvanac05@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-white/70 text-sm font-medium hover:border-white/40 hover:text-white transition-colors backdrop-blur-sm"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
