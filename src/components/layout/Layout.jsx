import { NavProvider } from '../../contexts/NavContext'
import Header from './Header'
import Nav from '../Nav'
import Footer from './Footer'
import CartModal from '../Cart/CartModal'

import styles from '../style_modules/layout.module.css'

export default function Layout({ children }) {
  return (
    <div className={ styles.layout }>
      <NavProvider>
        <Header />
        <Nav />
      </NavProvider>
      <CartModal />
      <main className={ styles.main }>
        { children }
      </main>
      <Footer />
    </div>
  )
}