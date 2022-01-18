import styles from './style_modules/cartmodal.module.css'
import OrderSummary from './OrderSummary'
import CartList from './CartList'
import Button from './ui/Button'
import useCartContext from '../contexts/CartContext'

export default function CartModal() {
  const { opened, setOpened } = useCartContext()

  const handler = () => {
    document.body.classList.remove('scroll-lock')
    setOpened(false)
  }

  const openedClass = opened ? styles.opened : styles.closed

  return (
    <div className={ `${ styles.cartModal } ${ openedClass  }` }>
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