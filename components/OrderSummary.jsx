import styles from './style_modules/ordersummary.module.css'
import { Button } from './ui/Button'

export default function OrderSummary({ orderDetails }) {
  return (
    <div className={ styles.orderSummary }>
      <h3 className={ styles.orderTitle }>Сумма заказа</h3>
      <table className={ styles.summaryTable }>
        <tbody>
          <tr className={ styles.tableRow }>
            <td>Подытог</td>
            <td>{ orderDetails.subtotal }</td>
          </tr>
          <tr className={ styles.tableRow }>
            <td>Доставка</td>
            <td>400 RUB</td>
          </tr>
          <tr className={ styles.tableRow }>
            <td>Итого</td>
            <td>{ orderDetails.total }</td>
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