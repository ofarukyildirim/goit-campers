import CamperCard from '../CamperCard/CamperCard'
import css from './CamperList.module.css'

const CamperList = ({ campers }) => (
  <ul className={css.list}>
    {campers.map((camper) => (
      <li key={camper.id}>
        <CamperCard camper={camper} />
      </li>
    ))}
  </ul>
)

export default CamperList
