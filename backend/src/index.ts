import type { Core } from '@strapi/strapi';

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    strapi.db.lifecycles.subscribe({
      models: ['plugin::strapi-mercadopago.order'],
      async beforeCreate(event) {
        const { params } = event;
        strapi.log.info('[strapi-mercadopago::order] beforeCreate — datos recibidos:', {
          products: params.data.products,
          total: params.data.total,
          payment_status: params.data.payment_status,
        });
      },

      async afterCreate(event) {
        const { result } = event;
        strapi.log.info('[strapi-mercadopago::order] afterCreate — orden creada:', {
          id: result.id,
          documentId: result.documentId,
          payment_status: result.payment_status,
          total: result.total,
          preference_id: result.preference_id,
        });
      },

      async beforeUpdate(event) {
        const { params } = event;
        strapi.log.info('[strapi-mercadopago::order] beforeUpdate — cambios entrantes:', {
          where: params.where,
          data: params.data,
        });
      },

      async afterUpdate(event) {
        const { result } = event;
        strapi.log.info('[strapi-mercadopago::order] afterUpdate — orden actualizada:', {
          id: result.id,
          payment_status: result.payment_status,
          shipping_status: result.shipping_status,
          payment_id: result.payment_id,
        });
      },
    });
  },
};
