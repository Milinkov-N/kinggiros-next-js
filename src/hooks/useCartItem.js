import { useCartItems } from '../src/contexts/CartContext'
import { useCartDispatch } from '../src/contexts/CartContext'

export default function useCartItem(item) {
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

  return {
    deleteItem,
    incrementItemAmount,
    decrementItemAmount,
    handleOnChange
  }
}
