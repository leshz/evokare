import type { Metadata } from 'next';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';
import { getContactoService } from '@/services/contacto';
import { generateMetadataFromSEO } from '@/services/seo';

export const dynamic = 'force-static';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await getContactoService();
    if (data?.seo) {
      return {
        alternates: { canonical: '/contacto' },
        ...generateMetadataFromSEO(data.seo),
      };
    }
  } catch {
    // fall through to default
  }
  return {
    title: 'Contacto',
    description: 'Contáctanos y te responderemos lo antes posible.',
    alternates: { canonical: '/contacto' },
  };
}

export default async function ContactPage() {
  const { data } = await getContactoService();

  return (
    <main className="bg-surface-soft">
      <section className="mx-auto grid max-w-7xl items-start gap-6 px-4 py-12 pb-20 sm:gap-16 sm:px-8 sm:py-28 md:grid-cols-2 lg:px-12">
        <div>
          <h1 className="text-text-primary mb-4 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
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
