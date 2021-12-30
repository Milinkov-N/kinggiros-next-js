import style from './layout.module.css'
import { Header, HeaderAlt } from './Header'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className={ style.layout }>
      <HeaderAlt />
      <Nav />
      { children }
      <Footer />
    </div>
  )
}
