import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BookingForm from '../../components/BookingForm/BookingForm'
import Container from '../../components/Container/Container'
import Details from '../../components/Details/Details'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton'
import Gallery from '../../components/Gallery/Gallery'
import Icon from '../../components/Icon/Icon'
import Loader from '../../components/Loader/Loader'
import Rating from '../../components/Rating/Rating'
import Reviews from '../../components/Reviews/Reviews'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { fetchCamperById } from '../../redux/campers/campersOperations'
import { selectError, selectSelectedCamper } from '../../redux/campers/campersSelectors'
import { clearSelectedCamper } from '../../redux/campers/campersSlice'
import { formatPrice } from '../../utils/formatPrice'
import { swapLocationParts } from '../../utils/location'
import { setPageMeta } from '../../utils/setPageMeta'
import css from './CamperDetailsPage.module.css'

const CamperDetailsPage = () => {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const camper = useAppSelector(selectSelectedCamper)
  const error = useAppSelector(selectError)

  useEffect(() => {
    dispatch(fetchCamperById(id))
    return () => {
      dispatch(clearSelectedCamper())
    }
  }, [dispatch, id])

  useEffect(() => {
    if (error) {
      setPageMeta('Camper not available — TravelTrucks', 'This camper could not be loaded.')
    } else if (camper) {
      setPageMeta(`${camper.name} — TravelTrucks`, camper.description)
    }
  }, [error, camper])

  if (error) {
    return (
      <Container className={css.page}>
        <ErrorMessage message={error} />
      </Container>
    )
  }

  if (!camper) {
    return (
      <Container className={css.page}>
        <Loader />
      </Container>
    )
  }

  const { name, price, rating, reviews, location, description, gallery } = camper

  return (
    <Container className={css.page}>
      <div className={css.top}>
        <Gallery images={gallery} name={name} />

        <div className={css.info}>
          <header className={css.header}>
            <div className={css.headline}>
              <div className={css.title}>
                <h1 className={css.name}>{name}</h1>
                <FavoriteButton camperId={camper.id} />
              </div>
              <div className={css.summary}>
                <div className={css.meta}>
                  <Rating value={rating} reviewsCount={reviews.length} />
                  <span className={css.location}>
                    <Icon name="map" size={16} />
                    {swapLocationParts(location)}
                  </span>
                </div>
                <p className={css.price}>€{formatPrice(price)}</p>
              </div>
            </div>
            <p className={css.description}>{description}</p>
          </header>

          <Details camper={camper} />
        </div>
      </div>

      <div className={css.bottom}>
        <Reviews reviews={reviews} />
        <BookingForm />
      </div>
    </Container>
  )
}

export default CamperDetailsPage
