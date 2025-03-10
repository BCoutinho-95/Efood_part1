import Banner from '../../components/Banner'
import Header from '../../components/Header'

import { useParams } from 'react-router-dom'

import ProductList from '../../components/ProductList'
import { useGetRestauranteQuery } from '../../services/api'

type Params = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as Params
  const { data: restaurante, isLoading } = useGetRestauranteQuery(id)

  // if (!restaurante) {
  //   return <h3>Carregando...</h3>
  // }
  // const [restaurante, setCardapio] = useState<Restaurante>()

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setCardapio(res))
  // }, [id])

  // if (!restaurante) {
  //   return <h3>Carregando...</h3>
  // }
  return (
    <>
      <Header />
      <Banner restaurante={restaurante} />
      <div className="container">
        <ProductList produtos={restaurante?.cardapio} isLoading={isLoading} />
      </div>
    </>
  )
}

export default Perfil
