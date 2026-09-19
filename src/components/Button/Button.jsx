import clsx from 'clsx'
import { Link } from 'react-router-dom'
import css from './Button.module.css'

const Button = ({
  to,
  variant = 'primary',
  type = 'button',
  fullWidth = false,
  className,
  children,
  ...rest
}) => {
  const classes = clsx(css.button, css[variant], fullWidth && css.fullWidth, className)

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
