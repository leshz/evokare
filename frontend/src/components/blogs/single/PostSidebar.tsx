import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BlogData } from '@/services/blogs/types';

interface PostSidebarProps {
  relacionados: BlogData[];
}

export const PostSidebar = ({ relacionados }: PostSidebarProps) => {
  return (
    <aside className="space-y-8">
      {relacionados.length > 0 && (
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <h3 className="text-text-primary mb-4 text-sm font-semibold uppercase tracking-wide">
            Artículos relacionados
          </h3>
          <ol className="space-y-4">
            {relacionados.map((b, i) => (
              <li
                key={b.slug}
                className="flex items-center justify-between gap-3"
              >
                <span className="text-secundario/40 text-lg font-bold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 text-sm font-medium text-gray-900">
                  {b.titulo}
                </span>
                <Link
                  href={`/blogs/${b.slug}`}
                  className="text-secundario hover:text-terciario shrink-0 rounded-full p-1.5 transition-colors"
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="bg-secundario flex flex-col items-center justify-center rounded-2xl p-6 text-center text-white">
        <div className="mb-1 text-sm text-white/80">
          Estamos para ayudarte
        </div>
        <div className="mb-4 text-lg font-bold">
          Comienza tu camino de sanación
        </div>
        <Link
          href="/contacto"
          className="bg-principal text-secundario rounded-full px-6 py-2 text-sm font-medium transition-colors hover:bg-white"
        >
          Contáctanos
        </Link>
      </div>
    </aside>
  );
};
