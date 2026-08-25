import type { Metadata } from 'next';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AgendarForm } from '@/components/agendar/AgendarForm';

export const metadata: Metadata = {
  title: 'Agendar Cita',
  description:
    'Agenda tu cita con nuestros especialistas en salud mental y bienestar. Elige la modalidad y el día que mejor se adapte a ti.',
  alternates: { canonical: '/agendar' },
};

export default function AgendarPage() {
  return (
    <main className="bg-surface-soft">
      <div className="mx-auto max-w-xl px-4 py-16">
        <SectionHeader
          title="Agenda tu cita"
          subtitle="Completa el formulario y nos pondremos en contacto contigo para confirmar tu cita."
        />
        <AgendarForm />
      </div>
    </main>
  );
}
