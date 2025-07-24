export function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-secundario to-terciario">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-principal">Pacientes Satisfechos</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-principal">Tasa de Éxito</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-principal">Apoyo</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">5+</div>
            <div className="text-principal">Años de Experiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
} 