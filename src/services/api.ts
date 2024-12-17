import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardapioItem, Restaurante } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurante: builder.query<Restaurante[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurante: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getRpgGames: builder.query<CardapioItem[], void>({
      query: () => 'restaurantes'
    })
  })
})

export const {
  useGetFeaturedRestauranteQuery,
  useGetRestauranteQuery,
  useGetRpgGamesQuery
} = api

export default api
