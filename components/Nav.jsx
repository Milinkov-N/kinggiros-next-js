import Link from 'next/link'
import styles from './nav.module.css'
import Container from './Container'
import { Cart } from './ui/Button'

const LINKS = [
  {
    name: 'Шаурма',
    href: '/#shaurma'
  },
  {
    name: 'Пицца',
    href: '/#pizza'
  },
  {
    name: 'Бургеры',
    href: '/#burgers'
  },
  {
    name: 'Чебуреки',
    href: '/#chebureki'
  },
  {
    name: 'Напитки',
    href: '/#beverages'
  },
  {
    name: 'Закуски',
    href: '/#snacks'
  },
  {
    name: 'Добавки',
    href: '/#addons'
  },
  {
    name: 'Вкусняшки',
    href: '/#tasties'
  },
]

export default function Nav() {
  return (
    <nav 
      className={ styles.navigation }
      ref={el => {
        if (!el) return 

        fixOnScroll(el)
      }}
    >
      <Container className={ styles.container }>
        <ul className={ styles.navigationList }>{ 
          LINKS.map(link => {
            return (
              <li key={ link.name }>
                <Link href={ link.href }>
                  <a className={ styles.link }>{ link.name }</a>
                </Link>
              </li>
            )
          })
        }</ul>
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