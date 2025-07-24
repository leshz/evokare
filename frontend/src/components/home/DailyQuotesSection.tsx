export function DailyQuotesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Reflexión del Día</h2>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50  text-gray-800 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-6xl mb-6">💭</div>
            <blockquote className="text-2xl font-medium mb-6">
              &quot;El autocuidado no es un lujo, es una necesidad. Tu bienestar mental es la base de todo lo demás.&quot;
            </blockquote>
            <p className="text-lg mb-6 text-gray-600">
              Tómate un momento para reflexionar sobre esta frase y cómo puedes aplicarla en tu vida diaria.
            </p>
            <div className="text-gray-600">
              <div className="font-semibold">Dra. Ana Martínez</div>
              <div className="text-gray-600">Psicóloga Clínica</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 