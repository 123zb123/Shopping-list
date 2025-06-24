import { Request, Response } from 'express';
import { fetchCategories } from '../services/categories';

export const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await fetchCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch categories', error });
    }
};