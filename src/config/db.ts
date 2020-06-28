import { variables } from './vars'
import { Sequelize } from 'sequelize'

const { postgresDataBase, postgresUser, postgresPassword, postgresHost, postgresDialect } = variables

export const sequelize = new Sequelize(postgresDataBase, postgresUser, postgresPassword, {
    host: postgresHost,
    dialect: 'postgres'
});

export const handleSequelizeConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}