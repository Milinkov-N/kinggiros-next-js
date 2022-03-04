import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faPepperHot } from '@fortawesome/free-solid-svg-icons'

import { useCartItems } from '../contexts/CartContext'
import { useCartDispatch } from '../contexts/CartContext'

export default function useProduct(data, styles) {
  const product = data.node
  const [, setItems] = useCartItems()
  const dispatch = useCartDispatch()
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

  const handleAddToCart = () => {
    setItems(items => [...items, product])
    dispatch({ type: 'ADD_TO_SUBTOTAL', payload: price })
  }

  return {
    product,
    price,
    setTags,
    handleAddToCart
  }
}