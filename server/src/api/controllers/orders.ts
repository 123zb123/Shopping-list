import { Request, Response } from 'express';
import { saveOrder } from '../services/orders';

export const createOrder = async (req: Request, res: Response) => {
    try {
        const order = await saveOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create order', error });
    }
};