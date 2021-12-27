import Link from 'next/link'
import styles from '../styles/nav.module.css'
import Container from './Container'
import { Cart } from './Button'

export default function Nav() {
  return (
    <nav className={ styles.navigation } ref={el => {
      if (!el) return
      // fixOnScroll(el)
    }}>
      <Container className={ styles.container }>
        <ul className={ styles.navigationList }>
          <li>
            <Link href='/#shaurma'>
              <a className={ styles.link }>Шаурма</a>
            </Link>
          </li>
          <li>
            <Link href='/#shaurma'>
              <a className={ styles.link }>Пицца</a>
            </Link>
          </li>
          <li>
            <Link href='/#shaurma'>
              <a className={ styles.link }>Чебуреки</a>
            </Link>
          </li>
          <li>
            <Link href='/#shaurma'>
              <a className={ styles.link }>Напитки</a>
            </Link>
          </li>
          <li>
            <Link href='/#shaurma'>
              <a className={ styles.link }>Закуски</a>
            </Link>
          </li>
          <li>
            <Link href='/#shaurma'>
              <a className={ styles.link }>Добавки</a>
            </Link>
          </li>
          <li>
            <Link href='/#shaurma'>
              <a className={ styles.link }>Вкусняшки</a>
            </Link>
          </li>
        </ul>
        <Cart />
      </Container>
    </nav>
  )
}

const fixOnScroll = (element) => {
  window.onscroll = () => {
    const elRectTop = element.getBoundingClientRect().top
    switch (true) {
      case elRectTop <= 0:
        element.classList.add(styles.navFixed)
        break
      case elRectTop > 0: 
        element.classList.remove(styles.navFixed)
        break
    }
  }
}