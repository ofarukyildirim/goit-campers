import { createSlice } from '@reduxjs/toolkit'

export const initialFilters = {
  location: '',
  form: '',
  engine: '',
  transmission: '',
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  radio: false,
  refrigerator: false,
  microwave: false,
  gas: false,
  water: false,
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilters,
  reducers: {
    setFilters: (_state, action) => ({ ...initialFilters, ...action.payload }),
    resetFilters: () => initialFilters,
  },
})

export const { setFilters, resetFilters } = filtersSlice.actions
export default filtersSlice.reducer
