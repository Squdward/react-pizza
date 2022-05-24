import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slice/filter';
import cartSlices from './slice/cart';
import pizzaSlice from './slice/pizza';

const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlices,
    pizza: pizzaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); //
export { store };
