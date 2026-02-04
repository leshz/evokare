import { BlocksRendererCustom } from '@/components/shared/BlocksRendererCustom';
import { BlocksContent } from '@strapi/blocks-react-renderer';

interface PostContentProps {
  articulo: BlocksContent;
}

export const PostContent = ({ articulo }: PostContentProps) => {
  return (
    <div className="md:col-span-2">
      <div
        className="prose max-w-none text-gray-700"
        style={{ whiteSpace: 'pre-line' }}
      >
        <BlocksRendererCustom
          content={articulo}
          classNames={{
            paragraph: 'text-lg leading-relaxed',
            heading: {
              h1: 'text-3xl font-bold mt-8 mb-4',
              h2: 'text-2xl font-bold mt-6 mb-3',
              h3: 'text-xl font-semibold mt-4 mb-2',
            },
            list: {
              ordered: 'list-decimal list-inside',
              unordered: 'list-disc list-inside',
            },
            quote: 'border-l-4 border-gray-300 pl-4 italic text-gray-600',
            code: 'bg-gray-100 p-1 rounded text-sm font-mono',
            image: 'my-6 rounded',
            link: 'text-blue-600 underline hover:text-blue-800',
          }}
        />
      </div>
    </div>
  );
};
