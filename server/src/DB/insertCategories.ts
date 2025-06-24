import categoriesModel from "./models/categories";
import { v4 as uuidv4 } from 'uuid';

export const insertDefaultCategories = async () => {
    const count = await categoriesModel.count();
    if (count === 0) {
        const defaultCategories = [
            'ירקות',
            'פירות',
            'בשר ודגים',
            'גבינות ומאפים',
            'מוצרי ניקיון'
        ].map(name => ({ id: uuidv4(), name }));

        await categoriesModel.bulkCreate(defaultCategories);
        console.log('Default categories inserted');
    } else {
        console.log('Categories already exist, skipping insert');
    }
}