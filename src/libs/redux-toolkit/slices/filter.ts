import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type FilterPayloadType = 'filter'

export type PayloadType = {
  key: FilterPayloadType
  value: string[]
}

export interface FilterState {
  value: string
  filter: string[]
}

const initialState: FilterState = { value: '', filter: [] }

const filterSlice = createSlice({
  name: 'filterStudentsClass',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<PayloadType>) => {
      const { key, value } = action.payload
      state[key] = value
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    }
  }
})

export const { setFilter, setSearch } = filterSlice.actions
export default filterSlice.reducer
