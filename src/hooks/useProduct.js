import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faPepperHot } from '@fortawesome/free-solid-svg-icons'

import { useCartItems } from '../contexts/CartContext'
import { useCartDispatch } from '../contexts/CartContext'

export default function useProduct(product, styles) {
  const [, setItems] = useCartItems()
  const dispatch = useCartDispatch()

  const [quantity, setQuantity] = useState(1)

  // const increment = () => setQuantity(quantity => quantity + 1)
  // const decrement = () => setQuantity(quantity => {
  //   if (quantity === 1) return 1
  //   return quantity - 1
  // })

  const price = Math.floor(product.priceRange.minVariantPrice.amount)

  const setTags = (tags) => {
    const output = []

    for (const tag of tags) {
      switch (tag) {
        case 'spicy': {
          output.push(
            <FontAwesomeIcon
              key={ tag }
              className={ styles.spicy }
              icon={ faPepperHot }
            />
          )
          break
        }
        case 'vegetarian': {
          output.push(
            <FontAwesomeIcon
              key={ tag }
              className={ styles.vegetarian }
              icon={ faLeaf }
            />
          )
          break
        }
      }
    }

    return output
  }

  const handleAddToCart = (productId, quantity) => {
    setItems(items => {
      let sameItemindex
      const isSameItem = items.find((el, index) => {
        if (el.id === productId) sameItemindex = index

        return el.id === productId
      })

      console.log(isSameItem);
      console.log(sameItemindex);

      if (!isSameItem) return [...items, {
        ...product,
        amount: 1
      }]

      const newArr = items.filter(el => el.id !== productId)

      return [...newArr, {
        ...product,
        amount: quantity ? quantity : items[sameItemindex].amount++
      }]
    })
    
    dispatch({
      type: 'ADD_TO_SUBTOTAL',
      payload: quantity ? price * quantity : price 
    })
  }

  return {
    product,
    price,
    setTags,
    handleAddToCart,
    quantity,
    setQuantity
  }
}