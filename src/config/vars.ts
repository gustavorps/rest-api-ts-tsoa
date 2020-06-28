require('dotenv-safe').config()

const variables: any = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  postgresUser: process.env.POSTGRES_USER,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  postgresDataBase: process.env.POSTGRES_DATA_BASE,
  postgresHost: process.env.POSTGRES_HOST,
  postgresDialect: process.env.POSTGRES_DIALECT
}

export { variables }