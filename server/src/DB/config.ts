import { Options } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const baseConfig: Options = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: 'mssql',
    dialectOptions: {
        options: { encrypt: false }
    },
    logging: process.env.NODE_ENV === 'production' ? false : (msg) =>
        console.log({ component: 'Sequelize', message: msg }),
};
