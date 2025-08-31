export function TestimonialSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Lo Que Dicen Nuestros Pacientes
          </h2>
        </div>

        <div className="bg-principal rounded-3xl p-8 md:p-12">
          <div className="flex items-start space-x-6">
            <div className="bg-secundario flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full">
              <span className="text-2xl text-white">👤</span>
            </div>
            <div className="flex-1">
              <p className="mb-4 text-lg text-gray-700 italic">
                &quot;Elisa cambió mi vida. El apoyo que recibí me ayudó a
                superar la ansiedad y encontrar mi paz interior. Es una
                profesional increíble y el ambiente es muy acogedor.&quot;
              </p>
              <div>
                <div className="font-semibold text-gray-900">
                  María González
                </div>
                <div className="text-gray-600">Paciente desde 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
