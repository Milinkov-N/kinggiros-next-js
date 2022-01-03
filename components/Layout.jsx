import { useContext, useState } from 'react'
import navContext from '../utils/navContext'
import style from './layout.module.css'
import { Header } from './Header'
// import { OriginalHeader } from './archive/originalHeader'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  const [opened, setOpened] = useState(false)

  return (
    <div className={ style.layout }>
      <navContext.Provider value={{ opened, setOpened }}>
        <Header />
        <Nav isOpened={ opened } />
      </navContext.Provider>
      { children }
      <Footer />
    </div>
  )
}
