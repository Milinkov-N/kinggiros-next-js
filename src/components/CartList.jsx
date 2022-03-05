import styles from './style_modules/cartlist.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import QuantitySelector from './ui/QuantitySelector'
import { useCartItems } from '../src/contexts/CartContext'
import { useCartDispatch } from '../src/contexts/CartContext'

export const CartItem = ({ item }) => {
  const [, setItems] = useCartItems()
  const dispatch = useCartDispatch()

  const id = item.id

  const deleteItem = (id) => {
    setItems(items => {
      const item = items.find(el => el.id === id)

      dispatch({
        type: 'REMOVE_FROM_SUBTOTAL',
        payload: item.priceRange.minVariantPrice.amount * item.amount
      })

      const newArr = items.filter(el => el.id !== id)

      return [...newArr]
    })
  } 

  const incrementItemAmount = () => {
    setItems(items => {
      const item = items.find(el => el.id === id)
      const itemPrice = parseInt(Math.floor(item.priceRange.minVariantPrice.amount))

      dispatch({
        type: 'ADD_TO_SUBTOTAL',
        payload: itemPrice
      })

      const newArr = items.filter(el => el.id !== id)

      return [...newArr, {
        ...item,
        amount: item.amount + 1
      }]
    })
  }

  const decrementItemAmount = () => {
    setItems(items => {
      const item = items.find(el => el.id === id)
      const newArr = items.filter(el => el.id !== id)
      const itemPrice = parseInt(Math.floor(item.priceRange.minVariantPrice.amount))

      if (item.amount < 1) return [...newArr]

      dispatch({
        type: 'REMOVE_FROM_SUBTOTAL',
        payload: itemPrice
      })


      if (item.amount === 1) return [...newArr]

      return [...newArr, {
        ...item,
        amount: item.amount - 1
      }]
    })
  }

  const handleOnChange = (e) => {
    const value = parseInt(e.target.value)

    if (isNaN(value)) value = 0

    setItems(items => {
      const item = items.find(el => el.id === id)
      const itemPrice = parseInt(Math.floor(item.priceRange.minVariantPrice.amount))

      dispatch({
        type: 'REMOVE_FROM_SUBTOTAL',
        payload:  itemPrice * item.amount
      })

      dispatch({
        type: 'ADD_TO_SUBTOTAL',
        payload:  itemPrice * value
      })

      const newArr = items.filter(el => el.id !== id)

      return [...newArr, {
        ...item,
        amount: value
      }]
    })
  }

  return (
    <div className={ styles.item }>
      <img src={ item.img } alt="item image" />
      <div className={ styles.itemInfo }>
        <h3 className={ styles.itemName }>{ item.title }</h3>
        <div className={ styles.flex }>
          <QuantitySelector
            quantity={ item.amount }
            increment={ incrementItemAmount }
            decrement={ decrementItemAmount }
            handleOnChange={ handleOnChange }
          />
          <span className={ styles.itemPrice }>{ Math.floor(item.price) * item.amount } RUB</span>
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
            amount: item.amount,
            price: item.priceRange.minVariantPrice.amount,
            img: item.images.edges[0].node.transformedSrc
          }
  
          return <CartItem item={ itemInfo } key={ item.id } />
        })
      }
    </div>
  )
}