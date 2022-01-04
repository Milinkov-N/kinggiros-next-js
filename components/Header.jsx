import Link from 'next/link'
import styles from './header.module.css'
import crown from '../public/crown.svg'
import Container from './Container'
import { Button, Cart, OpenNav } from './ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
  return (
    <Link href="/">
      <a className={ styles.logo }>
        <img src={ crown.src } alt="King Giros logo" />
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

const Header = () => {
  return (
    <header className={ styles.header }>
      <Container className={ styles.container }>
        <OpenNav className={ styles.openNav } />
        <Logo />
        <Delivery />
        <Cart className={ styles.cart } />
        <div className={ styles.btnWrapper }>
          <Button
            label='Войти'
            size='small'
            color='black'
          />
        </div>
      </Container>
    </header>
  )
}

export { Header, Logo, Delivery }  