import { BlocksRendererCustom } from '@/components/shared/BlocksRendererCustom';
import { BlocksContent } from '@strapi/blocks-react-renderer';

interface PostContentProps {
  articulo: BlocksContent;
}

export const PostContent = ({ articulo }: PostContentProps) => {
  return (
    <div className="md:col-span-2">
      <div className="prose max-w-none text-gray-700">
        <BlocksRendererCustom
          content={articulo}
          classNames={{
            paragraph: 'text-lg leading-relaxed mb-6',
            heading: {
              h1: 'text-3xl font-bold mt-10 mb-4 text-text-primary',
              h2: 'text-2xl font-bold mt-8 mb-3 text-text-primary',
              h3: 'text-xl font-semibold mt-6 mb-2 text-text-primary',
            },
            list: {
              ordered: 'list-decimal list-inside mb-6 space-y-2',
              unordered: 'list-disc list-inside mb-6 space-y-2',
            },
            quote:
              'border-l-4 border-secundario pl-6 py-2 my-6 italic text-gray-600 bg-surface-soft rounded-r-lg',
            code: 'bg-gray-100 p-1 rounded text-sm font-mono',
            image: 'my-8 rounded-xl',
            link: 'text-secundario underline hover:text-terciario',
          }}
        />
      </div>
    </div>
  );
};
