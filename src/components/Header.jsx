import Link from 'next/link'
import styles from './style_modules/header.module.css'
import crown from '../public/crown.svg'
import Container from './Container'
import Button from './ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import useNavContext from '../contexts/NavContext'
import OpenCart from './OpenCart'

const Logo = () => {
  return (
    <Link href="/">
      <a className={ styles.logo }>
        <img src={ crown.src } alt='logo' />
        <header className={ styles.logoHeader }>
          <h2>King Giros</h2>
          <span>Доставка №1 в Воткинске!</span>
        </header>
      </a>
    </Link>
  )
}

const Delivery = () => {
  return (
    <div className={ styles.delivery }>
      <p>Доставка еды <span>Воткинск</span></p>
      <a href="tel:+79508389999" className={ styles.phone }>
        <div className={ styles.iconWrap }>
          <FontAwesomeIcon icon={ faPhoneAlt } />
        </div>
        <span>8 950 838 99 99</span>
      </a>
    </div>
  )
}

const OpenNav = ({ className }) => {
  const { setOpened } = useNavContext()
  const handleOpen = () => {
    document.body.classList.add('scroll-lock')
    setOpened(true)
  }

  return (
    <Button className={ `${ styles.openNav } ${ className }` } variant='text' onClick={ handleOpen }>
      <FontAwesomeIcon icon={ faBars } />
    </Button>
  )
}

const Header = () => {
  return (
    <header className={ styles.header }>
      <Container className={ styles.container }>
        <OpenNav className={ styles.openNav } />
        <Logo />
        <Delivery />
        <OpenCart className={ styles.cart } />
        <div className={ styles.btnWrapper }>
          <Button
            label='Войти'
            size='small'
            variant='secondary'
          />
        </div>
      </Container>
    </header>
  )
}

export { Header, Logo, Delivery, OpenNav }  