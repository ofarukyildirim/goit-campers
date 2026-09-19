import Icon from '../Icon/Icon'
import css from './Rating.module.css'

const STAR_SIZE = 16

const Rating = ({ value, reviewsCount }) => (
  <span className={css.rating}>
    <Icon name="star" size={STAR_SIZE} className={css.star} />
    {value}({reviewsCount} {reviewsCount === 1 ? 'Review' : 'Reviews'})
  </span>
)

export default Rating
