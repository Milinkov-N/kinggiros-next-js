import Link from 'next/link'
import styles from './style_modules/nav.module.css'
import Container from './Container'
import Button from './ui/Button'
import useNavContext from '../contexts/NavContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import OpenCart from './OpenCart'

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

const CloseNav = ({ className, children, includeIcon,  href }) => {
  const { setOpened } = useNavContext()
  const handleClose = () => {
    document.body.classList.remove('scroll-lock')
    setOpened(false)
  }

  const RenderIcon = () => {
    if (typeof includeIcon === 'undefined') includeIcon = true
    
    if (!includeIcon) return null

    return <FontAwesomeIcon icon={ faTimes } />
  }

  return (
    <Button
      className={ className }
      variant='text'
      onClick={ handleClose }
      href={ href }
    >
      <RenderIcon />
      { children }
    </Button>
  )
}

export default function Nav() {
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
                <CloseNav
                  className={ styles.link }
                  href={ link.href }
                  includeIcon={ false }
                >
                  { link.name }
                </CloseNav>
              </li>
            )
          })
        }</ul>
        <OpenCart className={ styles.cart } />
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