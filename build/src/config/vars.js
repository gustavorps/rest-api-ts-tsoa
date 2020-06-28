"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variables = void 0;
require('dotenv-safe').config();
const variables = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
    postgresUser: process.env.POSTGRES_USER,
    postgresPassword: process.env.POSTGRES_PASSWORD,
    postgresDataBase: process.env.POSTGRES_DATA_BASE,
    postgresHost: process.env.POSTGRES_HOST,
    postgresDialect: process.env.POSTGRES_DIALECT
};
exports.variables = variables;
