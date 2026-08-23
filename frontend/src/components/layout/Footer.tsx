import { BlocksRendererCustom } from '@/components/shared/BlocksRendererCustom';

import { FooterProps } from './types';

export const Footer = ({ footer }: FooterProps) => {
  const { autor, invitacion: callToAction } = footer;
  const { titulo: title, contenido: content } = callToAction;
  const { columnas } = footer;

  return (
    <footer className="from-secundario to-terciario rounded-1xl md:rounded-2xl bg-linear-to-r py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 text-3xl font-bold">{title}</div>
            <BlocksRendererCustom
              content={content}
              classNames={{
                paragraph: 'mb-6 text-white/90 paragraph',
                link: 'text-secundario rounded-full bg-white px-6 py-3 font-medium transition-colors hover:bg-gray-100 inline-block',
              }}
            />
          </div>
          {columnas.map(columna => (
            <div key={columna.id}>
              <h3 className="mb-4 text-lg font-semibold">{columna.titulo}</h3>
              <BlocksRendererCustom
                content={columna.contenido}
                classNames={{
                  paragraph: 'text-white/90 paragraph',
                  list: { unordered: 'space-y-2 text-white/90' },
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <div className="mb-4 flex flex-col justify-center space-x-6">
            <BlocksRendererCustom
              content={autor}
              classNames={{
                paragraph: 'text-white/80',
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
