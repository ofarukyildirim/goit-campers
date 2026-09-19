import { EQUIPMENT, getEngineLabel, getTransmissionLabel, getVehicleTypeName } from '../../constants/features'
import Icon from '../Icon/Icon'
import css from './Features.module.css'

const Badge = ({ icon, label }) => (
  <li className={css.badge}>
    {icon && <Icon name={icon} size={20} />}
    {label}
  </li>
)

const Features = ({ camper, full = false }) => {
  const engine = getEngineLabel(camper.engine)
  const transmission = getTransmissionLabel(camper.transmission)
  const form = getVehicleTypeName(camper.form)

  if (!full) {
    return (
      <ul className={css.list}>
        <Badge icon="petrol" label={engine} />
        <Badge icon="automatic" label={transmission} />
        <Badge icon="alcove" label={form} />
      </ul>
    )
  }

  return (
    <ul className={css.list}>
      <Badge label={transmission} />
      <Badge label={engine} />
      {EQUIPMENT.filter(({ key }) => camper[key]).map(({ key, label }) => (
        <Badge key={key} label={label} />
      ))}
      <Badge label={form} />
    </ul>
  )
}

export default Features
