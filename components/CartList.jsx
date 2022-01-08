import styles from './style_modules/cartlist.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import QuantitySelector from './ui/QuantitySelector'
import itemImg from '../public/pasta.jpg'

export const CartItem = ({ item }) => {
  return (
    <div className={ styles.item }>
      <img src={ itemImg.src } alt="item image" />
      <div className={ styles.itemInfo }>
        <h3 className={ styles.itemName }>{ item.title }</h3>
        <div className={ styles.flex }>
          <QuantitySelector />
          <span className={ styles.itemPrice }>{ item.estimatedCost }</span>
        </div>              
      </div>
      <button className={ styles.deleteItemBtn }>
        <FontAwesomeIcon icon={ faTimes } />
      </button>
    </div>
  )
}

export default function CartList({ items }) {
  return (
    <div className="items-list">{ 
      items.map(item => {
        const { node } = item

        const itemInfo = {
          id: node.id,
          handle: node.merchandise.product.handle,
          title: node.merchandise.product.title,
          quantity: node.quantity,
          estimatedCost: `${Math.floor(node.estimatedCost.totalAmount.amount)} ${node.estimatedCost.totalAmount.currencyCode}`
        }

        return <CartItem item={ itemInfo } key={ node.id } />
      })
    }</div>
  )
}