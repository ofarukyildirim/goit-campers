import { getVehicleTypeName } from '../../constants/features'
import { formatMeasure } from '../../utils/formatMeasure'
import Features from '../Features/Features'
import css from './Details.module.css'

const Details = ({ camper }) => {
  const rows = [
    ['Form', getVehicleTypeName(camper.form)],
    ['Length', formatMeasure(camper.length)],
    ['Width', formatMeasure(camper.width)],
    ['Height', formatMeasure(camper.height)],
    ['Tank', formatMeasure(camper.tank)],
    ['Consumption', formatMeasure(camper.consumption)],
  ]

  return (
    <section className={css.details}>
      <h2 className={css.title}>Vehicle details</h2>
      <Features camper={camper} full />
      <hr className={css.line} />
      <dl className={css.list}>
        {rows.map(([term, value]) => (
          <div key={term} className={css.row}>
            <dt>{term}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Details
