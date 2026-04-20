export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-semibold mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* QA AUTOMATION */}
          <div className="p-6 border rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-left">

            <h3 className="text-2xl font-semibold mb-2">
              QA Automation Framework
            </h3>

            <p className="text-gray-600 mb-4">
              Built a scalable Playwright automation framework focused on reliability, maintainability, and real-world testing workflows.
            </p>

            <ul className="text-sm text-gray-500 mb-4 list-disc pl-5 space-y-1">
              <li>Implemented Page Object Model (POM) architecture</li>
              <li>Designed reusable utilities and fixtures</li>
              <li>Handled edge cases and improved test stability</li>
              <li>Integrated structured test execution workflow</li>
            </ul>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Python, Playwright, Pytest
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/renu5422/qa-automation-journey"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border rounded-lg text-sm hover:bg-black hover:text-white transition"
              >
                GitHub
              </a>
            </div>

          </div>

          {/* COURSEHUB */}
          <div className="p-6 border rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-left">

            <h3 className="text-2xl font-semibold mb-2">
              CourseHub (E-Learning Platform)
            </h3>

            <p className="text-gray-600 mb-4">
              Developed a course management platform enabling structured learning and user interaction.
            </p>

            <ul className="text-sm text-gray-500 mb-4 list-disc pl-5 space-y-1">
              <li>Designed modular structure for course management</li>
              <li>Handled user interaction and data flow</li>
              <li>Focused on scalability and maintainability</li>
              <li>Implemented backend-driven logic</li>
            </ul>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Java, Web Technologies, Database (update if needed)
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/renu5422/CourseHub"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border rounded-lg text-sm hover:bg-black hover:text-white transition"
              >
                GitHub
              </a>
            </div>

          </div>

          {/* BIBLIO MANAGER */}
          <div className="p-6 border rounded-xl bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 text-left">

            <h3 className="text-2xl font-semibold mb-2">
              BiblioManager (Library System)
            </h3>

            <p className="text-gray-600 mb-4">
              Built a system to manage books, users, and borrowing workflows with efficient data handling.
            </p>

            <ul className="text-sm text-gray-500 mb-4 list-disc pl-5 space-y-1">
              <li>Implemented CRUD operations for book management</li>
              <li>Designed structured database interactions</li>
              <li>Handled user and borrowing workflows</li>
              <li>Focused on clean logic and maintainability</li>
            </ul>

            <p className="text-sm text-gray-500 mb-4">
              Tech: Java, MySQL, Spring Boot
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/renu5422/Bibilomanager"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border rounded-lg text-sm hover:bg-black hover:text-white transition"
              >
                GitHub
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}