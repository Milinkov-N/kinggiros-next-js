import Button from './ui/Button'
import useNavContext from '../contexts/NavContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCart } from '../src/contexts/CartContext'

export default function OpenCart({ className }) {
  const [state, dispatch] = useCart()
  const { setOpened: navSetOpened } = useNavContext()

  const handleOpen = () => {
    document.body.classList.add('scroll-lock')
    dispatch({ type: 'SET_OPEN' })
    navSetOpened(false)
  }

  return (   
    <Button
      className={ className }
      variant='text'
      onClick={ handleOpen }
    >
      <FontAwesomeIcon icon={ faShoppingCart } />
      <span style={{ marginLeft: '.75rem' }}>
        { `${ state.subtotal } RUB` }
      </span>
    </Button>
  )
}
