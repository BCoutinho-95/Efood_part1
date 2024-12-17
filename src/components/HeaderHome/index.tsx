import HeaderImg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'
import { HeaderBar, Title } from './styles'

const HeaderHome = () => (
  <HeaderBar style={{ backgroundImage: `url(${HeaderImg})` }}>
    <div className="container">
      <img src={logo} alt="EPLAY" />
      <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
    </div>
  </HeaderBar>
)

export default HeaderHome
