export function SupportSystemAboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tu Sistema de Apoyo<br />
            <span className="text-secundario">Comienza Aquí</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro equipo de profesionales está aquí para acompañarte en cada paso
            de tu camino hacia el bienestar. Conoce a las personas que harán que tu
            experiencia sea única y personalizada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-secundario to-terciario rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">👩‍⚕️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Dra. María González
            </h3>
            <p className="text-gray-600 mb-4">Psicóloga Clínica</p>
            <p className="text-gray-600 text-sm">
              Especialista en terapia cognitivo-conductual con más de 10 años de experiencia.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-terciario to-secundario rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-2xl">👨‍⚕️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Dr. Carlos Ruiz
            </h3>
            <p className="text-gray-600 mb-4">Psiquiatra</p>
            <p className="text-gray-600 text-sm">
              Experto en trastornos de ansiedad y depresión con enfoque integral.
            </p>
          </div>

          <div className="bg-secundario rounded-2xl p-8 text-center text-white">
            <h3 className="text-xl font-semibold mb-4">Dra. Sofia Méndez</h3>
            <p className="mb-4">Terapeuta Familiar</p>
            <p className="text-sm opacity-90">
              Especializada en terapia familiar sistémica y relaciones interpersonales.
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-xs">📧</span>
              </div>
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <span className="text-xs">💬</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 