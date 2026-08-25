import { cache } from 'react';

import { get } from '../restclient';
import { GeneralgResponse } from './types';
import { STRAPI_API_PATHS } from '@/constants';

/**
 * `cache()` deduplica la llamada dentro de un mismo render: el layout raíz la
 * invoca dos veces (generateMetadata y el propio render) y sin esto serían dos
 * peticiones reales a Strapi por cada request.
 */
export const getGeneralService = cache(async () => {
  const generalResponse = await get<GeneralgResponse['data']>(
    STRAPI_API_PATHS.GENERAL
  );
  return generalResponse;
});
