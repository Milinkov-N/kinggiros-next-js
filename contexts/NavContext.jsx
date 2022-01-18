import { createContext, useContext } from 'react'
import { useState } from 'react/cjs/react.development'

const NavContext = createContext()

export default function useNavContext() {
  return useContext(NavContext)
}

export const NavProvider = ({ children }) => {
  const [opened, setOpened] = useState(false)

  return (
    <NavContext.Provider value={{ opened, setOpened }}>
      { children }
    </NavContext.Provider>
  )
}