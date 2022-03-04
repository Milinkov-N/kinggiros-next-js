import styles from './style_modules/cartlist.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import QuantitySelector from './ui/QuantitySelector'
import { useCartItems } from '../src/contexts/CartContext'
import { useCartDispatch } from '../src/contexts/CartContext'

export const CartItem = ({ item }) => {
  const [, setItems] = useCartItems()
  const dispatch = useCartDispatch()

  const deleteItem = (id) => {
    setItems(items => {
      const item = items.find(el => el.id === id)
      console.log(item);
      dispatch({ type: 'REMOVE_FROM_SUBTOTAL', payload: item.priceRange.minVariantPrice.amount * item.amount })

      const newArr = items.filter(el => el.id !== id)

      return [...newArr]
    })
  } 

  return (
    <div className={ styles.item }>
      <img src={ item.img } alt="item image" />
      <div className={ styles.itemInfo }>
        <h3 className={ styles.itemName }>{ item.title }</h3>
        <div className={ styles.flex }>
          <QuantitySelector />
          <span className={ styles.itemPrice }>{ Math.floor(item.price) } RUB</span>
        </div>              
      </div>
      <button
        className={ styles.deleteItemBtn }
        onClick={ () => deleteItem(item.id) }
      >
        <FontAwesomeIcon icon={ faTimes } />
      </button>
    </div>
  )
}

export default function CartList() {
  const [items] = useCartItems()

  return (
    <div className={ styles.itemsList }>
      {
        items.map(item => {  
          const itemInfo = {
            id: item.id,
            handle: item.handle,
            title: item.title,
            quantity: 1,
            price: item.priceRange.minVariantPrice.amount,
            img: item.images.edges[0].node.transformedSrc
          }
  
          return <CartItem item={ itemInfo } key={ item.id } />
        })
      }
    </div>
  )
}