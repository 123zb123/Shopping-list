import express from 'express';
import cors from 'cors';
import categoryRoutes from './api/routers/categories';
import orderRoutes from './api/routers/orders';
import sequelize from './DB/sequelize';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', async (_req, res) => {
    const isDbConnected = await sequelize.authenticate().then(() => true).catch(() => false);
    res.status(200).json({
        component: 'app',
        message: `Server is running and database connection is ${isDbConnected ? 'healthy' : 'unhealthy'}`,
    });
});

app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);

export default app;