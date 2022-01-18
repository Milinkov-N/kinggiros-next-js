import { NavProvider } from '../contexts/NavContext'
import { CartProvider } from '../contexts/CartContext'
import styles from './style_modules/layout.module.css'
import { Header } from './Header'
// import { OriginalHeader } from './archive/originalHeader'
import Nav from './Nav'
import Footer from './Footer'
import CartModal from './CartModal'

export default function Layout({ children }) {
  return (
    <div className={ styles.layout }>
      <CartProvider>
        <NavProvider>
          <Header />
          <Nav />
        </NavProvider>
        <CartModal />
        <main className={ styles.main }>
          { children }
        </main>
        <Footer />
      </CartProvider>
    </div>
  )
}
