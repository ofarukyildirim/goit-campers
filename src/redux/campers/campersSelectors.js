export const selectCampers = (state) => state.campers.items
export const selectSelectedCamper = (state) => state.campers.selectedCamper
export const selectLoading = (state) => state.campers.loading
export const selectError = (state) => state.campers.error
export const selectPage = (state) => state.campers.page

export const selectHasNextPage = (state) => state.campers.items.length < state.campers.totalItems
