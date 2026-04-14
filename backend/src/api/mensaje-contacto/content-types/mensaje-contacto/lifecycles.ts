export default {
  async beforeCreate(event) {
    const { params } = event;
    strapi.log.info("Pending to send email");
  },
};
