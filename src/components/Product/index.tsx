import { useEffect, useState } from 'react'
import ProdutoImg from '../../assets/images/pizza.png'
import banner from '../../assets/images/banner.png'
import { ButtonContainer } from '../Button/styles'
import {
  Card,
  TitleCard,
  Descricao,
  ProductList,
  ModalContent,
  Description,
  ModalContainer
} from './styles'
import fechar from '../../assets/images/fechar.png'
import { CardapioItem, Restaurante } from '../../pages/Home'
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

// import { CardapioItem } from '../../pages/Home'
// import { ButtonContainer } from '../Button/styles'
// import {
//   Card,
//   TitleCard,
//   Descricao,
//   Modal,
//   ModalContent,
//   Description
// } from './styles'
// import fechar from '../../assets/images/fechar.png'

// import { useState } from 'react'

// type Props = {
//   restaurante: CardapioItem
// }

// interface ModalState extends CardapioItem {
//   isVisible: boolean
// }

// const formataPreco = (preco = 0) => {
//   return new Intl.NumberFormat('pt-BR', {
//     style: 'currency',
//     currency: 'BRL'
//   }).format(preco)
// }

// const Product = ({ restaurante }: Props) => {
//   const [modal, setModal] = useState<ModalState>({
//     isVisible: false,
//     foto: '',
//     id: 1,
//     nome: '',
//     descricao: '',
//     porcao: '',
//     preco: 0
//   })

//   const closeModal = () => {
//     setModal({
//       isVisible: false,
//       foto: '',
//       id: 1,
//       nome: '',
//       descricao: '',
//       porcao: '',
//       preco: 0
//     })
//   }

//   const getDescricao = (descricao: string) => {
//     if (descricao.length > 138) {
//       return descricao.slice(0, 138) + '...'
//     }
//     return descricao
//   }
//   return (
//     <>
//       <Card>
//         <img src={restaurante.foto} alt={restaurante.nome} />
//         <TitleCard>{restaurante.nome}</TitleCard>
//         <Descricao>{getDescricao(restaurante.descricao)}</Descricao>
//         <ButtonContainer
//           onClick={() =>
//             setModal({
//               isVisible: true,
//               foto: restaurante.foto,
//               id: restaurante.id,
//               nome: restaurante.nome,
//               descricao: restaurante.descricao,
//               porcao: '',
//               preco: 0
//             })
//           }
//         >
//           Mais detalhes
//         </ButtonContainer>
//       </Card>
//       <Modal className={modal.isVisible ? 'visivel' : ''}>
//         <ModalContent>
//           <header>
//             <img
//               src={fechar}
//               alt="Ícone de fechar"
//               onClick={() => {
//                 closeModal()
//               }}
//             />
//           </header>
//           <img src={restaurante.foto} alt={restaurante.nome} />
//           <Description>
//             <h4>{restaurante.nome}</h4>
//             <p>
//               {restaurante.descricao}
//               <br /> <br /> <span>Serve: de {restaurante.porcao}</span>
//             </p>
//             <ButtonContainer>
//               Adicionar ao carrinho - R${formataPreco(restaurante.preco)}
//             </ButtonContainer>
//           </Description>
//         </ModalContent>
//         <div
//           onClick={() => {
//             closeModal()
//           }}
//           className="overlay"
//         ></div>
//       </Modal>
//     </>
//   )
// }

// export default Product
