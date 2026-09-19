const PRICE_FRACTION_DIGITS = 2

export const formatPrice = (value) => Number(value).toFixed(PRICE_FRACTION_DIGITS)
