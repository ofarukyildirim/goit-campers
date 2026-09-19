import { PER_PAGE } from '../constants/config'
import { swapLocationParts } from './location'

const toApiValue = (key, value) => {
  if (typeof value !== 'string') return value
  return key === 'location' ? swapLocationParts(value) : value.trim()
}

export const buildQueryParams = (filters, page) => {
  const params = { page, limit: PER_PAGE }

  Object.entries(filters).forEach(([key, value]) => {
    const apiValue = toApiValue(key, value)
    if (apiValue === '' || apiValue === false) return
    params[key] = apiValue
  })

  return params
}
