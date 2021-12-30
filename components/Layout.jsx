import style from './layout.module.css'
import { Header } from './Header'
import { OriginalHeader } from './archive/originalHeader'
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
