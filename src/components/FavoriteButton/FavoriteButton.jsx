import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { selectIsFavorite } from '../../redux/favorites/favoritesSelectors'
import { toggleFavorite } from '../../redux/favorites/favoritesSlice'
import Icon from '../Icon/Icon'
import css from './FavoriteButton.module.css'

const HEART_SIZE = 24

const FavoriteButton = ({ camperId }) => {
  const dispatch = useAppDispatch()
  const isFavorite = useAppSelector(selectIsFavorite(camperId))

  return (
    <button
      type="button"
      className={clsx(css.button, isFavorite && css.active)}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      onClick={() => dispatch(toggleFavorite(camperId))}
    >
      <Icon name="heart" size={HEART_SIZE} filled={isFavorite} />
    </button>
  )
}

export default FavoriteButton
