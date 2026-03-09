import { AboutComponent } from '@/services/inicio/types';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { Button } from '@/components/shared/Button';

interface AboutSectionProps {
  data: AboutComponent;
}

export function AboutSection({ data }: AboutSectionProps) {
  if (!data) {
    console.error('AboutSection: data is undefined');
    return null;
  }

  const { titulo, descripcion, destacado = [], botones = [] } = data;

  if (!titulo || !descripcion || destacado.length === 0) {
    console.warn(
      'AboutSection: Missing required data (titulo, descripcion, or destacado)'
    );
    return null;
  }

  // Separate numeric stats from text-based items
  const isNumericStat = (dato: string) => /^\d/.test(dato) || /[%+]/.test(dato);
  const stats = destacado.filter(item => isNumericStat(item.dato));
  const services = destacado.filter(item => !isNumericStat(item.dato));

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title={titulo} subtitle={descripcion} />

        {/* Stats row */}
        {stats.length > 0 && (
          <div className="mb-8 grid gap-6 sm:grid-cols-3">
            {stats.map(({ id, dato, descripcion }) => (
              <div
                key={id}
                className="rounded-2xl bg-surface-soft p-6 text-center transition-shadow hover:shadow-md"
              >
                <div className="text-secundario mb-1 text-3xl font-bold">
                  {dato}
                </div>
                <p className="text-sm text-gray-600">{descripcion}</p>
              </div>
            ))}
          </div>
        )}

        {/* Service cards row */}
        {services.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-3">
            {services.map(({ id, dato, descripcion }) => (
              <div
                key={id}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="text-text-primary mb-1 text-lg font-semibold">
                  {dato}
                </div>
                <p className="text-sm text-gray-500">{descripcion}</p>
              </div>
            ))}
          </div>
        )}

        {botones.length > 0 && (
          <div className="mt-12 text-center">
            {botones.map(({ id, texto, link }, index) => (
              <Button
                key={id}
                href={link}
                variant={index === 0 ? 'primary' : 'outline'}
                size="md"
              >
                {texto}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
