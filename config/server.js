module.exports = ({ env }) => ({
  host: '0.0.0.0',
  port: 1337,
  production: true,
  proxy: {
    enabled: true,
    ssl: true,
    host: env('HOST', '0.0.0.0'),
    port: 443
  },
  cron: {
    enabled: false
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '19e87cdc2d67988798e41095eaac6d04'),
    },
  },
});
