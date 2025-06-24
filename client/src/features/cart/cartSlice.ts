import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  name: string;
  categoryId: string;
  quantity: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartItem[],
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existing = state.find(item => item.name === action.payload.name);
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    clearCart: () => []
  }
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
