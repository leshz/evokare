import type { BlocksContent } from '@strapi/blocks-react-renderer';
import { BlocksRendererCustom } from '@/components/shared/BlocksRendererCustom';

interface ContactInfoProps {
  informacion_contacto?: BlocksContent;
}

export const ContactInfo = ({ informacion_contacto }: ContactInfoProps) => {
  if (!informacion_contacto) return null;

  return (
    <div className="space-y-2 text-gray-600">
      <BlocksRendererCustom
        content={informacion_contacto}
        classNames={{
          paragraph: 'text-gray-600',
        }}
      />
    </div>
  );
};
