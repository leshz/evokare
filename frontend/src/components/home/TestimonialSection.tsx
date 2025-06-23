export function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testi-</h2>
          <h2 className="text-4xl font-bold text-gray-900">monios</h2>
          <p className="text-gray-600 mt-4">Lo que dicen nuestros pacientes</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-fuchsia-50 rounded-3xl p-8 md:p-12">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-fuchsia-800 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-2xl">👤</span>
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  &quot;Evokare ha sido fundamental en mi camino hacia una mejor salud mental. El apoyo profesional y el enfoque personalizado me ayudaron a comprenderme mejor y desarrollar mecanismos de afrontamiento saludables. Estoy agradecida por su atención compasiva.&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-gray-600">Paciente desde 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 