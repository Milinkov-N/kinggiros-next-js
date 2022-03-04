import { useReducer } from 'react'

export default function useCartReducer() {
  const initState = {
    isOpened: false,
    total: 400,
    subtotal: 0,
    shipping: 400
  }

  function cartReducer(state, action) {
    switch (action.type) {
      case 'SET_OPEN': {
        return { ...state, isOpened: true }
      }
      
      case 'SET_CLOSED': {
        return { ...state, isOpened: false }
      }
      
      case 'ADD_TO_SUBTOTAL': {
        const newSubtotal = state.subtotal + action?.payload

        return {
          ...state,
          subtotal: newSubtotal,
          total: newSubtotal + state.shipping
        }
      }

      case 'REMOVE_FROM_SUBTOTAL': {
        const newSubtotal = state.subtotal - action?.payload

        return {
          ...state,
          subtotal: newSubtotal,
          total: newSubtotal + state.shipping
        }
      }

      default:
        throw new Error(`Unhandled action type: ${ action.type }`)
    }
  }

  return useReducer(cartReducer, initState)
}