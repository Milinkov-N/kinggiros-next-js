import Layout from '../../components/Layout'
import Container from '../../components/Container'
import OrderSummary from '../../components/OrderSummary'
import CartList from '../../components/CartList'
import styles from '../../styles/cartpage.module.css'
import { useEffect, useState } from 'react'
import { createCart, loadCart } from '../../utils'

export default function CartPage(props) {
  const [cartState, setCart] = useState({
    id: null, 
    checkoutUrl: '',
    estimatedCost: {
      subtotal: '',
      total: '',
    },
    lines: [],
  })

  async function getCart() {
    let localCartData = JSON.parse(
      window.localStorage.getItem('cart')
    )

    if(localCartData) {
      const { cart } = await loadCart(localCartData.cartId)

      setCart({
        id: cart.id,
        checkoutUrl: cart.checkoutUrl,
        estimatedCost: {
          subtotal: `${Math.floor(cart.estimatedCost.subtotalAmount.amount)} ${cart.estimatedCost.subtotalAmount.currencyCode}`,
          total: `${Math.floor(cart.estimatedCost.totalAmount.amount)} ${cart.estimatedCost.totalAmount.currencyCode}`,
        },
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

  const orderDetails = {
    checkoutUrl: cartState.checkoutUrl,
    subtotal: cartState.estimatedCost.subtotal,
    total: cartState.estimatedCost.total,
  }

  return (
    <Layout>
      <Container className={ styles.container }>
        <h2 className={ styles.mainTitle }>Корзина</h2>
        <div className={ styles.grid }>
          <CartList items={ cartState.lines } />
          <OrderSummary orderDetails={ orderDetails } />
        </div>
      </Container>
    </Layout>
  )
}