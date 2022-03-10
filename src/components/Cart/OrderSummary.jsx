import Button from '../ui/Button'
import { useCartState } from '../../contexts/CartContext'

import styles from '../style_modules/ordersummary.module.css'

export default function OrderSummary({ orderDetails }) {
  const state = useCartState()

  return (
    <>
      <div className={ styles.orderSummary }>
        <h3 className={ styles.orderTitle }>Сумма заказа</h3>
        <table className={ styles.summaryTable }>
          <tbody>
            <tr className={ styles.tableRow }>
              <td>Подытог</td>
              <td>{ orderDetails?.subtotal || `${ state.subtotal } RUB` }</td>
            </tr>
            <tr className={ styles.tableRow }>
              <td>Доставка</td>
              <td>{ state.shipping } RUB</td>
            </tr>
            <tr className={ styles.tableRow }>
              <td>Итого</td>
              <td>{ orderDetails?.total || `${ state.total } RUB` }</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button
        className={ styles.checkoutBtn }
        href={ orderDetails?.checkoutUrl || '/checkout' }
        variant='primary'
        label='Оформить заказ'
      />
    </>   
  )
}