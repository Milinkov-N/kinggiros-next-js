import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Container from './layout/Container'
import Button from './ui/Button'
import useNavContext from '../contexts/NavContext'
import OpenCart from './Cart/OpenCart'
import Dropdown from './ui/Dropdown'
import { COLLECTIONS } from '../consts'

import styles from './style_modules/nav.module.css'

const otherPagesLinks = [
  {
    name: 'Работа',
    href: '/work'
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
  const collectionBreakpoint = 8
  
  return (
    <nav 
      className={ `${styles.navigation} ${ opened && styles.navOpened }` }
      ref={el => {
        if (!el) return 

        fixOnScroll(el)
      }}
    >
      <Container className={ styles.container }>
        <ul className={ styles.navigationList }>
          { COLLECTIONS.map((collection, index) => {
            while (index < collectionBreakpoint) {
              return (
                <li key={ collection.name }>
                  <CloseNav
                    className={ styles.link }
                    href={ `/#${collection.handle}` }
                    includeIcon={ false }
                  >
                    { collection.name }
                  </CloseNav>
                </li>
              )
            }
          })}

          <li>
            <Dropdown>{
              COLLECTIONS.map((collection, index) => {
                if (index >= collectionBreakpoint) {
                  return (
                    <Dropdown.Item
                      key={ collection.handle }
                      href={ `/#${collection.handle}` }
                      label={ collection.name }
                    />
                  )
                }
              })
            }</Dropdown>
          </li>

          { otherPagesLinks.map(link => (
            <li key={ link.name }>
              <CloseNav
                className={ styles.link }
                href={ link.href }
                includeIcon={ false }
              >
                { link.name }
              </CloseNav>
            </li>
          )) }
        </ul>
        <OpenCart className={ styles.cart } />
      </Container>
      <CloseNav className={ styles.closeNav } />
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