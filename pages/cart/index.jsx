import Layout from '../../components/Layout'
import Container from '../../components/Container'
import { Button } from '../../components/ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import QuantitySelector from '../../components/ui/QuantitySelector'
import styles from './cartpage.module.css'
import itemImg from '../../public/pasta.jpg'

export default function CartPage(props) {
  return (
    <Layout>
      <Container className={ styles.container }>
        <h2 className={ styles.mainTitle }>Корзина</h2>
        <div className={ styles.grid }>
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
        </div>
      </Container>
    </Layout>
  )
}