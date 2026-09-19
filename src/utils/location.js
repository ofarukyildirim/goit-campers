export const swapLocationParts = (location) =>
  location
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean)
    .reverse()
    .join(', ')
