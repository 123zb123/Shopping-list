import axios from 'axios';
import { type CartItem } from '../features/cart/cartSlice';

export const submitOrder = async (items: CartItem[]) => {
    try {
        const response = await axios.post('http://localhost:3001/api/orders', { items });
        return response.data;
    } catch (error) {
        console.error('Error submitting order:', error);
        throw error;
    }
};
