import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface PaginationType {
  pageSize: number
  pageNumber: number
}

const initialState: PaginationType = { pageSize: 10, pageNumber: 1 }

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<PaginationType>) => {
      state.pageSize = action.payload.pageSize
      state.pageNumber = action.payload.pageNumber
    }
  }
})

export const { setPagination } = paginationSlice.actions
export default paginationSlice.reducer
