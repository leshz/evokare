import type { Metadata } from 'next';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AgendarForm } from '@/components/agendar/AgendarForm';

// Static page with no CMS data: declared explicitly so the root layout's
// flag evaluation does not opt it into dynamic rendering.
export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: { absolute: 'Agendar Cita | Elisa Horta, Psicóloga en Bogotá' },
  description:
    'Agenda tu cita con nuestros especialistas en salud mental y bienestar. Elige la modalidad y el día que mejor se adapte a ti.',
  alternates: { canonical: '/agendar' },
};

export default function AgendarPage() {
  return (
    <main className="bg-surface-soft">
      <div className="mx-auto max-w-xl px-4 py-16">
        <SectionHeader
          as="h1"
          title="Agenda tu cita"
          subtitle="Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita."
        />
        <AgendarForm />
      </div>
    </main>
  );
}
