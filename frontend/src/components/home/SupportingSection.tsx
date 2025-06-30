export function SupportingSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Cómo Te Apoyamos</h2>
          <p className="text-xl text-gray-600">
            Nuestro enfoque integral combina diferentes modalidades para tu bienestar completo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-secundario rounded-full flex-shrink-0 mt-1"></div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Terapia Individual</h3>
                <p className="text-gray-600">Sesiones personalizadas adaptadas a tus necesidades específicas y objetivos de crecimiento personal.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-secundario rounded-full flex-shrink-0 mt-1"></div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Apoyo Grupal</h3>
                <p className="text-gray-600">Conecta con otros en un ambiente seguro y de apoyo para compartir experiencias y aprender juntos.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-6 h-6 bg-secundario rounded-full flex-shrink-0 mt-1"></div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Recursos Digitales</h3>
                <p className="text-gray-600">Acceso a herramientas, ejercicios y contenido educativo para continuar tu crecimiento entre sesiones.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-principal rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-secundario font-medium text-center">Sesiones de<br />Terapia</span>
            </div>
            <div className="bg-principal rounded-2xl aspect-square flex items-center justify-center">
              <span className="text-secundario font-medium text-center">Programas de<br />Bienestar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 