export const formatMeasure = (value) =>
  String(value)
    .replace(/^([\d.,]+)\s*/, '$1 ')
    .replace(/\s*\/\s*/g, ' / ')
