export function DailyQuotesAboutSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-6xl font-bold text-gray-300">
            CITAS DIARIAS
          </h2>
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-8 text-3xl font-bold text-gray-900">
              &ldquo;Es Normal Sentirse Abrumado, Pero Recuerda
              <span className="text-secundario"> Cómo Reaccionas</span> Es Lo
              Que Importa&rdquo;
            </h3>
            <div className="mb-8 flex items-center justify-center">
              <div className="bg-secundario mr-4 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-2xl text-white">💭</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">
                  Dra. Natasha Brooks
                </p>
                <p className="text-gray-600">Psicóloga Clínica</p>
              </div>
            </div>
            <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Cada día compartimos reflexiones que te invitan a pausar,
              reflexionar y encontrar perspectivas nuevas sobre tu bienestar
              emocional. Estas citas están diseñadas para inspirarte en tu
              camino hacia la sanación.
            </p>
          </div>
        </div>
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="text-secundario mb-2 text-4xl font-bold">25°</div>
            <p className="text-gray-600">Días de Inspiración</p>
          </div>
          <div className="text-center">
            <div className="text-secundario mb-2 text-4xl font-bold">98%</div>
            <p className="text-gray-600">Impacto Positivo</p>
          </div>
          <div className="text-center">
            <div className="text-secundario mb-2 text-4xl font-bold">30+</div>
            <p className="text-gray-600">Expertos Colaboradores</p>
          </div>
          <div className="text-center">
            <div className="text-secundario mb-2 text-4xl font-bold">1.5°</div>
            <p className="text-gray-600">Minutos de Reflexión</p>
          </div>
        </div>
      </div>
    </section>
  );
}
