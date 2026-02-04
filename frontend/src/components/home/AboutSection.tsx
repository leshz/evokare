import Link from 'next/link';
import { AboutComponent } from '@/services/inicio/types';

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

  const groupedHighlights = destacado.reduce<
    Array<{ items: typeof destacado; isDark: boolean }>
  >((groups, item, index) => {
    const groupIndex = Math.floor(index / 3);

    if (!groups[groupIndex]) {
      groups[groupIndex] = {
        items: [],
        isDark: groupIndex % 2 === 1,
      };
    }

    groups[groupIndex].items.push(item);
    return groups;
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">{titulo}</h2>
          <div className="bg-secundario mx-auto mb-6 h-1 w-24"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            {descripcion}
          </p>
        </div>

        {groupedHighlights.map(({ items, isDark }, groupIndex) => {
          const isLastGroup = groupIndex === groupedHighlights.length - 1;

          return (
            <div
              key={`group-${groupIndex}`}
              className={`grid gap-8 md:grid-cols-3 ${!isLastGroup ? 'mb-16' : ''}`}
            >
              {items.map(({ id, dato, descripcion }, itemIndex) => {
                const isEven = itemIndex % 2 === 0;
                const darkClasses = `rounded-xl bg-gradient-to-br p-8 text-center shadow-lg transition-shadow hover:shadow-xl ${
                  isEven
                    ? 'from-secundario to-terciario'
                    : 'from-terciario to-secundario'
                }`;
                const lightClasses =
                  'from-principal rounded-xl bg-gradient-to-br to-gray-50 p-8 text-center shadow-md';

                return (
                  <div key={id} className={isDark ? darkClasses : lightClasses}>
                    {isDark ? (
                      <div className="text-white">
                        <div className="mb-2 text-2xl font-bold">{dato}</div>
                        <p className="text-principal opacity-90">
                          {descripcion}
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="text-secundario mb-2 text-4xl font-bold">
                          {dato}
                        </div>
                        <p className="font-medium text-gray-600">
                          {descripcion}
                        </p>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}

        {botones.length > 0 && (
          <div className="mt-16 text-center">
            {botones.map(({ id, texto, link }) => {
              const buttonClasses =
                'from-secundario to-terciario hover:from-terciario hover:to-secundario inline-block rounded-full bg-gradient-to-br px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:bg-gradient-to-br';
              return (
                <Link key={id} href={link} className={buttonClasses}>
                  {texto}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
