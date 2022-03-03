import { useReducer } from 'react'

export default function useCartReducer() {
  const initState = {
    isOpened: false,
    total: 0,
    subTotal: 0,
    shipping: 0
  }

  function cartReducer(state, action) {
    switch (action.type) {
      case 'SET_OPEN':
        return { ...state, isOpened: true }

      case 'SET_CLOSED':
        return { ...state, isOpened: false }

      default:
        throw new Error(`Unhandled action type: ${ action.type }`)
    }
  }

  return useReducer(cartReducer, initState)
}