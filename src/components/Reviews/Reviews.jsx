import Stars from '../Stars/Stars'
import css from './Reviews.module.css'

const Reviews = ({ reviews }) => (
  <section className={css.reviews}>
    <h2 className={css.title}>Reviews</h2>
    <ul className={css.list}>
      {reviews.map(({ reviewer_name: name, reviewer_rating: rating, comment }) => (
        <li key={`${name}-${comment}`} className={css.review}>
          <div className={css.person}>
            <span className={css.avatar} aria-hidden="true">
              {name.charAt(0).toUpperCase()}
            </span>
            <div className={css.name}>
              <p>{name}</p>
              <Stars value={rating} />
            </div>
          </div>
          <p className={css.comment}>{comment}</p>
        </li>
      ))}
    </ul>
  </section>
)

export default Reviews
