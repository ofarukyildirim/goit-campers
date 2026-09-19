import { createAsyncThunk } from '@reduxjs/toolkit'
import { HTTP_NOT_FOUND } from '../../constants/config'
import { getCamperById, getCampers } from '../../services/api'
import { buildQueryParams } from '../../utils/buildQueryParams'

const isNotFound = (error) => error.response?.status === HTTP_NOT_FOUND

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (page, { getState, rejectWithValue }) => {
    try {
      const params = buildQueryParams(getState().filters, page)
      const { items, total } = await getCampers(params)
      return { items, total, page }
    } catch (error) {
      if (isNotFound(error)) return { items: [], total: 0, page }
      return rejectWithValue(error.message)
    }
  },
)

export const fetchCamperById = createAsyncThunk(
  'campers/fetchCamperById',
  async (id, { rejectWithValue }) => {
    try {
      return await getCamperById(id)
    } catch (error) {
      return rejectWithValue(isNotFound(error) ? 'Camper not found.' : error.message)
    }
  },
)
