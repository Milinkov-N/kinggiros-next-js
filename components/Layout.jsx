import style from '../styles/layout.module.css'
import { Header } from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className={ style.layout }>
      <Header />
      { children }
      <Footer />
    </div>
  )
}
