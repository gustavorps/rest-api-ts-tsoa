"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
// const sequelize = new Sequelize('sqlite::memory:');
const db_1 = require("../config/db");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    cellphone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    }
}, {
    // Other model options go here
    sequelize: db_1.sequelize,
    modelName: 'User' // We need to choose the model name
});
