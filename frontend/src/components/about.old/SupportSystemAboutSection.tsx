export function SupportSystemAboutSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Tu Sistema de Apoyo
            <br />
            <span className="text-secundario">Comienza Aquí</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Nuestro equipo de profesionales está aquí para acompañarte en cada
            paso de tu camino hacia el bienestar. Conoce a las personas que
            harán que tu experiencia sea única y personalizada.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <div className="from-secundario to-terciario mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br">
              <span className="text-2xl text-white">👩‍⚕️</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Dra. María González
            </h3>
            <p className="mb-4 text-gray-600">Psicóloga Clínica</p>
            <p className="text-sm text-gray-600">
              Especialista en terapia cognitivo-conductual con más de 10 años de
              experiencia.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <div className="from-terciario to-secundario mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br">
              <span className="text-2xl text-white">👨‍⚕️</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              Dr. Carlos Ruiz
            </h3>
            <p className="mb-4 text-gray-600">Psiquiatra</p>
            <p className="text-sm text-gray-600">
              Experto en trastornos de ansiedad y depresión con enfoque
              integral.
            </p>
          </div>

          <div className="bg-secundario rounded-2xl p-8 text-center text-white">
            <h3 className="mb-4 text-xl font-semibold">Dra. Sofia Méndez</h3>
            <p className="mb-4">Terapeuta Familiar</p>
            <p className="text-sm opacity-90">
              Especializada en terapia familiar sistémica y relaciones
              interpersonales.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="bg-opacity-20 flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <span className="text-xs">📧</span>
              </div>
              <div className="bg-opacity-20 flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <span className="text-xs">💬</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
