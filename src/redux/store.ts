import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterSlice from './slice/filter';
import cartSlices from './slice/cart';
import pizzaSlice from './slice/pizza';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  filter: filterSlice,
  cart: cartSlices,
  pizza: pizzaSlice,
});

// Конфиг для хранения стора внутри localstorage
const persistConfig = {
  key: 'Test',
  storage,
  whitelist: ['cart'],
};

// Мутированный редусер
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const persistor = persistStore(store); // Экспортируем измененный стор
export { store }; // Экспортируем оригинальный стор
