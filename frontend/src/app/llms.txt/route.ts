import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

const CONTENT = `# Elisa Horta

> Psicóloga clínica en Bogotá, Colombia, con más de 36 años de experiencia. Combina psicología profunda (modelo psicodinámico), enfoque sistémico, Constelaciones Familiares, Terapia Regresiva Reconstructiva (TRR) y PNL para acompañar procesos de salud mental y bienestar emocional. Atiende de forma presencial en Bogotá y también de forma virtual.

## Páginas

- [Inicio](${SITE_URL}/): Presentación general de Elisa Horta y sus servicios de psicoterapia.
- [Acerca de mí](${SITE_URL}/acerca-de-mi): Historia, formación y enfoques terapéuticos de Elisa Horta.
- [Agendar](${SITE_URL}/agendar): Agendar una cita de psicoterapia individual o un taller grupal.
- [Contacto](${SITE_URL}/contacto): Formulario de contacto para consultas.
- [Blog](${SITE_URL}/blogs): Artículos sobre salud mental y bienestar emocional.

## Servicios

- Psicoterapia individual: sesiones de 1 hora, presenciales en Bogotá o virtuales.
- Constelaciones familiares: talleres grupales mensuales de aproximadamente 2 horas.
- Talleres grupales: sesiones quincenales de 2 horas.
`;

export function GET(): Response {
  return new Response(CONTENT, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
