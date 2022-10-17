import { configureStore } from '@reduxjs/toolkit'
import storeReducer from './storeSlice'
import cartReducer from './cartSlice'

export default configureStore({
  reducer: {
    store: storeReducer,
    cart: cartReducer
  }
})
