import { createContext } from 'react'

const navContext = createContext({
  opened: false,
  setOpened: open => {},
})

const cartContext = createContext({
  opened: false,
  setOpened: open => {},
})

export default navContext
export { cartContext }