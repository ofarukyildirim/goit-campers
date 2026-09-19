import clsx from 'clsx'
import css from './Container.module.css'

const Container = ({ children, className }) => (
  <div className={clsx(css.container, className)}>{children}</div>
)

export default Container
