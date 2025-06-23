export function SupportSystemSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-fuchsia-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tu Sistema de Apoyo<br />
            Comienza Aquí
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-sm">
              <span className="text-4xl">👩‍⚕️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Equipo Profesional</h3>
            <p className="text-gray-600">Profesionales licenciados listos para ayudarte</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-fuchsia-800 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-lg font-medium">24/7</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Siempre Disponible</h3>
            <p className="text-gray-600">Apoyo cuando más lo necesitas</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-sm">
              <span className="text-4xl">🤝</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Apoyo Comunitario</h3>
            <p className="text-gray-600">Conecta con otros en caminos similares</p>
          </div>
        </div>
      </div>
    </section>
  );
} 