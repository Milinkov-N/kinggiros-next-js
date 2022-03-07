import Head from 'next/head'

import { NavProvider } from '../../contexts/NavContext'
import Header from './Header'
import Nav from '../Nav'
import Footer from './Footer'
import CartModal from '../Cart/CartModal'
import logo from '../../../public/logo_icon.png'

import styles from '../style_modules/layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>King Giros</title>
        <link rel="shortcut icon" href={ logo.src } type="image/x-icon" />
        <script
          src="//code.tidio.co/9uaqcdhnqjsrsyixmnkc3en3ofq3eyoo.js"
          async
          defer
        />
      </Head>
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
    </>
  )
}