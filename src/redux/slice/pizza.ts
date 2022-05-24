import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPizza } from '../../@types/IPizza';

interface IgetPizza {
  search: string;
  sortRequest: string;
  categoryRequest: string;
}

interface IPizzaSlice {
  pizzas: IPizza[];
  isLoading: boolean;
}

export const getPizza = createAsyncThunk(
  'pizza/fetch',
  async ({ search, sortRequest, categoryRequest }: IgetPizza) => {
    const { data } = await axios.get('https://6282c8d492a6a5e46219b5d4.mockapi.io/pizzas', {
      params: {
        title: search || null,
        sortBy: sortRequest,
        order: 'desc',
        category: categoryRequest,
      },
    });
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
  extraReducers: {
    [getPizza.pending]: (state) => {
      state.isLoading = true;
      state.pizzas = [];
    },
    [getPizza.fulfilled]: (state, action) => {
      state.pizzas = action.payload;
      state.isLoading = false;
    },
  },
});

export default pizza.reducer;
