import style from '../styles/layout.module.css'
import { Header } from './Header'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className={ style.layout }>
      <Header />
      <Nav />
      { children }
      <Footer />
    </div>
  )
}
