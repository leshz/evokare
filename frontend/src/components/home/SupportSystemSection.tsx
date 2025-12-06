'use client';

import { SupportSystemComponent } from '@/services/inicio/types';
import { BlocksRendererCustom } from '@/components/shared/BlocksRendererCustom';

interface SupportSystemSectionProps {
  data: SupportSystemComponent;
}

export function SupportSystemSection({ data }: SupportSystemSectionProps) {
  if (!data) {
    console.error('SupportSystemSection: data is undefined');
    return null;
  }

  const { titulo, subtitulo, contenido = [] } = data;

  if (!titulo || contenido.length === 0) {
    console.warn(
      'SupportSystemSection: Missing required data (titulo or contenido)'
    );
    return null;
  }

  return (
    <section className="from-principal to-principal bg-linear-to-br py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">{titulo}</h2>
          {subtitulo && <p className="text-xl text-gray-600">{subtitulo}</p>}
        </div>

        <div className="rounded-2xl bg-linear-to-br from-indigo-50 to-purple-50 p-8 md:p-12">
          <BlocksRendererCustom
            content={contenido}
            classNames={{
              paragraph: 'mb-8 text-gray-600',
              heading: {
                h1: 'text-2xl font-bold text-gray-800 mb-6',
                h2: 'text-2xl font-bold text-gray-800 mb-6',
                h3: 'text-2xl font-bold text-gray-800 mb-6',
                h4: 'text-xl font-bold text-gray-800 mb-4',
                h5: 'text-lg font-bold text-gray-800 mb-4',
                h6: 'text-base font-bold text-gray-800 mb-4',
              },
              list: {
                unordered: 'grid grid-cols-1 gap-6 md:grid-cols-2',
                ordered: 'mb-6 list-decimal space-y-2 pl-6',
              },
            }}
            modifierClassNames={{
              code: 'rounded bg-gray-100 px-1 py-0.5 font-mono text-sm',
            }}
          />
        </div>
      </div>
    </section>
  );
}
