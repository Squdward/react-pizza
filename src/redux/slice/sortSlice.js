import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sortId: 0
}

export const sort = createSlice({
	name: "sort",
	initialState,
	reducers: {
		changeSortId: (state, action) => {
			state.sortId = action.payload
		}
	}
})

export const { changeSortId } = sort.actions
export default sort.reducer

