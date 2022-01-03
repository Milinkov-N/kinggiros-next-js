import Link from 'next/link'
import { useContext } from 'react'
import styles from './button.module.css'
import navContext from '../../utils/navContext'

const Button = ({ label, size, color }) => {
  let btnClass = [ styles.btn ]
  const sizeSelector = `btn-${size}`
  const colorSelector = `btn-${color}`

  size ? btnClass.push(styles[sizeSelector]) : btnClass.push(styles['btn-medium'])

  color ? btnClass.push(styles[colorSelector]) : btnClass.push(styles['btn-white'])

  btnClass = btnClass.join(' ')

  return <button className={ btnClass }>{ label }</button>
}

const OpenNav = ({ className }) => {
  const { setOpened } = useContext(navContext)
  const handleOpen = () => setOpened(true)

  return (
    <button className={ `${ styles.btn }  ${ className }` } onClick={ handleOpen }>
      <i aria-hidden className={ `fas fa-bars` }></i>
    </button>
  )
}

const CloseNav = ({ className }) => {
  const { setOpened } = useContext(navContext)
  const handleClose = () => setOpened(false)

  return (
    <button className={ `${ styles.btn } ${ className }` } onClick={ handleClose }>
      <i aria-hidden className={ `fas fa-times` }></i>
    </button>
  )
}

const Cart = ({ className }) => {
  const cartClass = `${ styles.cart } ${ className }`

  return (   
    <Link href="/">
      <a className={ cartClass }>
        <i aria-hidden className="fas fa-shopping-cart"></i>
        <span>450 RUB</span>
      </a>
    </Link>
  )
}

export { Button, Cart, OpenNav, CloseNav }