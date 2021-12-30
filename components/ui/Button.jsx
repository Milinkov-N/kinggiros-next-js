import Link from 'next/link'
import styles from './button.module.css'

const Button = ({ label, size, color }) => {
  let btnClass = [ styles.btn ]
  const sizeSelector = `btn-${size}`
  const colorSelector = `btn-${color}`

  size ? btnClass.push(styles[sizeSelector]) : btnClass.push(styles['btn-medium'])

  color ? btnClass.push(styles[colorSelector]) : btnClass.push(styles['btn-white'])

  btnClass = btnClass.join(' ')

  return <button className={ btnClass }>{ label }</button>
}

const Cart = () => {
  return (   
    <Link href="/">
      <a className={ styles.cart }>
        <i aria-hidden className="fas fa-shopping-cart"></i>
        <span>450 RUB</span>
      </a>
    </Link>
  )
}

export { Button, Cart }