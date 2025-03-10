import { useState } from 'react'
import ProdutoImg from '../../assets/images/pizza.png'

import { ButtonContainer } from '../Button/styles'
import {
  Card,
  TitleCard,
  Descricao,
  ModalContent,
  Description,
  ModalContainer
} from './styles'
import fechar from '../../assets/images/fechar.png'
import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const mock: CardapioItem[] = [
  {
    foto: ProdutoImg,
    id: 1,
    nome: 'Ravioli al Tartufo Nero',
    descricao:
      'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. Cada ravióli é cuidadosamente recheado com uma mistura saborosa de ricota fresca, parmesão e trufas negras raladas, proporcionando uma combinação de texturas suaves e aromas irresistíveis.',
    porcao: '1 a 2 pessoas',
    preco: 0
  }
]

type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

// export type Props = {
//   restaurante: CardapioItem[]
// }

// interface ModalState extends CardapioItem {
//   isVisible: boolean
// }

const Product = ({ id, nome, descricao, porcao, foto, preco }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useDispatch()

  const addToCart = () => {
    const product = { id, nome, descricao, porcao, foto, preco }
    dispatch(add(product))
    setIsVisible(false)
    dispatch(open())
  }

  const showModal = () => {
    if (isVisible) {
      return 'isVisible'
    }
    return ''
  }

  // const [modal, setModal] = useState<ModalState>({
  //   isVisible: false,
  //   foto: '',
  //   id: 1,
  //   nome: '',
  //   descricao: '',
  //   porcao: '',
  //   preco: 0
  // })

  // const closeModal = () => {
  //   setModal({
  //     isVisible: false,
  //     foto: '',
  //     id: 1,
  //     nome: '',
  //     descricao: '',
  //     porcao: '',
  //     preco: 0
  //   })
  // }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 138) {
      return descricao.slice(0, 138) + '...'
    }
    return descricao
  }

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  // const dispatch = useDispatch()

  // const addToCart = () => {
  //   dispatch(add(restaurante))
  //   dispatch(open())
  // }

  return (
    <>
      <>
        {/* <ProductList className="container"> */}
        <Card>
          <img src={foto} />
          <TitleCard>{nome}</TitleCard>
          <Descricao>{getDescricao(descricao)}</Descricao>
          <ButtonContainer onClick={() => setIsVisible(true)}>
            Mais detalhes
          </ButtonContainer>
        </Card>
        {/* </ProductList> */}
        <ModalContainer className={showModal()}>
          <ModalContent>
            <header>
              <img
                src={fechar}
                alt="Ícone de fechar"
                onClick={() => setIsVisible(false)}
              />
            </header>
            <img src={foto} alt={nome} />
            <Description>
              <h4>{nome}</h4>
              <p>
                {descricao}
                <br /> <br /> <span>Serve: de {porcao}</span>
              </p>
              <ButtonContainer onClick={addToCart}>
                Adicionar ao carrinho - {formataPreco(preco)}
              </ButtonContainer>
            </Description>
          </ModalContent>
          <div onClick={() => setIsVisible(false)} className="overlay"></div>
        </ModalContainer>
      </>
    </>
  )
}

export default Product
