export default {
  async beforeCreate(event) {
    const { params } = event;
    strapi.log.info('[mensaje-contacto] beforeCreate — datos recibidos:', params.data);
  },

  async afterCreate(event) {
    const { result } = event;
    strapi.log.info('[mensaje-contacto] afterCreate — registro guardado:', {
      id: result.id,
      documentId: result.documentId,
      email: result.email,
      asunto: result.asunto,
    });
  },
};
