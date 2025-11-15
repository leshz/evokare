'use client';

import { SupportSystemComponent } from '@/services/inicio/types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { CheckCircle } from 'lucide-react';

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
    console.warn('SupportSystemSection: Missing required data (titulo or contenido)');
    return null;
  }

  return (
    <section className="from-principal to-principal bg-gradient-to-br py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            {titulo}
          </h2>
          {subtitulo && (
            <p className="text-xl text-gray-600">
              {subtitulo}
            </p>
          )}
        </div>

        <div className="rounded-2xl bg-linear-to-br from-indigo-50 to-purple-50 p-8 md:p-12">
          <BlocksRenderer
            content={contenido}
            blocks={{
              paragraph: ({ children }) => (
                <p className="mb-8 text-gray-600">{children}</p>
              ),
              heading: ({ children, level }) => {
                const headingClasses: Record<number, string> = {
                  1: 'text-2xl font-bold text-gray-800 mb-6',
                  2: 'text-2xl font-bold text-gray-800 mb-6',
                  3: 'text-2xl font-bold text-gray-800 mb-6',
                  4: 'text-xl font-bold text-gray-800 mb-4',
                  5: 'text-lg font-bold text-gray-800 mb-4',
                  6: 'text-base font-bold text-gray-800 mb-4',
                };
                const className = headingClasses[level];

                switch (level) {
                  case 1:
                    return <h1 className={className}>{children}</h1>;
                  case 2:
                    return <h2 className={className}>{children}</h2>;
                  case 3:
                    return <h3 className={className}>{children}</h3>;
                  case 4:
                    return <h4 className={className}>{children}</h4>;
                  case 5:
                    return <h5 className={className}>{children}</h5>;
                  case 6:
                    return <h6 className={className}>{children}</h6>;
                  default:
                    return <h2 className={className}>{children}</h2>;
                }
              },
              list: ({ children, format }) => {
                if (format === 'unordered') {
                  return (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      {children}
                    </div>
                  );
                }
                return (
                  <ol className="mb-6 list-decimal space-y-2 pl-6">
                    {children}
                  </ol>
                );
              },
              'list-item': ({ children }) => (
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="mt-1 flex-shrink-0 text-indigo-600"
                    size={20}
                  />
                  <p className="text-gray-700">{children}</p>
                </div>
              ),
            }}
            modifiers={{
              bold: ({ children }) => <strong>{children}</strong>,
              italic: ({ children }) => <em>{children}</em>,
              underline: ({ children }) => <u>{children}</u>,
              strikethrough: ({ children }) => <s>{children}</s>,
              code: ({ children }) => (
                <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
                  {children}
                </code>
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
}
