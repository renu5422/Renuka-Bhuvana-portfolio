export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-6 max-w-2xl">
        
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Hi, I'm <span className="text-black">Renuka Bhuvana</span>
        </h1>

        <h2 className="text-xl text-gray-600 mb-4">
          AI-Augmented SDET
        </h2>

        <p className="text-gray-500 mb-8">
          Building automation frameworks and transitioning towards AI Engineering.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          View Projects
        </button>

      </div>
    </main>
  );
}