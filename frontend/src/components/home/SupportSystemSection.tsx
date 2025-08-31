import { CheckCircle } from 'lucide-react';

export function SupportSystemSection() {
  return (
    <section className="from-principal to-principal bg-gradient-to-br py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            Sistema de Apoyo Integral
          </h2>
          <p className="text-xl text-gray-600">
            Nuestro enfoque holístico combina terapia tradicional con
            herramientas modernas para tu bienestar completo.
          </p>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8 md:p-12">
          <h3 className="mb-6 text-2xl font-bold text-gray-800">
            Terapia Personalizada y Apoyo Continuo
          </h3>
          <p className="mb-8 text-gray-600">
            Nuestro programa de terapia personalizada está diseñado para
            adaptarse a tus necesidades específicas, ofrecerte soporte de vida.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <CheckCircle
                className="mt-1 flex-shrink-0 text-indigo-600"
                size={20}
              />
              <p className="text-gray-700">
                Sesiones individuales personalizadas
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle
                className="mt-1 flex-shrink-0 text-indigo-600"
                size={20}
              />
              <p className="text-gray-700">Apoyo entre sesiones</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle
                className="mt-1 flex-shrink-0 text-indigo-600"
                size={20}
              />
              <p className="text-gray-700">Recursos digitales accesibles</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle
                className="mt-1 flex-shrink-0 text-indigo-600"
                size={20}
              />
              <p className="text-gray-700">Seguimiento de progreso personal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
