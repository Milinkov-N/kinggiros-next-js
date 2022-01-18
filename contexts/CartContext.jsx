import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export default function useCartContext() {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const [opened, setOpened] = useState(false)
  return (
    <CartContext.Provider value={{ opened, setOpened }}>
      { children }
    </CartContext.Provider>
  )
}