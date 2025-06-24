import { itemsModel } from "../../DB/models/items";
import ordersModel from "../../DB/models/orders";
import { v4 as uuidv4 } from 'uuid';


export const saveOrder = async (payload: { items: { name: string; quantity: number; categoryId: string }[] }) => {
    const order = await ordersModel.create();

    const itemsToCreate = payload.items.map(item => ({
        id: uuidv4(),
        name: item.name,
        quantity: item.quantity,
        categoryId: item.categoryId,
        orderId: order.dataValues.id,
    }));

    await itemsModel.bulkCreate(itemsToCreate);

    return { orderId: order.dataValues.id, items: itemsToCreate };
};
