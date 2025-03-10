import { Image, Title, Title2 } from './styles'

type Props = {
  restaurante?: Restaurante
}

const Banner = ({ restaurante }: Props) => (
  <Image style={{ backgroundImage: `url(${restaurante?.capa})` }}>
    <div className="container">
      <Title>{restaurante?.tipo}</Title>
      <div>
        <Title2>{restaurante?.titulo}</Title2>
      </div>
    </div>
  </Image>
)
export default Banner
