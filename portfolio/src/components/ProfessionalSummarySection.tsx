"use client";

import { motion } from "framer-motion";

const metrics = [
  { num: "5", label: "Projects Completed" },
  { num: "20+", label: "Validation Scenarios" },
  { num: "2", label: "Automation Frameworks" },
  { num: "18", label: "Months of Building" },
  { num: "8.01", label: "MCA CGPA" },
  { num: "2", label: "Certifications" },
];

export default function ProfessionalSummarySection() {
  return (
    <section id="summary" className="py-24 px-6 bg-[#F7F6F2]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-5 h-px bg-[#1A6B4A]" />
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#1A6B4A]">
              Professional Summary
            </span>
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-gray-900 mb-8">
            Who I <strong className="font-semibold text-[#1A6B4A]">am</strong>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-[16px] leading-[1.85] text-gray-500 font-light mb-6">
                QA Automation Engineer with hands-on experience in test automation,
                API validation, backend quality engineering, and debugging. Built automation
                frameworks using Selenium and Playwright, developed deterministic validation
                scenarios, and contributed to GitHub Actions-based CI workflows.
              </p>
              <p className="text-[16px] leading-[1.85] text-gray-500 font-light">
                Over 18 months of continuous project work — from building Flask and Firebase
                backends to engineering API validation pipelines and CI-integrated test suites.
                I test from the inside out: developer background, automation mindset, quality focus.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {metrics.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-[#1A6B4A] hover:shadow-md transition-all"
                >
                  <div className="text-[30px] font-semibold text-[#1A6B4A] leading-none tracking-tight">
                    {s.num}
                  </div>
                  <div className="text-[11px] font-mono text-gray-400 mt-2 tracking-wide uppercase leading-snug">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
