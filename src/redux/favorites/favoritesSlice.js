import { createSlice } from '@reduxjs/toolkit'
import { FAVORITES_STORAGE_KEY } from '../../constants/config'
import { loadFromStorage } from '../../utils/storage'

const storedIds = loadFromStorage(FAVORITES_STORAGE_KEY, [])

const initialState = {
  ids: Array.isArray(storedIds) ? storedIds : [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const id = String(action.payload)
      state.ids = state.ids.includes(id)
        ? state.ids.filter((favoriteId) => favoriteId !== id)
        : [...state.ids, id]
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
