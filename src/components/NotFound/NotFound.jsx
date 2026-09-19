import { useEffect } from 'react'
import { setPageMeta } from '../../utils/setPageMeta'
import Button from '../Button/Button'
import Container from '../Container/Container'
import css from './NotFound.module.css'

const NotFound = () => {
  useEffect(() => {
    setPageMeta('Page not found — TravelTrucks', 'The page you are looking for does not exist.')
  }, [])

  return (
    <Container className={css.wrapper}>
      <p className={css.code}>404</p>
      <h1 className={css.title}>Page not found</h1>
      <p className={css.text}>The page you are looking for does not exist.</p>
      <Button to="/">Back to home</Button>
    </Container>
  )
}

export default NotFound
