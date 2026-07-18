const parse = require('pg-connection-string').parse

// Parse lazily with a safe default so the config file can load when
// DATABASE_URL is absent (e.g. during the Docker image build).
module.exports = ({ env }) => {
  const config = parse(env('DATABASE_URL', ''))

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
      },
      debug: false,
    },
  }
}
