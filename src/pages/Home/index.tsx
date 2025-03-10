import HeaderHome from '../../components/HeaderHome'
import RestaurantsList from '../../components/RestaurantsList'

import { useGetFeaturedRestauranteQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantes, isLoading } = useGetFeaturedRestauranteQuery()

  return (
    <>
      <HeaderHome />
      <RestaurantsList isLoading={isLoading} restaurantes={restaurantes} />
    </>
  )
}

// const [restaurantes, setRestaurante] = useState<Restaurante[]>([])
// useEffect(() => {
//   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
//     .then((res) => res.json())
//     .then((res) => setRestaurante(res))
// }, [])

// if (!restaurantes) {
//   return <h3>Carregando...</h3>
// }

export default Home
