import Loader from '../Loader'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

export type Props = {
  restaurantes?: Restaurante[]
  isLoading: boolean
}

const RestaurantsList = ({ restaurantes, isLoading }: Props) => {
  const getTags = (restaurante: Restaurante) => {
    const tags: string[] = []

    if (restaurante.destacado) {
      tags.push('Destaque da semana')
    }

    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }

    return tags
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <Container>
      <div className="container">
        <List>
          {restaurantes?.map((restaurante) => (
            <li key={restaurante.id}>
              <Restaurant
                id={restaurante.id}
                titulo={restaurante.titulo}
                infos={getTags(restaurante)}
                avaliacao={restaurante.avaliacao as number}
                descricao={restaurante.descricao}
                capa={restaurante.capa}
              />
            </li>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default RestaurantsList
