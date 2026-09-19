import { useEffect } from 'react'
import Button from '../../components/Button/Button'
import CamperList from '../../components/CamperList/CamperList'
import Container from '../../components/Container/Container'
import EmptyState from '../../components/EmptyState/EmptyState'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import FilterBar from '../../components/FilterBar/FilterBar'
import Icon from '../../components/Icon/Icon'
import Loader from '../../components/Loader/Loader'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { fetchCampers } from '../../redux/campers/campersOperations'
import {
  selectCampers,
  selectError,
  selectHasNextPage,
  selectLoading,
  selectPage,
} from '../../redux/campers/campersSelectors'
import { selectFilters } from '../../redux/filters/filtersSelectors'
import { resetFilters } from '../../redux/filters/filtersSlice'
import { setPageMeta } from '../../utils/setPageMeta'
import css from './CatalogPage.module.css'

const FIRST_PAGE = 1

const CatalogPage = () => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector(selectFilters)
  const campers = useAppSelector(selectCampers)
  const loading = useAppSelector(selectLoading)
  const error = useAppSelector(selectError)
  const page = useAppSelector(selectPage)
  const hasNextPage = useAppSelector(selectHasNextPage)

  useEffect(() => {
    setPageMeta(
      'Catalog — TravelTrucks',
      'Browse TravelTrucks campers. Filter by location, camper form, engine and transmission.',
    )
  }, [])

  useEffect(() => {
    dispatch(fetchCampers(FIRST_PAGE))
  }, [dispatch, filters])

  const handleLoadMore = () => dispatch(fetchCampers(page + 1))
  const handleResetFilters = () => dispatch(resetFilters())

  const isEmpty = !loading && !error && campers.length === 0

  return (
    <Container className={css.page}>
      <FilterBar />

      <section className={css.results} aria-label="Campers">
        {campers.length > 0 && <CamperList campers={campers} />}
        {error && <ErrorMessage message={error} />}
        {isEmpty && (
          <EmptyState
            title="No campers found"
            lines={[
              "We couldn't find any campers that match your filters.",
              "Try adjusting your search or clearing some filters.",
            ]}
          >
            <Button variant="outline" onClick={handleResetFilters}>
              <Icon name="close" size={24} />
              Clear filters
            </Button>
            <Button onClick={handleResetFilters}>View all campers</Button>
          </EmptyState>
        )}
        {loading && <Loader />}
        {hasNextPage && !loading && (
          <Button variant="outline" onClick={handleLoadMore} className={css.loadMore}>
            Load more
          </Button>
        )}
      </section>
    </Container>
  )
}

export default CatalogPage
