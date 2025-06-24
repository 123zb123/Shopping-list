import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Category {
  id: string;
  name: string;
}

export const fetchCategories = createAsyncThunk(
  'categories/fetch',
  async () => {
    const response = await axios.get<Category[]>('http://localhost:3001/api/categories');
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [] as Category[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (_, action) => {
      return action.payload;
    });
  }
});

export default categoriesSlice.reducer;
