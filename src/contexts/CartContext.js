import { createContext, useContext } from 'react'
import useCartReducer from '../hooks/useCartReducer'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

export default function CartProvider({ children }) {
  const [state, dispatch] = useCartReducer()

  return (
    <CartStateContext.Provider value={ state }>
      <CartDispatchContext.Provider value={ dispatch }>
        { children }
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}

function useCartState() {
  const context = useContext(CartStateContext)

  if (context === undefined) {
    throw new Error('useCartState must be used within an CartProvider')
  }

  return context
}

function useCartDispatch() {
  const context = useContext(CartDispatchContext)

  if (context === undefined) {
    throw new Error('useCartDispatch must be used within an CartProvider')
  }

  return context
}

function useCart() {
  const state = useContext(CartStateContext)
  const dispatch = useContext(CartDispatchContext)

  if (state === undefined || dispatch === undefined) {
    throw new Error('useCart must be used within an CartProvider')
  }
  
  return [state, dispatch]
}

export { useCartState, useCartDispatch, useCart }