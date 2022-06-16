import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPizza } from '../../@types/IPizza';

interface IPizzaSlice {
  pizzas: IPizza[];
  isLoading: boolean;
}

export const getPizza = createAsyncThunk<IPizza[], Record<string, string>>(
  'pizza/fetch',
  async ({ search, sortRequest, categoryRequest, page }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get<IPizza[]>(
        'https://6282c8d492a6a5e46219b5d4.mockapi.io/pizzas',
        {
          params: {
            page: page || 1,
            limit: 6,
            title: search || null,
            sortBy: sortRequest,
            order: 'desc',
            category: categoryRequest,
          },
        },
      );

      if (data.length === 0) {
        throw new Error('Empty response');
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
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
    });
    builder.addCase(getPizza.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPizza.rejected, (state, action) => {
      alert('произошла ошибка' + action.payload);
      state.isLoading = false;
    });
  },
});

export default pizza.reducer;
