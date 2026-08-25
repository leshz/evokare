import type { Metadata } from 'next';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';
import { SocialLinks } from '@/components/contact/SocialLinks';
import { SectionHeader } from '@/components/shared/SectionHeader';
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
      <div className="mx-auto max-w-xl px-4 py-16">
        <SectionHeader
          as="h1"
          title={data.titulo ?? 'Contáctanos'}
          subtitle={data.subtitulo}
        />
        <ContactForm />
        <ContactInfo informacion_contacto={data.informacion_contacto} />
        <SocialLinks redes={data.redes_sociales ?? []} />
      </div>
    </main>
  );
}
