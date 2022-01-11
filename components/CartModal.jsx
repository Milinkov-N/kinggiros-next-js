import styles from './style_modules/cartmodal.module.css'
import { useContext } from 'react'
import { cartContext } from '../utils/Contexts'
import OrderSummary from './OrderSummary'
import CartList from './CartList'
import { Button } from './ui/Button'

export default function CartModal({ isOpened }) {
  const {setCartOpened } = useContext(cartContext)

  const handler = () => {
    document.body.classList.remove('scroll-lock')
    setCartOpened(false)
  }

  const openedClass = isOpened ? styles.opened : styles.closed

  return (
    <div className={ `${ styles.cartModal } ${ openedClass }` }>
      <div className={ styles.grid }>
        <div className={ styles.flex }>
          <h2 className={ styles.title }>Корзина</h2>
          <Button
            label='Закрыть'
            onClick={ handler }
          />
        </div>
        <CartList />
        <OrderSummary />
      </div>
    </div>
  )
}