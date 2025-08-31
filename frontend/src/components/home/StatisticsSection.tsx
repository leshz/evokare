export function StatisticsSection() {
  return (
    <section className="from-secundario to-terciario bg-gradient-to-br py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 text-center md:grid-cols-4">
          <div>
            <div className="mb-2 text-4xl font-bold text-white">500+</div>
            <div className="text-principal">Pacientes Satisfechos</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-white">95%</div>
            <div className="text-principal">Tasa de Éxito</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-white">24/7</div>
            <div className="text-principal">Apoyo</div>
          </div>
          <div>
            <div className="mb-2 text-4xl font-bold text-white">5+</div>
            <div className="text-principal">Años de Experiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
}
