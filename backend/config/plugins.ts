export default ({ env }) => ({
  "strapi-mercadopago": {
    enabled: true,
    //resolve: './src/plugins/mercadopago-strapi'
  },
  "populate-all": {
    enabled: true,
  },
  seo: {
    enabled: true,
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_ACCESS_SECRET"),
          },
          region: env("AWS_REGION"),
          endpoint: env("AWS_ENDPOINT"),
          forcePathStyle: true,
          params: {
            ACL: env("AWS_ACL", "private"),
            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
            Bucket: env("AWS_BUCKET"),
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
