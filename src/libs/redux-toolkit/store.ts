import paginationSlice from './slices/pagination-slice'
import popupSlice from './slices/popup-slice'
import chosenSlice from './slices/chosen-slice'
import filterSlice from './slices/filter'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    pagination: paginationSlice,
    popup: popupSlice,
    chosen: chosenSlice,
    filter: filterSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
