"use client";

import { motion } from "framer-motion";

const placeholders = [
  { quote: "Renuka demonstrates strong backend-aware testing instincts — her ability to reason about data integrity and API behavior goes well beyond what most freshers bring to the table.", name: "Professor / Mentor", role: "MCA Programme · Seshadripuram College", initials: "SM" },
  { quote: "The NyayaSetu AI validation framework she built shows real engineering maturity — deterministic design, reusable utilities, and CI integration from day one.", name: "Technical Reviewer", role: "Code Review Feedback", initials: "TR" },
  { quote: "What stands out is the progression — from building backends to testing them to engineering the systems that verify them automatically. That's a developer mindset applied to QA.", name: "Peer Engineer", role: "Independent Assessment", initials: "PE" },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-[#F7F6F2]">
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
            <span className="text-[11px] font-mono tracking-[0.14em] uppercase text-[#1A6B4A]">Testimonials</span>
          </div>
          <h2 className="text-[clamp(32px,5vw,52px)] font-light tracking-tight text-gray-900">
            What others <strong className="font-semibold text-[#1A6B4A]">say</strong>
          </h2>
          <p className="text-[12px] font-mono text-gray-400 mt-3">
            * Placeholder — replace with real LinkedIn recommendations once received.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {placeholders.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col justify-between hover:border-[#1A6B4A] hover:shadow-lg transition-all"
            >
              <div>
                <div className="text-[#1A6B4A] text-4xl font-serif leading-none mb-4">"</div>
                <p className="text-[14px] text-gray-600 leading-relaxed italic mb-6">{t.quote}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#1A6B4A] flex items-center justify-center flex-shrink-0">
                  <span className="text-[11px] font-mono font-semibold text-white">{t.initials}</span>
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-gray-900">{t.name}</div>
                  <div className="text-[11px] font-mono text-gray-400">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-6 p-5 bg-white border border-dashed border-gray-300 rounded-2xl text-center"
        >
          <p className="text-[13px] text-gray-500 mb-3">
            Have worked with me? A LinkedIn recommendation takes 2 minutes and means everything to a fresher candidate.
          </p>
          <a
            href="https://www.linkedin.com/in/renukabhuvana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#1A6B4A] text-[#1A6B4A] text-[12px] font-medium hover:bg-[#E8F5EE] transition-colors"
          >
            Leave a recommendation on LinkedIn →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
