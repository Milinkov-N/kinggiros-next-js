import { useState } from 'react'
import navContext , { cartContext } from '../utils/Contexts'
import styles from './style_modules/layout.module.css'
import { Header } from './Header'
// import { OriginalHeader } from './archive/originalHeader'
import Nav from './Nav'
import Footer from './Footer'
import CartModal from './CartModal'

export default function Layout({ children }) {
  const [opened, setOpened] = useState(false)
  const [cartOpened, setCartOpened] = useState(false)

  return (
    <div className={ styles.layout }>
      <cartContext.Provider value={{ cartOpened, setCartOpened }}>
        <navContext.Provider value={{ opened, setOpened }}>
          <Header />
          <Nav isOpened={ opened } />
        </navContext.Provider>
        <CartModal isOpened={ cartOpened } />
        <main className={ styles.main }>
          { children }
        </main>
        <Footer />
      </cartContext.Provider>
    </div>
  )
}
