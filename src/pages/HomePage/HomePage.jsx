import { useEffect } from 'react'
import Button from '../../components/Button/Button'
import { setPageMeta } from '../../utils/setPageMeta'
import css from './HomePage.module.css'

const HomePage = () => {
  useEffect(() => {
    setPageMeta(
      'TravelTrucks — Campers of your dreams',
      'Find and rent the perfect camper for your next trip. Browse the TravelTrucks catalog.',
    )
  }, [])

  return (
    <section className={css.hero}>
      <div className={css.content}>
        <div className={css.text}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.subtitle}>You can find everything you want in our catalog</p>
        </div>
        <Button to="/catalog">View Now</Button>
      </div>
    </section>
  )
}

export default HomePage
