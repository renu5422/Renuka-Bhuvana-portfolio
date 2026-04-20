export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <div className="max-w-xl mx-auto">

        <h2 className="text-3xl font-semibold mb-6">
          Let’s Connect
        </h2>

        <p className="text-gray-600 mb-8">
          I'm actively looking for QA Automation and AI-related opportunities.
          Feel free to reach out.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="mailto:renukabhuvanac05@gmail.com"
            className="px-5 py-2 border rounded-lg hover:bg-black hover:text-white transition"
          >
            Email
          </a>

          <a
            href="https://github.com/renu5422"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border rounded-lg hover:bg-black hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/renuka-bhuvana"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border rounded-lg hover:bg-black hover:text-white transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}