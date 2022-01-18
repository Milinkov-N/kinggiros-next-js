import Button from './ui/Button'
import useCartContext from '../contexts/CartContext'
import useNavContext from '../contexts/NavContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export default function OpenCart({ className }) {
  const { setOpened: cartSetOpened } = useCartContext()
  const { setOpened: navSetOpened } = useNavContext()

  const handleOpen = () => {
    document.body.classList.add('scroll-lock')
    cartSetOpened(true)
    navSetOpened(false)
  }

  return (   
    <Button className={ className } onClick={ handleOpen }>
      <FontAwesomeIcon icon={ faShoppingCart } />
      <span style={{ marginLeft: '.75rem' }}>450 RUB</span>
    </Button>
  )
}
