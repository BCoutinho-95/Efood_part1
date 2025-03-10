import Loader from '../Loader'
import Product from '../Product'
import { ProductListStyle } from './styles'

type Props = {
  produtos?: CardapioItem[]
  isLoading: boolean
}

const ProductList = ({ produtos, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <ProductListStyle>
      {produtos?.map((produto) => (
        <Product
          key={produto.id}
          id={produto.id}
          descricao={produto.descricao}
          nome={produto.nome}
          foto={produto.foto}
          porcao={produto.porcao}
          preco={produto.preco}
        />
      ))}
    </ProductListStyle>
  )
}

export default ProductList
