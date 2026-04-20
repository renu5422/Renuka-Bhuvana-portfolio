export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-semibold mb-10">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Automation Testing</h3>
            <p className="text-sm text-gray-600">
              Build Playwright automation frameworks using Python.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">Web Development</h3>
            <p className="text-sm text-gray-600">
              Develop full stack applications using Java and modern frameworks.
            </p>
          </div>

          <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-lg transition">
            <h3 className="font-semibold mb-2">API Testing</h3>
            <p className="text-sm text-gray-600">
              Validate APIs using Postman and automation scripts.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}