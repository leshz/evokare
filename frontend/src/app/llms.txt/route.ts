import { SITE_URL } from '@/lib/site';
import { getBlogsService } from '@/services/blogs';

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

const MAX_PAGES = 50;
const PAGE_SIZE = 100;

const collapse = (text: string): string => text.replace(/\s+/g, ' ').trim();

async function getArticlesSection(): Promise<string> {
  try {
    const lines: string[] = [];
    for (let page = 1; page <= MAX_PAGES; page++) {
      const response = await getBlogsService({ page, pageSize: PAGE_SIZE });
      for (const blog of response.data ?? []) {
        const intro = collapse(blog.introduccion ?? '');
        const link = `[${collapse(blog.titulo)}](${SITE_URL}/blogs/${blog.slug})`;
        lines.push(intro ? `- ${link}: ${intro}` : `- ${link}`);
      }
      const pageCount = response.meta?.pagination?.pageCount ?? 1;
      if (page >= pageCount) break;
    }
    return lines.length > 0 ? `\n## Artículos\n\n${lines.join('\n')}\n` : '';
  } catch (error) {
    console.warn('[llms.txt] No se pudieron cargar los artículos:', error);
    return '';
  }
}

export async function GET(): Promise<Response> {
  const body = CONTENT + (await getArticlesSection());

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
