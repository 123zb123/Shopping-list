import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import categoryRoutes from './api/routers/categories';
import orderRoutes from './api/routers/orders';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/categories', categoryRoutes);
app.use('/api/orders', orderRoutes);

export default app;