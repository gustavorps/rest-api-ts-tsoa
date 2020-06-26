"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = exports.ExtendableError = void 0;
var message_1 = __importDefault(require("./message"));
var httpStatus = require('http-status');
/**
 * @extends Error
 */
var ExtendableError = /** @class */ (function (_super) {
    __extends(ExtendableError, _super);
    function ExtendableError(_a) {
        var message = _a.message, errors = _a.errors, status = _a.status, isPublic = _a.isPublic, stack = _a.stack;
        var _this = _super.call(this, message) || this;
        _this.name = _this.constructor.name;
        _this.message = message;
        _this.errors = errors;
        _this.status = status;
        _this.isPublic = isPublic;
        _this.isOperational = true; // This is required since bluebird 4 doesn't append it anymore.
        stack = stack;
        return _this;
    }
    return ExtendableError;
}(Error));
exports.ExtendableError = ExtendableError;
/**
 * Class representing an API error.
 * @extends ExtendableError
 */
var APIError = /** @class */ (function (_super) {
    __extends(APIError, _super);
    function APIError(_a) {
        var _b = _a.message, message = _b === void 0 ? message_1.default.MESSAGE.ERROR_DEFAULT : _b, errors = _a.errors, stack = _a.stack, _c = _a.status, status = _c === void 0 ? httpStatus.INTERNAL_SERVER_ERROR : _c, _d = _a.isPublic, isPublic = _d === void 0 ? false : _d, _e = _a.title, title = _e === void 0 ? message_1.default.TITLE.ERROR_DEFAULT : _e;
        var _this = this;
        var options = {
            message: message,
            errors: errors,
            status: status,
            isPublic: isPublic,
            stack: stack,
        };
        _this = _super.call(this, options) || this;
        _this.title = title;
        return _this;
    }
    return APIError;
}(ExtendableError));
exports.APIError = APIError;
