export function UnderstandingSection() {
  return (
    <section className="py-20 bg-fuchsia-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Conocerte A Ti Mismo</h2>
          <p className="text-xl text-fuchsia-800 font-medium">Es La Forma Más Poderosa De Respeto Propio</p>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-fuchsia-800 rounded-full flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🧠</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Consejería Individual</h3>
            <p className="text-gray-600">Sesiones personalizadas adaptadas a tus necesidades y objetivos específicos.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-fuchsia-800 rounded-full flex items-center justify-center mb-6">
              <span className="text-white text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Terapia Familiar</h3>
            <p className="text-gray-600">Fortalece los lazos familiares y mejora los patrones de comunicación.</p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="w-16 h-16 bg-fuchsia-800 rounded-full flex items-center justify-center mb-6">
              <span className="text-white text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Manejo del Estrés</h3>
            <p className="text-gray-600">Aprende técnicas efectivas para manejar el estrés y la ansiedad.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 