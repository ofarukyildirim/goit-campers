import clsx from 'clsx'
import spriteUrl from '../../assets/icons/sprite.svg?no-inline'
import css from './Icon.module.css'

const DEFAULT_SIZE = 20

const Icon = ({ name, size = DEFAULT_SIZE, filled = false, className }) => (
  <svg
    className={clsx(css.icon, filled && css.filled, className)}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
  >
    <use href={`${spriteUrl}#${name}`} />
  </svg>
)

export default Icon
