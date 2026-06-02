import type { Metadata } from 'next';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';
import { getContactoService } from '@/services/contacto';
import { generateMetadataFromSEO } from '@/services/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await getContactoService();
    if (data?.seo) {
      return generateMetadataFromSEO(data.seo);
    }
  } catch {
    // fall through to default
  }
  return {
    title: 'Contacto',
    description: 'Contáctanos y te responderemos lo antes posible.',
  };
}

export default async function ContactPage() {
  const { data } = await getContactoService();

  return (
    <main className="bg-surface-soft flex flex-col justify-between">
      <section className="mx-auto grid max-w-7xl items-start gap-16 px-6 py-20 sm:px-8 md:grid-cols-2 lg:px-12">
        <div>
          <div className="mb-8 flex items-center space-x-2"></div>
          <h1 className="text-text-primary mb-4 text-4xl leading-tight font-bold sm:text-5xl">
            {data.titulo ?? 'Contáctanos'}
          </h1>
          {data.subtitulo && (
            <p className="text-gray-600 mb-4">{data.subtitulo}</p>
          )}
          <ContactInfo informacion_contacto={data.informacion_contacto} />
        </div>
        <ContactForm redesSociales={data.redes_sociales ?? []} />
      </section>
    </main>
  );
}
