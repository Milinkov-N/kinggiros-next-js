import Link from 'next/link'
import styles from './style_modules/nav.module.css'
import Container from './Container'
import { Cart, CloseNav } from './ui/Button'
import useNavContext from '../contexts/NavContext'

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
  {
    name: 'Обратная связь',
    href: '/contact-us'
  },
]

export default function Nav({ isOpened }) {
  const { opened } = useNavContext()
  
  return (
    <nav 
      className={ `${styles.navigation} ${ opened && styles.navOpened }` }
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
                <CloseNav includeIcon={ false }>
                  <Link href={ link.href }>
                    <a className={ styles.link }>{ link.name }</a>
                  </Link>
                </CloseNav>
              </li>
            )
          })
        }</ul>
        <Cart className={ styles.cart } />
        <CloseNav className={ styles.closeNav } />
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