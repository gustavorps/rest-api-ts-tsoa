"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = exports.ExtendableError = void 0;
const message_1 = __importDefault(require("./message"));
const httpStatus = require('http-status');
/**
 * @extends Error
 */
class ExtendableError extends Error {
    constructor({ message, errors, status, isPublic, stack }) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.errors = errors;
        this.status = status;
        this.isPublic = isPublic;
        this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
        stack = stack;
    }
}
exports.ExtendableError = ExtendableError;
/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
    constructor({ message = message_1.default.MESSAGE.ERROR_DEFAULT, errors, stack, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = false, title = message_1.default.TITLE.ERROR_DEFAULT, }) {
        const options = {
            message,
            errors,
            status,
            isPublic,
            stack,
        };
        super(options);
        this.title = title;
    }
}
exports.APIError = APIError;
