module.exports = ({ env }) => {
  if (env('DATABASE_NAME')) {
    return {
      defaultConnection: 'default',
      connections: {
        default: {
          connector: 'bookshelf',
          settings: {
            client: 'mysql',
            host: env('DATABASE_HOST', '127.0.0.1'),
            port: env('DATABASE_PORT', 27017),
            database: env('DATABASE_NAME'),
            username: env('DATABASE_USERNAME'),
            password: env('DATABASE_PASSWORD')
          },
          options: {
            pool: {
              min: 0,
              max: 10,
              idleTimeoutMillis: 300000,
              createTimeoutMillis: 300000,
              acquireTimeoutMillis: 300000
            }
          }
        }
      }
    }
  }
  return {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'bookshelf',
        settings: {
          client: 'sqlite',
          filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        },
        options: {
          useNullAsDefault: true,
        },
      },
    },
  }
};
