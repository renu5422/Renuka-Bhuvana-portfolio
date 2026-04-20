export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 text-center">
      <div className="max-w-3xl space-y-6">

        <h1 className="text-5xl font-bold leading-tight">
          Hi, I'm <span className="text-black">Renuka Bhuvana</span>
        </h1>

        <h2 className="text-xl text-gray-600">
          Java Full Stack Developer | Python | Aspiring SDET & AI Engineer
        </h2>

        <p className="text-gray-500">
          Building scalable applications, automation frameworks, and transitioning towards AI-driven engineering.
        </p>

        <a
          href="#projects"
          className="inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800 transition"
        >
          View My Projects
        </a>

      </div>
    </section>
  );
}