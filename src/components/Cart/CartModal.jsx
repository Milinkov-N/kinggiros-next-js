import styles from './style_modules/cartmodal.module.css'
import OrderSummary from './OrderSummary'
import CartList from './CartList'
import Button from './ui/Button'
import { useCart } from '../src/contexts/CartContext' 

export default function CartModal() {
  const [state, dispatch] = useCart()

  const handler = () => {
    document.body.classList.remove('scroll-lock')
    dispatch({ type: 'SET_CLOSED' })
  }

  const openedClass = state.isOpened ? styles.opened : styles.closed

  return (
    <div className={ `${ styles.cartModal } ${ openedClass }` }>
      <div className={ styles.grid }>
        <CartModalHeader handler={ handler } />
        <CartList />
        <OrderSummary />
      </div>
    </div>
  )
}

function CartModalHeader({ handler }) {
  return (
    <div className={ styles.flex }>
      <h2 className={ styles.title }>Корзина</h2>
      <Button
        className={ styles.btn }
        variant='text'
        label='Закрыть'
        onClick={ handler }
      />
    </div>
  )
}