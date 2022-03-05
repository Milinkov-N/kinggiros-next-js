import { createContext, useContext, useState } from 'react'

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