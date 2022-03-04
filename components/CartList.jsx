import styles from './style_modules/cartlist.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import QuantitySelector from './ui/QuantitySelector'
import itemImg from '../public/pasta.jpg'
import { useCartItems } from '../src/contexts/CartContext'

export const CartItem = ({ item }) => {
  return (
    <div className={ styles.item }>
      <img src={ itemImg.src } alt="item image" />
      <div className={ styles.itemInfo }>
        <h3 className={ styles.itemName }>{ item.title }</h3>
        <div className={ styles.flex }>
          <QuantitySelector />
          <span className={ styles.itemPrice }>{ Math.floor(item.price) } RUB</span>
        </div>              
      </div>
      <button className={ styles.deleteItemBtn }>
        <FontAwesomeIcon icon={ faTimes } />
      </button>
    </div>
  )
}

export default function CartList() {
  const [items] = useCartItems()
  return (
    // <div className="items-list">{ 
    //   items.map(item => {
    //     const { node } = item

    //     const itemInfo = {
    //       id: node.id,
    //       handle: node.merchandise.product.handle,
    //       title: node.merchandise.product.title,
    //       quantity: node.quantity,
    //       estimatedCost: `${Math.floor(node.estimatedCost.totalAmount.amount)} ${node.estimatedCost.totalAmount.currencyCode}`
    //     }

    //     return <CartItem item={ itemInfo } key={ node.id } />
    //   })
    // }</div>
    <div className={ styles.itemsList }>
      {
        items.map(item => {  
          const itemInfo = {
            id: item.id,
            handle: item.handle,
            title: item.title,
            quantity: 1,
            price: item.priceRange.minVariantPrice.amount
          }
  
          return <CartItem item={ itemInfo } key={ item.id } />
        })
      }
      <div className={ styles.item }>
        <img src={ itemImg.src } alt="item image" />
        <div className={ styles.itemInfo }>
          <h3 className={ styles.itemName }>Шаурма Стандарт</h3>
          <div className={ styles.flex }>
            <QuantitySelector />
            <span className={ styles.itemPrice }>450 RUB</span>
          </div>              
        </div>
        <button
          className={ styles.deleteItemBtn }
        >
          <FontAwesomeIcon icon={ faTimes } />
        </button>
      </div>
    </div>
  )
}