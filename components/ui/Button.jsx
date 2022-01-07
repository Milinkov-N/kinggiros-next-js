import Link from 'next/link'
import { useContext } from 'react'
import styles from './button.module.css'
import navContext from '../../utils/navContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes , faShoppingCart } from '@fortawesome/free-solid-svg-icons'

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
  const handleOpen = () => {
    document.body.classList.add('scroll-lock')
    setOpened(true)
  }

  return (
    <button className={ `${ styles.btn }  ${ className }` } onClick={ handleOpen }>
      <FontAwesomeIcon icon={ faBars } />
    </button>
  )
}

const CloseNav = ({ className, children, includeIcon }) => {
  const { setOpened } = useContext(navContext)
  const handleClose = () => {
    document.body.classList.remove('scroll-lock')
    setOpened(false)
  }

  const RenderIcon = () => {
    if (typeof includeIcon === 'undefined') includeIcon = true
    
    if (!includeIcon) return null

    return <FontAwesomeIcon icon={ faTimes } />
  }

  return (
    <button className={ `${ styles.btn } ${ className }` } onClick={ handleClose }>
      <RenderIcon />
      { children }
    </button>
  )
}

const Cart = ({ className }) => {
  const cartClass = `${ styles.cart } ${ className }`

  return (   
    <Link href="/cart">
      <a className={ cartClass }>
        <FontAwesomeIcon icon={ faShoppingCart } />
        <span>450 RUB</span>
      </a>
    </Link>
  )
}

export { Button, Cart, OpenNav, CloseNav }