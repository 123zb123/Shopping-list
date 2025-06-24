import axios from 'axios';
import { type CartItem } from '../features/cart/cartSlice';

export const submitOrder = async (items: CartItem[]) => {
    const payload = {
        items: items.map(item => ({
            name: item.name,
            quantity: item.quantity,
            categoryId: item.categoryId
        }))
    };

    const response = await axios.post('http://localhost:3001/api/orders', payload);
    return response.data;
};
