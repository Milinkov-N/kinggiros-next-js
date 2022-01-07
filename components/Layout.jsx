import { useState } from 'react'
import navContext from '../utils/navContext'
import styles from './layout.module.css'
import { Header } from './Header'
// import { OriginalHeader } from './archive/originalHeader'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  const [opened, setOpened] = useState(false)

  return (
    <div className={ styles.layout }>
      <navContext.Provider value={{ opened, setOpened }}>
        <Header />
        <Nav isOpened={ opened } />
      </navContext.Provider>
      <main className={ styles.main }>
        { children }
      </main>
      <Footer />
    </div>
  )
}
