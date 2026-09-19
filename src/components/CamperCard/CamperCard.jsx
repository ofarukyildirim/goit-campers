import { formatPrice } from '../../utils/formatPrice'
import { swapLocationParts } from '../../utils/location'
import Button from '../Button/Button'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import Features from '../Features/Features'
import Icon from '../Icon/Icon'
import Rating from '../Rating/Rating'
import css from './CamperCard.module.css'

const CamperCard = ({ camper }) => {
  const { id, name, price, rating, reviews, location, description, gallery } = camper

  return (
    <article className={css.card}>
      <img
        className={css.image}
        src={gallery[0]?.thumb}
        alt={name}
        width="219"
        height="240"
        loading="lazy"
      />

      <div className={css.info}>
        <div className={css.top}>
          <div className={css.title}>
            <h2 className={css.name}>{name}</h2>
            <div className={css.priceBlock}>
              <FavoriteButton camperId={id} />
              <span className={css.price}>€{formatPrice(price)}</span>
            </div>
          </div>

          <div className={css.meta}>
            <Rating value={rating} reviewsCount={reviews.length} />
            <span className={css.location}>
              <Icon name="map" size={16} />
              {swapLocationParts(location)}
            </span>
          </div>
        </div>

        <p className={css.description}>{description}</p>

        <Features camper={camper} />

        <Button to={`/catalog/${id}`} target="_blank" rel="noopener noreferrer" className={css.more}>
          Show more
        </Button>
      </div>
    </article>
  )
}

export default CamperCard
