import { Sequelize } from 'sequelize';
import { baseConfig } from './config';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize({
  ...baseConfig,
  database: process.env.DB_NAME,
});

export default sequelize;
