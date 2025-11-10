import Image from 'next/image';
import Link from 'next/link';
import { Banner } from '@/services/inicio/types';

interface HeroSectionProps {
  banner: Banner;
}

export function HeroSection({ banner }: HeroSectionProps) {
  const { titulo, contenido, imagen, botones } = banner;

  if (!imagen || !imagen.url) {
    return null;
  }

  const { url, alternativeText, width, height } = imagen;

  return (
    <section className="from-secundario to-terciario bg-gradient-to-r py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              {titulo}
            </h1>
            <p className="mb-8 text-xl text-gray-100">{contenido}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              {botones.map(({ id, texto, link }, index) =>
                index === 0 ? (
                  <Link
                    key={id}
                    href={link}
                    className="bg-principal text-secundario rounded-full px-8 py-3 font-medium text-center transition-colors hover:bg-gray-800"
                  >
                    {texto}
                  </Link>
                ) : (
                  <Link
                    key={id}
                    href={link}
                    className="hover:text-secundario rounded-full border border-white px-8 py-3 font-medium text-center text-white transition-colors hover:bg-white"
                  >
                    {texto}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex aspect-square items-center justify-center rounded-3xl bg-white shadow-xl">
              <div className="bg-principal flex h-80 w-80 items-center justify-center rounded-2xl">
                <Image
                  src={url}
                  className="w-full overflow-hidden rounded-2xl"
                  alt={alternativeText || titulo}
                  width={width}
                  height={height}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
