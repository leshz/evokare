export function FreshPerspectivesSection() {
  return (
    <section className="bg-principal py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-secundario text-xl font-medium">
            Sobre Salud Mental
          </p>
          <h2 className="mt-2 text-4xl font-bold text-gray-900">
            Nuevas Perspectivas
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="text-secundario mb-4 text-6xl font-bold">01</div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Terapia Individual
            </h3>
            <p className="mb-6 text-gray-600">
              Sesiones personalizadas adaptadas a tus necesidades específicas y
              objetivos de crecimiento personal.
            </p>
            <button className="from-secundario to-terciario hover:from-terciario hover:to-secundario rounded-full bg-gradient-to-br px-6 py-2 text-sm text-white transition-all hover:bg-gradient-to-br">
              Saber Más
            </button>
          </div>

          <div className="text-center">
            <div className="text-secundario mb-4 text-6xl font-bold">02</div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Apoyo Grupal
            </h3>
            <p className="mb-6 text-gray-600">
              Conecta con otros en un ambiente seguro y de apoyo para compartir
              experiencias y aprender juntos.
            </p>
            <button className="from-secundario to-terciario hover:from-terciario hover:to-secundario rounded-full bg-gradient-to-br px-6 py-2 text-sm text-white transition-all hover:bg-gradient-to-br">
              Saber Más
            </button>
          </div>

          <div className="text-center">
            <div className="text-secundario mb-4 text-6xl font-bold">03</div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Recursos Digitales
            </h3>
            <p className="mb-6 text-gray-600">
              Acceso a herramientas, ejercicios y contenido educativo para
              continuar tu crecimiento entre sesiones.
            </p>
            <button className="from-secundario to-terciario hover:from-terciario hover:to-secundario rounded-full bg-gradient-to-br px-6 py-2 text-sm text-white transition-all hover:bg-gradient-to-br">
              Saber Más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
