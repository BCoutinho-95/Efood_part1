import Avaliacao from '../Avaliacao'
import { ButtonLink } from '../Button/styles'
import Tag from '../Tag'
import { Card, TitleCard, Descricao, CardSection, Infos, Rate } from './styles'

type Props = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  infos: string[]
}

const Restaurant = ({
  id,
  titulo,
  avaliacao,
  descricao,
  capa,
  infos
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 234) {
      return descricao.slice(0, 234) + '...'
    }
    return descricao
  }
  return (
    <Card>
      <img src={capa} alt={titulo} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <CardSection>
        <TitleCard>{titulo}</TitleCard>
        <Rate>
          <Avaliacao>{avaliacao.toString()}</Avaliacao>
        </Rate>
        <Descricao>{getDescricao(descricao)}</Descricao>
        <ButtonLink to={`/restaurantes/${id}`} title="Saiba mais">
          Saiba mais
        </ButtonLink>
      </CardSection>
    </Card>
  )
}

export default Restaurant
