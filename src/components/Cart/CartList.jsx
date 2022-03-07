import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import QuantitySelector from '../ui/QuantitySelector'
import { useCartItems } from '../../contexts/CartContext'
import useCartItem from '../../hooks/useCartItem'

import styles from '../style_modules/cartlist.module.css'
import Image from 'next/image'

export const CartItem = ({ item }) => {
  const {
    deleteItem,
    incrementItemAmount,
    decrementItemAmount,
    handleOnChange
  } = useCartItem(item)

  return (
    <div className={ styles.item }>
      <div className={ styles.imgWrapper }>
        <Image
          priority
          // className={ styles.img }
          src={ item.img }
          alt={ item.title }
          layout='fill'
          objectFit='contain' 
        />
      </div>
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