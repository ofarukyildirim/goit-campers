import { configureStore } from '@reduxjs/toolkit'
import { FAVORITES_STORAGE_KEY } from '../constants/config'
import { saveToStorage } from '../utils/storage'
import campersReducer from './campers/campersSlice'
import favoritesReducer from './favorites/favoritesSlice'
import filtersReducer from './filters/filtersSlice'

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
})

let previousFavoriteIds = store.getState().favorites.ids
store.subscribe(() => {
  const { ids } = store.getState().favorites
  if (ids === previousFavoriteIds) return
  previousFavoriteIds = ids
  saveToStorage(FAVORITES_STORAGE_KEY, ids)
})
