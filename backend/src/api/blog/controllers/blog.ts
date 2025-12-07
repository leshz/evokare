/**
 * blog controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog.blog', ({ strapi }) => ({
  async findOne(ctx) {
    const { id: slug } = ctx.params;
    const { query } = ctx;

    const sanitizedQuery = await this.sanitizeQuery(ctx);

    const entity = await strapi.documents('api::blog.blog').findFirst({
      filters: { slug },
      ...sanitizedQuery,
    });

    if (!entity) {
      return ctx.notFound('Blog not Found');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(sanitizedEntity);
  },
}));
