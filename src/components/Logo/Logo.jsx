import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'

const LOGO_WIDTH = 136
const LOGO_HEIGHT = 16

const Logo = () => (
  <Link to="/" aria-label="TravelTrucks — home">
    <img src={logo} width={LOGO_WIDTH} height={LOGO_HEIGHT} alt="TravelTrucks" />
  </Link>
)

export default Logo
