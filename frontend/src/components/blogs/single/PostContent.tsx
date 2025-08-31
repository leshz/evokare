import Image from 'next/image';
interface PostContentProps {
  title: string;
  image: string;
  content?: string;
}

export const PostContent = ({ title, image, content }: PostContentProps) => {
  return (
    <div className="md:col-span-2">
      <Image
        src={image}
        width={400}
        height={80}
        alt={title}
        className="mb-8 h-72 w-full rounded-2xl object-cover"
      />
      <h2 className="mb-4 text-3xl font-bold text-gray-900">{title}</h2>
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
