import Image from 'next/image';
interface PostContentProps {
  title: string;
  image: string;
  content?: string;
}

export const PostContent = ({ title, image, content }: PostContentProps) => {
  return (
    <div className="md:col-span-2">
      {content && (
        <div
          className="prose max-w-none text-gray-700"
          style={{ whiteSpace: 'pre-line' }}
        >
          {content}
        </div>
      )}
    </div>
  );
};
