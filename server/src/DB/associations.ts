import categoriesModel from "./models/categories";
import { itemsModel } from "./models/items";
import ordersModel from "./models/orders";


export const initAssociations = () => {
    categoriesModel.hasMany(itemsModel, { foreignKey: 'categoryId', as: 'items' });
    itemsModel.belongsTo(categoriesModel, { foreignKey: 'categoryId', as: 'categories' });

    ordersModel.hasMany(itemsModel, { foreignKey: 'orderId', as: 'items' });
    itemsModel.belongsTo(ordersModel, { foreignKey: 'orderId', as: 'orders' });
};