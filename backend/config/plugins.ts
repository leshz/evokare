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
      provider: "strapi-provider-cloudflare-r2",
      providerOptions: {
        accessKeyId: env("CF_ACCESS_KEY_ID"),
        secretAccessKey: env("CF_SECRET_ACCESS_KEY"),
        endpoint: env("CF_ENDPOINT"),
        params: {
          Bucket: env("CF_BUCKET"),
        },
        cloudflarePublicAccessUrl: env("CF_PUBLIC_URL"),
        pool: false,
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
