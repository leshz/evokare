import Link from 'next/link';
import { ProductosBannerComponent } from '@/services/productos/types';

interface ProductsBannerProps {
  data: ProductosBannerComponent;
}

export function ProductsBanner({ data }: ProductsBannerProps) {
  if (!data) {
    console.error('ProductsBanner: data is undefined');
    return null;
  }

  const { titulo, introduccion, acciones = [] } = data;

  if (!titulo || !introduccion) {
    console.warn(
      'ProductsBanner: Missing required data (titulo or introduccion)'
    );
    return null;
  }

  return (
    <section className="from-secundario to-terciario bg-gradient-to-r py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {titulo}
          </h1>
          <p className="text-principal mx-auto mb-8 max-w-3xl text-xl">
            {introduccion}
          </p>
          {acciones.length > 0 && (
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              {acciones.map(({ id, texto, link }, index) => (
                <Link
                  key={id}
                  href={link}
                  className={
                    index === 0
                      ? 'text-secundario hover:bg-principal rounded-full bg-white px-8 py-3 font-medium transition-colors'
                      : 'hover:text-secundario rounded-full border-2 border-white px-8 py-3 font-medium text-white transition-colors hover:bg-white'
                  }
                >
                  {texto}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
