import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilter {
  categoryId: number;
  sortId: number;
  search: string;
}

const initialState: IFilter = {
  categoryId: 0,
  sortId: 0,
  search: '',
};

export const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    changeSortId: (state, action: PayloadAction<number>) => {
      state.sortId = action.payload;
    },
    changeSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { changeCategoryId, changeSortId, changeSearch } = filter.actions;
export default filter.reducer;
