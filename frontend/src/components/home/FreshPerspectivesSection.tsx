export function FreshPerspectivesSection() {
  return (
    <section className="py-20 bg-fuchsia-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuevas Perspectivas</h2>
          <p className="text-xl text-fuchsia-800 font-medium">Sobre Salud Mental</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-6xl font-bold text-fuchsia-800 mb-4">01</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Por Qué Tu Cerebro Ama Los Desafíos
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              El crecimiento ocurre cuando salimos de nuestra zona de confort y abrazamos nuevos desafíos.
            </p>
            <button className="bg-fuchsia-800 text-white px-6 py-2 rounded-full text-sm hover:bg-fuchsia-900 transition-colors">
              Leer Más
            </button>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-6xl font-bold text-fuchsia-800 mb-4">02</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Cómo La Biología Del Estrés Nos Afecta Diariamente
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Entender las respuestas al estrés nos ayuda a manejar mejor nuestra salud mental diaria.
            </p>
            <button className="bg-fuchsia-800 text-white px-6 py-2 rounded-full text-sm hover:bg-fuchsia-900 transition-colors">
              Leer Más
            </button>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-6xl font-bold text-fuchsia-800 mb-4">03</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Qué Pasa En Tu Cerebro Cuando Practicas El Amor Propio
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              La autocompasión crea cambios neurológicos positivos que mejoran el bienestar.
            </p>
            <button className="bg-fuchsia-800 text-white px-6 py-2 rounded-full text-sm hover:bg-fuchsia-900 transition-colors">
              Leer Más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 