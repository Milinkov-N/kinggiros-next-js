import Link from 'next/link'
import styles from './originalheader.module.css'
import logoImg from '../../public/logo.png'
import Container from '../Container'
import { Button } from '../ui/Button'

const Title = () => {
  return (
    <div className={ styles.title }>
      <div>
        <h2>Вкусная еда</h2>
        <h3>И напитки</h3>
      </div>
    </div>
  )
}

const Logo = () => {
  return (
    <Link  href="/">
      <a className={ styles.logo }>
        <img src={ logoImg.src } alt="King Giros logo" />
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
          <i className="fas fa-phone-alt"></i>
        </div>
        <span>8 950 838 99 99</span>
      </a>
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

const OriginalHeader = () => {
  return (
    <header  className={ styles.header }>
      <Container className={ styles.container }>
        <Title />
        <Logo />
        <Delivery />
        <Controls />
      </Container>
    </header>
  )
}

export { OriginalHeader }