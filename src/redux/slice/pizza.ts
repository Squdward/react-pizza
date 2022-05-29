import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPizza } from '../../@types/IPizza';

interface IPizzaSlice {
  pizzas: IPizza[];
  isLoading: boolean;
}

export const getPizza = createAsyncThunk<IPizza[], Record<string, string>>(
  'pizza/fetch',
  async ({ search, sortRequest, categoryRequest }) => {
    const { data } = await axios.get<IPizza[]>(
      'https://6282c8d492a6a5e46219b5d4.mockapi.io/pizzas',
      {
        params: {
          title: search || null,
          sortBy: sortRequest,
          order: 'desc',
          category: categoryRequest,
        },
      },
    );
    return data;
  },
);

const initialState: IPizzaSlice = {
  pizzas: [],
  isLoading: true,
};

export const pizza = createSlice({
  name: 'Pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPizza.pending, (state) => {
      state.isLoading = true;
      state.pizzas = [];
    });

    builder.addCase(getPizza.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.isLoading = false;
    });
  },
});

export default pizza.reducer;
