import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slice/filterSlice'
import sortSlice from './slice/sortSlice'

const store = configureStore({
	reducer: {
		filter: filterSlice,
		sort: sortSlice
	}
})


export { store }