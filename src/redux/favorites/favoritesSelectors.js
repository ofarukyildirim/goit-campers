export const selectIsFavorite = (id) => (state) => state.favorites.ids.includes(String(id))
