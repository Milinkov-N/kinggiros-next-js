import Link from 'next/link'
import styles from './header.module.css'
import Altstyles from './alt.module.css'
import logoImg from '../public/logo.png'
import crown from '../public/crown.svg'
import Container from './Container'
import { Button, Cart } from './ui/Button'
import Logo from './ui/Logo'

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

// const Logo = () => {
//   return (
//     <a href="/" className={ styles.logo }>
//       <img src={ logoImg.src } alt="King Giros logo" />
//     </a>
//   )
// }

const LogoAlt = () => {
  return (
    <Link href="/">
      <a className={ Altstyles.logo }>
        <img src={ crown.src } width={ 48 } alt="King Giros logo" />
        <span>King Giros</span>
      </a>
    </Link>
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

const DeliveryAlt = () => {
  return (
    <div className={ Altstyles.delivery }>
      <p>Доставка еды <span>Воткинск</span></p>
      <a href="tel:+79508389999" className={ Altstyles.phone }>
        <div className={ Altstyles.iconWrap }>
          <i class="fas fa-phone-alt"></i>
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

const HeaderAlt = () => {
  return (
    <header className={ Altstyles.header }>
      <Container className={ Altstyles.container }>
        <Logo />
        <DeliveryAlt />
        <div className={ Altstyles.btnWrapper }>
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

export { Header, HeaderAlt }  