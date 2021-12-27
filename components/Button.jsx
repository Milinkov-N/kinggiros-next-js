import styles from '../styles/header.module.css'

const ButtonSmall = ({ label }) => {
  return <button className="btn btn-small">{ label }</button>
}

const ButtonLarge = ({ label }) => {
  return <button className="btn btn-large">{ label }</button>
}

const Cart = () => {
  return (
    <a href="/" className={ styles.cart }>
      <i aria-hidden className="fas fa-shopping-cart"></i>
      <span>450 RUB</span>
    </a>
  )
}

export { ButtonSmall, ButtonLarge, Cart }