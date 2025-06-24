import { itemsModel } from "../../DB/models/items";
import ordersModel from "../../DB/models/orders";
import { v4 as uuidv4 } from 'uuid';


export const saveOrder = async (items: { name: string; quantity: number; categoryId: string }[]) => {

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const order = await ordersModel.create({
        totalItems: totalItems,
    });

    const itemsToCreate = items.map(item => ({
        id: uuidv4(),
        name: item.name,
        quantity: item.quantity,
        categoryId: item.categoryId,
        orderId: order.dataValues.id,
    }));

    await itemsModel.bulkCreate(itemsToCreate);

    return { orderId: order.dataValues.id, totalOrderItems: totalItems, items: itemsToCreate };
};
