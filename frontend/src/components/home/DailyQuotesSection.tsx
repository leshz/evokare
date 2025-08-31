export function DailyQuotesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Reflexión del Día
          </h2>
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 text-gray-800 md:p-12">
          <div className="text-center">
            <div className="mb-6 text-6xl">💭</div>
            <blockquote className="mb-6 text-2xl font-medium">
              &quot;El autocuidado no es un lujo, es una necesidad. Tu bienestar
              mental es la base de todo lo demás.&quot;
            </blockquote>
            <p className="mb-6 text-lg text-gray-600">
              Tómate un momento para reflexionar sobre esta frase y cómo puedes
              aplicarla en tu vida diaria.
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
