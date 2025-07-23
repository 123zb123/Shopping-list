import categoriesModel from "./models/categories";

const defaultCategories = ['ירקות', 'פירות', 'בשר ודגים', 'גבינות ומאפים', 'מוצרי ניקיון'];

export const insertDefaultCategories = async () => {
    const count = await categoriesModel.count();
    if (count === 0) {
        const categoriesToCreateInDB = defaultCategories.map(name => ({ name }));
        await categoriesModel.bulkCreate(categoriesToCreateInDB);
        console.log('Default categories inserted');
    } else {
        console.log('Categories already exist, skipping insert');
    }
}