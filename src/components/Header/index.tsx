import { Link } from 'react-router-dom'
import { HeaderBar, Links, LinkCart } from './styles'
import HeaderImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar style={{ backgroundImage: `url(${HeaderImg})` }}>
      <div className="container">
        <nav>
          <Links>
            <li>
              <Link to="/">Restaurantes</Link>
            </li>
          </Links>
        </nav>
        <img src={logo} alt="EPLAY" />
        <LinkCart onClick={openCart}>
          {items.length} - produto(s) no carrinho
        </LinkCart>
      </div>
    </HeaderBar>
  )
}

export default Header
