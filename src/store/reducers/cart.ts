import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardapioItem, Restaurante } from '../../pages/Home'

type CartState = {
  items: CardapioItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // add: (state, action: PayloadAction<CardapioItem>) => {
    //   state.items.push(action.payload)
    // },
    add: (state, action: PayloadAction<CardapioItem>) => {
      const cardapio = state.items.find((item) => item.id === action.payload.id)

      if (!cardapio) {
        state.items.push(action.payload)
      } else {
        alert('O pedido já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
