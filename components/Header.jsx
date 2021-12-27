import styles from '../styles/header.module.css'
import logoImg from '../public/logo.png'
import Container from './Container'
import { Button, Cart } from './Button'

const Title = () => {
  return (
    <div className={ styles.headerTitle }>
      <div>
        <h2>Вкусная еда</h2>
        <h3>И напитки</h3>
      </div>
    </div>
  )
}

const Logo = () => {
  return (
    <a href="/" className={ styles.logo }>
      <img src={ logoImg.src } alt="King Giros logo" />
    </a>
  )
}

const Delivery = () => {
  return (
    <div className={ styles.deliveryTitle }>
      <p>Доставка еды <span>Воткинск</span></p>
      <a href="tel:+79508389999">8 950 838 99 99</a>
    </div>
  )
}

const Controls = () => {
  return (
    <div className={ styles.controls }>
      <Button
        label='Войти'
        size='small'
        color='white'
      />
    </div>
  )
}

const Header = () => {
  return (
    <header  className={ styles.appHeader }>
      <Container className={ styles.container }>
        <Title />
        <Logo />
        <Delivery />
        <Controls />
      </Container>
    </header>
  )
}

export { Header }  