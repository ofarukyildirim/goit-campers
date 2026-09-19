import css from './Loader.module.css'

const Loader = ({ label = 'Loading…' }) => (
  <div className={css.wrapper} role="status" aria-live="polite">
    <span className={css.spinner} aria-hidden="true" />
    <span className={css.label}>{label}</span>
  </div>
)

export default Loader
