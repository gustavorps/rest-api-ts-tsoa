"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const User_1 = require("../../models/User");
class UsersService {
    get(userCreationParams) {
        return User_1.User.findAll({ attributes: ['id', 'name', 'cellphone'], where: Object.assign({}, userCreationParams) });
    }
    create(userCreationParams) {
        return User_1.User.create(Object.assign({}, userCreationParams));
    }
}
exports.UsersService = UsersService;
