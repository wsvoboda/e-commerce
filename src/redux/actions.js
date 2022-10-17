import { fillStore } from './storeSlice'

export const getStoreItems = async (dispatch) => {
  const apiItems = await fetch('https://fakestoreapi.com/products')
  const itemsJson = await apiItems.json()
  dispatch(fillStore(itemsJson))
}
