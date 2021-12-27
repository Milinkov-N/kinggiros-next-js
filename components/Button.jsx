import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/button.module.css'

const Button = ({ label, size, color }) => {
  let btnClass = [ styles.btn ]

  if (size) {
    const selector = `btn-${size}`
    btnClass.push(styles[selector])
  }

  if (color) {
    const selector = `btn-${color}`
    btnClass.push(styles[selector])
  }

  btnClass = btnClass.join(' ')

  return <button className={ btnClass }>{ label }</button>
}

const Cart = () => {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/85b1b8f8c9.js" crossorigin="anonymous"></script>
      </Head>
      <Link href="/">
        <a className={ styles.cart }>
          <i aria-hidden className="fas fa-shopping-cart"></i>
          <span>450 RUB</span>
        </a>
      </Link>
    </>
  )
}

export { Button, Cart }