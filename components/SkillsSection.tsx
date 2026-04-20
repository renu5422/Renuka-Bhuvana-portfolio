const skills = [
  'Python',
  'Java',
  'Playwright',
  'API Testing',
  'CI/CD',
  'AI-assisted Testing',
];

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Skills</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {skills.map((skill) => (
          <article
            key={skill}
            className="rounded-lg border border-slate-200 bg-white p-5 text-slate-700 shadow-sm transition-shadow duration-200 hover:shadow-md"
          >
            <p className="text-sm font-medium sm:text-base">{skill}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
