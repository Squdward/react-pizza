import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilter {
  categoryId: number;
  sortId: number;
  search: string;
  pageNumber: number;
}

const initialState: IFilter = {
  categoryId: 0,
  sortId: 0,
  search: '',
  pageNumber: 1,
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
    changePageNumber: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { changeCategoryId, changeSortId, changeSearch, changePageNumber } = filter.actions;
export default filter.reducer;
