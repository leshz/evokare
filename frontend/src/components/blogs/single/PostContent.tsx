import Image from "next/image";
interface PostContentProps {
  title: string;
  image: string;
  content?: string;
}

export const PostContent = ({ title, image, content }: PostContentProps) => {
  return (
    <div className="md:col-span-2">
      <Image src={image} alt={title} className="rounded-2xl w-full h-72 object-cover mb-8" />
      <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      {content && (
        <div className="prose max-w-none text-gray-700" style={{ whiteSpace: 'pre-line' }}>
          {content}
        </div>
      )}
    </div>
  );
}; 