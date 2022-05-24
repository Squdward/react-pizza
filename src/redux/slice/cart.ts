import { IPizza } from './../../@types/IPizza';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem extends IPizza {
  type: string;
  count: number;
  size: number;
}

interface ICart {
  items: CartItem[];
  price: number;
  amount: number;
}

const initialState: ICart = {
  items: [],
  price: 0,
  amount: 0,
};

export const cart = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const findItem = state.items.find((item) => item.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.price += action.payload.price;
      state.amount += 1;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      state.price = state.items.reduce((acc, item) => acc + item.price * item.count, 0);
      state.amount = state.items.reduce((acc, item) => acc + item.count, 0);
    },

    decrement: (state, action: PayloadAction<number>) => {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem) {
        findItem.count -= 1;
        state.amount -= 1;

        state.price -= findItem.price;
        if (findItem.count <= 0) {
          state.items = state.items.filter((item) => item.id !== action.payload);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.price = 0;
      state.amount = 0;
    },
  },
});

export const { addItem, removeItem, decrement, clearCart } = cart.actions;
export default cart.reducer;
