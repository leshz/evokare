export function DailyQuotesAboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-300 mb-4">CITAS DIARIAS</h2>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              &ldquo;Es Normal Sentirse Abrumado, Pero Recuerda
              <span className="text-secundario"> Cómo Reaccionas</span> Es Lo Que Importa&rdquo;
            </h3>
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-secundario rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-2xl">💭</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Dra. Natasha Brooks</p>
                <p className="text-gray-600">Psicóloga Clínica</p>
              </div>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cada día compartimos reflexiones que te invitan a pausar, reflexionar y
              encontrar perspectivas nuevas sobre tu bienestar emocional.
              Estas citas están diseñadas para inspirarte en tu camino hacia la sanación.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-secundario mb-2">25°</div>
            <p className="text-gray-600">Días de Inspiración</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secundario mb-2">98%</div>
            <p className="text-gray-600">Impacto Positivo</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secundario mb-2">30+</div>
            <p className="text-gray-600">Expertos Colaboradores</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secundario mb-2">1.5°</div>
            <p className="text-gray-600">Minutos de Reflexión</p>
          </div>
        </div>
      </div>
    </section>
  );
} 