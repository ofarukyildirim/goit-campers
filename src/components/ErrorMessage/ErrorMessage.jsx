import css from './ErrorMessage.module.css'

const ErrorMessage = ({ message }) => (
  <div className={css.box} role="alert">
    <p className={css.title}>Something went wrong</p>
    <p className={css.message}>{message}</p>
  </div>
)

export default ErrorMessage
