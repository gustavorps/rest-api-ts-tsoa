"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiError = exports.notFound = exports.converter = exports.handler = void 0;
const APIError_1 = require("../utils/APIError");
const vars_1 = require("../config/vars");
const http_status_1 = __importDefault(require("http-status"));
const message_1 = __importDefault(require("../utils/message"));
const { env } = vars_1.variables;
/**
 * Error handler. Send stacktrace only during development
 * @public
 */
const _handler = (err, req, res, next) => {
    const response = {
        code: err.status || '',
        message: err.message,
        title: err.title || message_1.default.TITLE.ERROR_DEFAULT,
        buttonFirst: err.buttonFirst,
        buttonSecond: err.buttonSecond,
        errors: err.errors,
        stack: err.stack,
    };
    if (env !== 'development') {
        delete response.stack;
    }
    res.status(err.status);
    res.json(response);
};
exports.handler = _handler;
/**
 * If error is not an instanceOf APIError, convert it.
 * @public
 */
const _converter = (err, req, res) => {
    let convertedError = err;
    if (!(err instanceof APIError_1.APIError)) {
        const options = {
            message: err.message,
            status: ((err || {}).response || err).status || err.status || 500,
            stack: err.stack,
        };
        convertedError = new APIError_1.APIError(options);
    }
    return exports.handler(convertedError, req, res, null);
};
exports.converter = _converter;
/**
 * Catch 404 and forward to error handler
 * @public
 */
exports.notFound = (req, res) => {
    const options = {
        message: message_1.default.MESSAGE.ERROR_DEFAULT,
        status: http_status_1.default.NOT_FOUND,
        title: message_1.default.TITLE.ERROR_DEFAULT,
    };
    const err = new APIError_1.APIError(options);
    return exports.handler(err, req, res);
};
exports.apiError = (error, title, message) => new APIError_1.APIError({
    status: ((error || {}).response || {}).status || 500,
    title,
    message,
});
