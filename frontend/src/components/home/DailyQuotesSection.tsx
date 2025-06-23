export function DailyQuotesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-gray-200 mb-4">FRASES DIARIAS</h2>
          <div className="bg-fuchsia-800 text-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex-shrink-0 flex items-center justify-center">
                <span className="text-white text-2xl">💭</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Supera El Miedo</h3>
                <p className="text-lg mb-6 text-fuchsia-100">
                  &quot;La cueva que temes entrar contiene el tesoro que buscas. Abraza lo desconocido y descubre tu fortaleza interior.&quot;
                </p>
                <div>
                  <div className="font-semibold">Dra. Amanda Reid</div>
                  <div className="text-fuchsia-200">Psicóloga Clínica</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 