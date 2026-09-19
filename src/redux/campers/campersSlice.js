import { createSlice } from '@reduxjs/toolkit'
import { fetchCamperById, fetchCampers } from './campersOperations'

const initialState = {
  items: [],
  selectedCamper: null,
  loading: false,
  error: null,
  page: 1,
  totalItems: 0,
}

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearSelectedCamper(state) {
      state.selectedCamper = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state, action) => {
        state.loading = true
        state.error = null
        if (action.meta.arg === 1) {
          state.items = []
          state.page = 1
          state.totalItems = 0
        }
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        const { items, total, page } = action.payload
        state.loading = false
        state.items = page === 1 ? items : [...state.items, ...items]
        state.page = page
        state.totalItems = total
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? action.error.message
      })
      .addCase(fetchCamperById.pending, (state) => {
        state.loading = true
        state.error = null
        state.selectedCamper = null
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.loading = false
        state.selectedCamper = action.payload
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload ?? action.error.message
      })
  },
})

export const { clearSelectedCamper } = campersSlice.actions
export default campersSlice.reducer
