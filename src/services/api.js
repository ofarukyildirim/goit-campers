import axios from 'axios'
import { API_URL, REQUEST_TIMEOUT_MS } from '../constants/config'

const api = axios.create({
  baseURL: API_URL,
  timeout: REQUEST_TIMEOUT_MS,
})

export const getCampers = async (params) => {
  const { data } = await api.get('/campers', { params })
  return data
}

export const getCamperById = async (id) => {
  const { data } = await api.get(`/campers/${id}`)
  return data
}
