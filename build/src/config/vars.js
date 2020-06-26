"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.variables = void 0;
require('dotenv-safe').config();
var variables = {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev'
};
exports.variables = variables;
