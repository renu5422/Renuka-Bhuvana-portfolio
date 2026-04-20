export default function SkillsSection() {
  const skills = [
    "Python",
    "Java",
    "Playwright",
    "API Testing",
    "CI/CD",
    "AI-assisted Testing",
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-6 border rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition duration-300"
            >
              <h3 className="font-medium">{skill}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}