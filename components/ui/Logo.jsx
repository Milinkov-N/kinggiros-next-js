import Link from 'next/link'
import styles from './logo.module.css'
import crown from '../../public/crown.svg'

export default function Logo() {
  return (
    <Link href="/">
      <a className={ styles.logo }>
        <img src={ crown.src } width={ 48 } alt="King Giros logo" />
        <header className={ styles.header }>
          <h2>King Giros</h2>
          <span>Доставка №1 в Воткинске!</span>
        </header>
      </a>
    </Link>
  )
}