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
        <BlocksRendererCustom content={articulo} />
      </div>

    </div>
  );
};
