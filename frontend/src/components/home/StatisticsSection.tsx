import { StatisticsComponent } from '@/services/inicio/types';

interface StatisticsSectionProps {
  data: StatisticsComponent;
}

export function StatisticsSection({ data }: StatisticsSectionProps) {
  if (!data) {
    console.error('StatisticsSection: data is undefined');
    return null;
  }

  const { datos = [] } = data;

  if (datos.length === 0) {
    console.warn('StatisticsSection: Missing required data (datos array is empty)');
    return null;
  }

  return (
    <section className="from-secundario to-terciario bg-linear-to-br py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 text-center md:grid-cols-4">
          {datos.map(({ id, titulo, contenido }) => (
            <div key={id}>
              <div className="mb-2 text-4xl font-bold text-white">{titulo}</div>
              <div className="text-principal">{contenido}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
