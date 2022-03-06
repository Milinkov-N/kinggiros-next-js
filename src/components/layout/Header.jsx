import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import logoImg from '../../../public/logo_2022.png'
import Container from './Container'
import Button from '../ui/Button'
import OpenCart from '../Cart/OpenCart'

import styles from '../style_modules/header.module.css'

export default function OriginalHeader() {
  return (
    <header  className={ styles.header }>
      <Container className={ styles.container }>
        {/* <OpenNav className={ styles.openNav } /> */}

        <div className={ styles.title }>
          <div>
            <h2>Вкусная еда</h2>
            <h3>И напитки</h3>
          </div>
        </div>

        <Link  href="/">
          <a className={ styles.logo }>
            <img src={ logoImg.src } alt="King Giros logo" />
          </a>
        </Link>

        <div className={ styles.delivery }>
          <p>Доставка еды <span>Воткинск</span></p>
          <a href="tel:+79508389999" className={ styles.phone }>
            <div className={ styles.iconWrap }>
              <FontAwesomeIcon className={ styles.icon } icon={ faPhoneAlt }/>
            </div>
            <span>8 950 838 99 99</span>
          </a>
        </div>

        <div className={ styles.controls }>
          <OpenCart className={ styles.cart } />
          <Button
            variant='secondary'
            label='Войти'
            size='small'
          />
        </div>
      </Container>
    </header>
  )
}