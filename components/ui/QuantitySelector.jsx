import styles from './quantity.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1)

  const inputRef = useRef()
  useEffect(() => {
    inputRef.current.value = quantity
  },[quantity])

  const increment = () => setQuantity(quantity => quantity + 1)
  const decrement = () => setQuantity(quantity => {
    if (quantity === 1) return 1
    return quantity - 1
  })

  return (
    <div className={ styles.quantity }>
      <button className={ `${ styles.quantityElem } ${ styles.btn }` } onClick={ decrement }>
        <FontAwesomeIcon icon={ faMinus } />
      </button>
      <input
        className={ `${ styles.quantityElem } ${ styles.amount }` }
        type='number'
        defaultValue={ quantity }
        ref={ inputRef }
        onChange={ (e) => setQuantity(parseInt(e.target.value)) }
      />
      <button className={ `${ styles.quantityElem } ${ styles.btn }` } onClick={ increment }>
        <FontAwesomeIcon icon={ faPlus } />
      </button>
    </div>
  )
}