import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    fillStore: (state, action) => {
      state.items = action.payload
    }
  }
})

export const { fillStore } = storeSlice.actions

export default storeSlice.reducer