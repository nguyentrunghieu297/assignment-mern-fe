import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface PopupState {
  [key: string]: boolean
}

const initialState: PopupState = {}

const PopupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<string>) => {
      state[action.payload] = true
    },
    closePopup: (state, action: PayloadAction<string>) => {
      state[action.payload] = false
    }
  }
})

export const { openPopup, closePopup } = PopupSlice.actions
export default PopupSlice.reducer
