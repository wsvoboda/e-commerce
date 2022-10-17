import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const isItemInCart = state.items.filter((item) => item.id === action.payload.id)
      if (!isItemInCart?.length) {
        state.items.push({...action.payload, qty: 1})
      }
    },
    removeItem: (state, action) => {
      const remainingItems = state.items.filter((item) => item.id !== action.payload)
      state.items = remainingItems
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer