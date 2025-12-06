'use client';

import { BlocksRendererCustom } from '@/components/shared/BlocksRendererCustom';
import { BioSection } from '@/services/nosotros/types';

interface AboutBioProps {
  data: BioSection;
}

export function AboutBio({ data }: AboutBioProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            {data.titulo}
          </h2>
          <div className="bg-secundario mx-auto h-1 w-24"></div>
        </div>

        <div className="space-y-8 text-lg leading-relaxed">
          <BlocksRendererCustom
            content={data.biografia}
            classNames={{
              paragraph: 'text-center text-gray-600 first:font-medium first:text-gray-700',
            }}
          />
        </div>
      </div>
    </section>
  );
}
