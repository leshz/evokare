import { GeneralData } from './types';

/**
 * Contenido mínimo con el que renderizar el layout si Strapi no responde.
 *
 * Sin esto, un CMS caído tumba el build entero: el layout raíz envuelve todas
 * las rutas, incluidas las que no consumen el CMS (`/agendar`, `/_not-found`).
 * Preferimos un header y footer degradados antes que un build fallido.
 *
 * `icono` va en null a propósito: `AdaptiveImage` ya resuelve ese caso con un
 * placeholder.
 */
export const GENERAL_FALLBACK = {
  navegacion: {
    id: 0,
    icono: null,
  },
  pie_de_pagina: {
    id: 0,
    columnas: [],
    autor: [],
    invitacion: {
      id: 0,
      titulo: 'Evokare',
      contenido: [],
    },
  },
  menu: [],
  seo: null,
} as unknown as GeneralData;
