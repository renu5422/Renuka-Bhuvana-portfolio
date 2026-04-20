import SkillsSection from '../components/SkillsSection';

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="px-4 pb-12 pt-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Hi, I&apos;m Renuka Bhuvana</h1>
          <p className="text-2xl text-slate-700">AI-Augmented SDET</p>
          <p className="text-lg text-slate-600">
            Building automation frameworks and transitioning towards AI Engineering.
          </p>
          <a
            href="#skills"
            className="inline-block rounded-xl bg-black px-8 py-3 text-lg font-medium text-white transition-colors hover:bg-slate-800"
          >
            View Skills
          </a>
        </div>
      </section>

      <SkillsSection />
    </main>
  );
}
