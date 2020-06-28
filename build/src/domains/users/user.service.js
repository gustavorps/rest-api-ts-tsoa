"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const User_1 = require("../../models/User");
class UsersService {
    get(id, name) {
        // let userId;
        // let userName;
        // let userCellphone;
        return User_1.User.findAll({ attributes: ['id', 'name', 'cellphone'], where: { id } });
        // .then((result) => result.every((element) => {
        //   userId = element.getDataValue('id')
        //   userName = element.getDataValue('name')
        //   userCellphone = element.getDataValue('cellphone')
        //   console.log({
        //     userId,
        //     userName,
        //     userCellphone
        //   });
        //   return {
        //     userId,
        //     userName,
        //     userCellphone
        //   }
        // }))
    }
    create(userCreationParams) {
        return {
        // id: Math.floor(Math.random() * 10000), // Random
        // status: "Happy",
        // ...userCreationParams,
        };
    }
}
exports.UsersService = UsersService;
