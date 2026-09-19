import clsx from 'clsx'
import Icon from '../Icon/Icon'
import css from './Stars.module.css'

const MAX_RATING = 5
const STAR_SIZE = 16
const STAR_POSITIONS = Array.from({ length: MAX_RATING }, (_, index) => index + 1)

const Stars = ({ value }) => (
  <span className={css.stars} role="img" aria-label={`Rating: ${value} out of ${MAX_RATING}`}>
    {STAR_POSITIONS.map((position) => (
      <Icon
        key={position}
        name="star"
        size={STAR_SIZE}
        className={clsx(css.star, position <= Math.round(value) && css.active)}
      />
    ))}
  </span>
)

export default Stars
