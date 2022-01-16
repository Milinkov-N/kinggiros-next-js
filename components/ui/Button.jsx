import Link from 'next/link'
import { useContext } from 'react'
import styles from './button.module.css'
import navContext, { cartContext } from '../../utils/Contexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes , faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Button = ({ className, as, label, size, color, href, onClick }) => {
  let btnClass = [ styles.btn ]
  const sizeSelector = `btn-${size}`
  const colorSelector = `btn-${color}`


  className && btnClass.push(className)
  size ? btnClass.push(styles[sizeSelector]) : btnClass.push(styles['btn-medium'])
  color ? btnClass.push(styles[colorSelector]) : btnClass.push(styles['btn-white'])

  btnClass = btnClass.join(' ')

  switch (as) {
    case 'link':
      return (
        <Link href={ href }>
          <a className={ btnClass }>{ label }</a>
        </Link>
      )

    case 'button':
      return <button className={ btnClass } onClick={ onClick }>{ label }</button>

    default:
      return <button className={ btnClass } onClick={ onClick }>{ label }</button>
  }
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
  const { setCartOpened } = useContext(cartContext)
  const { setOpened } = useContext(navContext)

  const handleOpen = () => {
    document.body.classList.add('scroll-lock')
    setCartOpened(true)
    setOpened(false)
  }

  const cartClass = `${ styles.btn } ${ styles.cart } ${ className }`

  return (   
    <button className={ cartClass } onClick={ handleOpen }>
      <FontAwesomeIcon icon={ faShoppingCart } />
      <span>450 RUB</span>
    </button>
  )
}

export { Button, Cart, OpenNav, CloseNav }