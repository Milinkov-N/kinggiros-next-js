import Link from 'next/link'
import styles from './header.module.css'
import crown from '../public/crown.svg'
import Container from './Container'
import { Button } from './ui/Button'

const Logo = () => {
  return (
    <Link href="/">
      <a className={ styles.logo }>
        <img src={ crown.src } width={ 48 } alt="King Giros logo" />
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
          <i aria-hidden className="fas fa-phone-alt"></i>
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
        <Logo />
        <Delivery />
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