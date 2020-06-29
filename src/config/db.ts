import { variables } from './vars'
import { Sequelize } from 'sequelize'

const { postgresDataBase, postgresUser, postgresPassword, postgresHost } = variables

export const sequelize = new Sequelize(postgresDataBase, postgresUser, postgresPassword, {
    host: postgresHost,
    dialect: 'postgres',
    dialectOptions: {
        dateStrings: true,
        typeCast: true,
    },
    timezone: 'America/Sao_Paulo'
});
