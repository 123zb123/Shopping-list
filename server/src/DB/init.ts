import { Sequelize, QueryTypes } from 'sequelize';
import sequelize from './sequelize';
import { baseConfig } from './config';
import { initAssociations } from './associations';

import './models/categories';
import './models/items';
import './models/orders';
import { insertDefaultCategories } from './insertCategories';

const checkDatabaseExists = async (dbName: string): Promise<boolean> => {
    const tempSequelize = new Sequelize({
        ...baseConfig,
        database: 'master',
    });

    try {
        const [result] = await tempSequelize.query(
            `SELECT name FROM sys.databases WHERE name = ?`,
            {
                type: QueryTypes.SELECT,
                replacements: [dbName],
            }
        );
        return (result as any)?.name === dbName;
    } finally {
        await tempSequelize.close();
    }
}

const createDatabase = async (dbName: string): Promise<void> => {
    const tempSequelize = new Sequelize({
        ...baseConfig,
        database: 'master',
    });

    try {
        await tempSequelize.query(`CREATE DATABASE [${dbName}]`);
        console.log({ component: 'Database', message: `Database "${dbName}" created.` });
    } finally {
        await tempSequelize.close();
    }
}

export const initDatabase = async (): Promise<Sequelize> => {
    const dbName = process.env.DB_NAME!;
    const exists = await checkDatabaseExists(dbName);
    if (!exists) await createDatabase(dbName);

    try {
        await sequelize.authenticate();
        initAssociations();
        await sequelize.sync({ alter: true });
        await insertDefaultCategories();
        console.log({ component: 'Database', message: 'Database ready.' });

        return sequelize;
    } catch (error) {
        console.error({ component: 'Database', message: `Initialization error: ${error}` });
        throw error;
    }
}
