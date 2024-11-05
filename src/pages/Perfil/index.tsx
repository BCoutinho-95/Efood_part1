import { useEffect, useState } from 'react'
import HeaderHome from '../../components/HeaderHome'
import RestaurantsList from '../../components/RestaurantsList'

export type Restaurant = {
  id: number
  titulo: string
  destacado: true
  tipo: string
  avaliacao: number
  descricao: string
  capa: string

  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Restaurante = () => {
  const [cardapio, setCardapio] = useState<Restaurant[]>([])
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  })

  return (
    <>
      <HeaderHome />
      <RestaurantsList />
    </>
  )
}

export default Restaurante
