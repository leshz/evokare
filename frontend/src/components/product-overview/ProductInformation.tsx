'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ProductInformation as ProductInformationType } from '@/services/productos/types';
import { BlocksRendererCustom } from '@/components/shared/BlocksRendererCustom';

interface ProductInformationProps {
  information: ProductInformationType[];
}

const rendererClassNames = {
  paragraph: 'leading-relaxed text-gray-700 mb-4',
  heading: {
    h1: 'text-2xl font-bold text-gray-900 mb-4',
    h2: 'text-xl font-bold text-gray-900 mb-3',
    h3: 'text-lg font-semibold text-gray-900 mb-2',
    h4: 'text-base font-semibold text-gray-900 mb-2',
    h5: 'text-sm font-semibold text-gray-900 mb-2',
    h6: 'text-sm font-medium text-gray-900 mb-2',
  },
  list: {
    ordered: 'list-decimal list-inside mb-4 space-y-2 text-gray-700',
    unordered: 'list-disc list-inside mb-4 space-y-2 text-gray-700',
  },
};

const rendererColors = { link: 'text-secundario hover:text-terciario' };

export function ProductInformation({ information }: ProductInformationProps) {
  const [openItem, setOpenItem] = useState<number>(0);

  if (!information || information.length === 0) return null;

  return (
    <div className="mt-16 border-t border-gray-100 pt-6">
      <p className="mb-6 text-sm font-medium uppercase tracking-widest text-gray-400 md:px-4">
        Más sobre este producto
      </p>

      {/* Mobile: acordeón — mt aumentado para separar de la zona de compra */}
      <div className="divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm md:hidden">
        {information.map((info, index) => {
          const isOpen = openItem === index;
          return (
            <div key={info.id}>
              <button
                onClick={() => setOpenItem(isOpen ? -1 : index)}
                className={`flex min-h-[56px] w-full items-center justify-between px-6 py-4 text-left transition-colors duration-200 ${
                  isOpen
                    ? 'from-secundario/5 to-terciario/5 bg-gradient-to-r'
                    : 'hover:from-secundario/5 hover:to-terciario/5 hover:bg-gradient-to-r'
                }`}
              >
                <span className="font-medium text-gray-900">{info.title}</span>
                <ChevronDown
                  className={`ml-3 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 py-5">
                    <BlocksRendererCustom
                      content={info.information}
                      classNames={rendererClassNames}
                      colors={rendererColors}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop: tabs full width — altura mínima fija para evitar wrapping inconsistente */}
      <div className="hidden overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm md:block">
        <div className="from-secundario/5 to-terciario/5 flex bg-gradient-to-r p-2">
          {information.map((info, index) => (
            <button
              key={info.id}
              onClick={() => setOpenItem(index)}
              className={`flex min-h-[52px] flex-1 items-center justify-center rounded-xl px-4 py-3 text-center text-sm font-medium leading-tight transition-all duration-300 ${
                openItem === index
                  ? 'from-secundario to-terciario bg-gradient-to-r text-white shadow-md'
                  : 'text-gray-600 hover:bg-white hover:text-gray-900 hover:shadow-sm'
              }`}
            >
              {info.title}
            </button>
          ))}
        </div>
        <div className="p-6">
          {information.map(
            (info, index) =>
              openItem === index && (
                <div key={info.id} className="animate-in fade-in duration-300">
                  <BlocksRendererCustom
                    content={info.information}
                    classNames={rendererClassNames}
                    colors={rendererColors}
                  />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
