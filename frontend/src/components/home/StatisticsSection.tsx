export function StatisticsSection() {
  return (
    <section className="py-20 bg-fuchsia-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-fuchsia-200">Pacientes Satisfechos</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-fuchsia-200">Tasa de Éxito</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-fuchsia-200">Apoyo</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-fuchsia-200">Años de Experiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
} 