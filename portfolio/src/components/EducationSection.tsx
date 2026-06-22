"use client";

import { motion } from "framer-motion";

const education = [
  { period: "2023 – 2025", degree: "Master of Computer Applications (MCA)", institution: "Seshadripuram College, Bengaluru", cgpa: "CGPA 8.01", highlight: true },
  { period: "2020 – 2023", degree: "Bachelor of Computer Applications (BCA)", institution: "BMS College for Women, Bengaluru", cgpa: "CGPA 7.90", highlight: false },
];

const certifications = [
  { icon: "☕", name: "Java Full Stack Certification", issuer: "Certified" },
  { icon: "📊", name: "Power BI Certification", issuer: "Certified" },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 bg-white">
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
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#1A6B4A]">Education & Certifications</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-gray-900">
            Academic <strong className="font-semibold text-[#1A6B4A]">background</strong>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Timeline */}
          <div>
            <div className="text-[11px] font-mono tracking-[0.1em] uppercase text-gray-400 mb-6">Degrees</div>
            <div className="relative pl-6">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200" />
              {education.map((e, i) => (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-8 last:mb-0"
                >
                  <div
                    className={`absolute -left-6 top-1.5 w-3 h-3 rounded-full border-2 border-white ${e.highlight ? "bg-[#1A6B4A]" : "bg-gray-300"}`}
                    style={{ boxShadow: e.highlight ? "0 0 0 2px #1A6B4A" : "0 0 0 2px #D1D5DB" }}
                  />
                  <div className="bg-[#F7F6F2] border border-gray-100 rounded-2xl p-5 hover:border-[#1A6B4A] hover:shadow-md transition-all">
                    <div className="font-mono text-[11px] text-gray-400 tracking-wide mb-1">{e.period}</div>
                    <div className="text-[16px] font-semibold text-gray-900 mb-1">{e.degree}</div>
                    <div className="text-[13px] text-gray-500 mb-3">{e.institution}</div>
                    <span className={`inline-block font-mono text-[11px] px-2.5 py-1 rounded-full ${e.highlight ? "bg-[#E8F5EE] text-[#1A6B4A] border border-[#c0dece]" : "bg-gray-100 text-gray-500"}`}>
                      {e.cgpa}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="text-[11px] font-mono tracking-[0.1em] uppercase text-gray-400 mb-6">Certifications</div>
            <div className="flex flex-col gap-3">
              {certifications.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-5 bg-[#F7F6F2] border border-gray-100 rounded-2xl hover:border-[#1A6B4A] hover:shadow-md transition-all group"
                >
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <div className="text-[14px] font-semibold text-gray-900">{c.name}</div>
                    <div className="text-[12px] font-mono text-[#1A6B4A] mt-0.5">{c.issuer}</div>
                  </div>
                  <span className="ml-auto text-[#1A6B4A] font-mono text-lg">✓</span>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-5 bg-[#1A6B4A] rounded-2xl"
              >
                <div className="text-[11px] font-mono text-white/60 uppercase tracking-wide mb-1">Currently exploring</div>
                <div className="text-[14px] font-semibold text-white">AI-Assisted Testing · BDD / Cucumber · Performance Testing</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
