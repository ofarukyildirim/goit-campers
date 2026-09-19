export const EQUIPMENT = [
  { key: 'AC', label: 'AC' },
  { key: 'bathroom', label: 'Bathroom' },
  { key: 'kitchen', label: 'Kitchen' },
  { key: 'TV', label: 'TV' },
  { key: 'radio', label: 'Radio' },
  { key: 'refrigerator', label: 'Refrigerator' },
  { key: 'microwave', label: 'Microwave' },
  { key: 'gas', label: 'Gas' },
  { key: 'water', label: 'Water' },
]

export const VEHICLE_TYPES = [
  { value: 'alcove', label: 'Alcove', name: 'Alcove' },
  { value: 'panelTruck', label: 'Panel Van', name: 'Panel truck' },
  { value: 'fullyIntegrated', label: 'Integrated', name: 'Fully integrated' },
  { value: 'semiIntegrated', label: 'Semi Integrated', name: 'Semi integrated' },
]

export const ENGINES = [
  { value: 'diesel', label: 'Diesel' },
  { value: 'petrol', label: 'Petrol' },
  { value: 'hybrid', label: 'Hybrid' },
  { value: 'electric', label: 'Electric' },
]

export const TRANSMISSIONS = [
  { value: 'automatic', label: 'Automatic' },
  { value: 'manual', label: 'Manual' },
]

const findLabel = (options, value, field = 'label') =>
  options.find((option) => option.value === value)?.[field] ?? value

export const getVehicleTypeName = (value) => findLabel(VEHICLE_TYPES, value, 'name')
export const getTransmissionLabel = (value) => findLabel(TRANSMISSIONS, value)
export const getEngineLabel = (value) => findLabel(ENGINES, value)
