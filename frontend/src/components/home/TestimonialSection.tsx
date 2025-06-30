export function TestimonialSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Pacientes</h2>
        </div>

        <div className="bg-principal rounded-3xl p-8 md:p-12">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-secundario rounded-full flex-shrink-0 flex items-center justify-center">
              <span className="text-white text-2xl">👤</span>
            </div>
            <div className="flex-1">
              <p className="text-lg text-gray-700 mb-4 italic">
                &quot;Evokare cambió mi vida. El apoyo que recibí me ayudó a superar la ansiedad y encontrar mi paz interior. Los profesionales son increíbles y el ambiente es muy acogedor.&quot;
              </p>
              <div>
                <div className="font-semibold text-gray-900">María González</div>
                <div className="text-gray-600">Paciente desde 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 