import { createContext, useContext, useState } from 'react'
import useCartReducer from '../hooks/useCartReducer'

const CartStateContext = createContext()
const CartDispatchContext = createContext()
const CartItemsContext = createContext()

export default function CartProvider({ children }) {
  const [state, dispatch] = useCartReducer()
  const [items, setItems] = useState([])

  return (
    <CartStateContext.Provider value={ state }>
      <CartDispatchContext.Provider value={ dispatch }>
        <CartItemsContext.Provider value={[items, setItems]}>
          { children }
        </CartItemsContext.Provider>
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

function useCartItems() {
  const state = useContext(CartItemsContext)

  if (state === undefined) {
    throw new Error('useCartItems must be used within an CartProvider')
  }

  return state
}

export { useCartState, useCartDispatch, useCart, useCartItems }