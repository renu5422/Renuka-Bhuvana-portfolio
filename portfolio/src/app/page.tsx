import SkillsSection from "../components/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-slate-900">
      <section className="px-6 pb-12 pt-20 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Hi, I'm <span className="text-black">Renuka Bhuvana</span>
          </h1>

          <h2 className="text-xl text-gray-600">AI-Augmented SDET</h2>

          <p className="text-gray-500">
            Building automation frameworks and transitioning towards AI Engineering.
          </p>

          <a
            href="#skills"
            className="inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
          >
            View Skills
          </a>
        </div>
      </section>

      <SkillsSection />
    </main>
  );
}