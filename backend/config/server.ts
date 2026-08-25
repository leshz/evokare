export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('PUBLIC_DOMAIN', ''),
  mcp: {
    enabled: env.bool('MCP_ENABLED', false),
  },
});
