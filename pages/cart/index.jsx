import Layout from '../../components/Layout'
import Container from '../../components/Container'
import { Button } from '../../components/ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import QuantitySelector from '../../components/ui/QuantitySelector'
import styles from './cartpage.module.css'
import itemImg from '../../public/pasta.jpg'
import { useEffect } from 'react'
import { useState } from 'react'
import { createCart, loadCart } from '../../utils'

export const ItemList = () => {
  return (
    <div className="items-list">
      <div className={ styles.item }>
        <img src={ itemImg.src } alt="item image" />
        <div className={ styles.itemInfo }>
          <h3 className={ styles.itemName }>Шаурма Стандарт</h3>
          <div className={ styles.flex }>
            <QuantitySelector />
            <span className={ styles.itemPrice }>170 RUB</span>
          </div>              
        </div>
        <button className={ styles.deleteItemBtn }>
          <FontAwesomeIcon icon={ faTimes } />
        </button>
      </div>
    </div>
  )
}

export const OrderSummary = () => {
  return (
    <div className={ styles.orderSummary }>
      <h3 className={ styles.orderTitle }>Сумма заказа</h3>
      <table className={ styles.summaryTable }>
        <tbody>
          <tr className={ styles.tableRow }>
            <td>Подытог</td>
            <td>170 RUB</td>
          </tr>
          <tr className={ styles.tableRow }>
            <td>Доставка</td>
            <td>400 RUB</td>
          </tr>
          <tr className={ styles.tableRow }>
            <td>Итого</td>
            <td>570 RUB</td>
          </tr>
        </tbody>
      </table>
      <Button
        color='secondary'
        label='Оформить заказ'
      />
    </div>
  )
}

export default function CartPage(props) {
  const [cart, setCart] = useState({id: null, lines: []})

  async function getCart() {
    let localCartData = JSON.parse(
      window.localStorage.getItem('cart')
    )

    if(localCartData) {
      const { cart } = await loadCart(localCartData.cartId)

      console.log(cart)

      setCart({
        id: cart.id,
        checkoutUrl: cart.checkoutUrl,
        // TODO load this from existing cart
        estimatedCost: cart.estimatedCost.totalAmount.amount,
        lines: cart.lines.edges
      })

      return
    }

    localCartData = await createCart()

    setCart({
      id: localCartData.cartId,
      checkoutUrl: localCartData.checkoutUrl,
      estimatedCost: null,
      lines: []
    })

    window.localStorage.setItem(
      'cart',
      JSON.stringify(localCartData),
    )
  }

  useEffect(() => getCart(), [])

  const emptyCart = () => {
    // TODO 
  }

  return (
    <Layout>
      <Container className={ styles.container }>
        <h2 className={ styles.mainTitle }>Корзина</h2>
        <div className={ styles.grid }>
          <ItemList />
          <OrderSummary />
        </div>
      </Container>
    </Layout>
  )
}