import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faPepperHot } from '@fortawesome/free-solid-svg-icons'

import { useCartItems } from '../contexts/CartContext'
import { useCartDispatch } from '../contexts/CartContext'

export default function useProduct() {
  const [, setItems] = useCartItems()
  const dispatch = useCartDispatch()

  const [quantity, setQuantity] = useState(1)

  // const increment = () => setQuantity(quantity => quantity + 1)
  // const decrement = () => setQuantity(quantity => {
  //   if (quantity === 1) return 1
  //   return quantity - 1
  // })

  const setTags = (tags) => {
    const output = []

    for (const tag of tags) {
      switch (tag) {
        case 'spicy': {
          output.push(
            <FontAwesomeIcon
              key={ tag }
              className='spicy'
              icon={ faPepperHot }
            />
          )
          break
        }
        case 'vegetarian': {
          output.push(
            <FontAwesomeIcon
              key={ tag }
              className='vegetarian'
              icon={ faLeaf }
            />
          )
          break
        }
      }
    }

    return output
  }

  const handleAddToCart = (product, quantity) => {
    const price = Math.floor(product.priceRange.minVariantPrice.amount)

    setItems(items => {
      let sameItemindex
      const sameItem = items.find((el, index) => {
        if (el.id === product.id) sameItemindex = index

        return el.id === product.id
      })

      if (!sameItem) return [...items, {
        ...product,
        amount: quantity ? quantity : 1
      }]

      const newArr = items.filter(el => el.id !== product.id)

      return [...newArr, {
        ...product,
        amount: quantity ? sameItem.amount + quantity : items[sameItemindex].amount + 1
      }]
    })
    
    dispatch({
      type: 'ADD_TO_SUBTOTAL',
      payload: quantity ? price * quantity : price 
    })
  }

  return {
    setTags,
    handleAddToCart,
    quantity,
    setQuantity
  }
}