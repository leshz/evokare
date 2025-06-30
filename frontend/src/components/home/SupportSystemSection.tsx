export function SupportSystemSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-principal to-principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sistema de Apoyo Integral</h2>
          <p className="text-xl text-gray-600">
            Nuestro enfoque holístico combina terapia tradicional con herramientas modernas para tu bienestar completo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Terapia Personalizada y Apoyo Continuo
            </h3>
            <p className="text-gray-600 mb-8">
              Cada persona es única, por eso diseñamos un plan de tratamiento personalizado que se adapte a tus necesidades específicas, objetivos y estilo de vida.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-secundario rounded-full mr-4"></div>
                <span className="text-gray-700">Sesiones individuales personalizadas</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-secundario rounded-full mr-4"></div>
                <span className="text-gray-700">Apoyo entre sesiones</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-secundario rounded-full mr-4"></div>
                <span className="text-gray-700">Recursos digitales exclusivos</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-32 h-32 bg-secundario rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-4xl">💙</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 