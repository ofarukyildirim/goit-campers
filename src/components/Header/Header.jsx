import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import Logo from '../Logo/Logo'
import css from './Header.module.css'

const NAV_LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/catalog', label: 'Catalog', end: false },
]

const Header = () => (
  <header className={css.header}>
    <Logo />
    <nav aria-label="Main navigation">
      <ul className={css.list}>
        {NAV_LINKS.map(({ to, label, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) => clsx(css.link, isActive && css.active)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default Header
