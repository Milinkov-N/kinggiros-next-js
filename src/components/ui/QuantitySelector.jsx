import styles from './quantity.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function QuantitySelector({ quantity, setQuantity, increment, decrement, handleOnChange }) {
  // const [quantity, setQuantity] = useState(1)

  if (!increment) {
    increment = () => setQuantity(quantity => quantity + 1)
  }

  if (!decrement) {
    decrement = () => setQuantity(quantity => {
      if (quantity === 1) return 1
      return quantity - 1
    })
  }

  if (!handleOnChange) {
    handleOnChange = (e) => setQuantity(parseInt(e.target.value))
  }

  return (
    <div className={ styles.quantity }>
      <button className={ `${ styles.quantityElem } ${ styles.btn }` } onClick={ decrement }>
        <FontAwesomeIcon icon={ faMinus } />
      </button>
      <input
        className={ `${ styles.quantityElem } ${ styles.amount }` }
        type='number'
        value={ quantity }
        onChange={ (e) => handleOnChange(e) }
      />
      <button className={ `${ styles.quantityElem } ${ styles.btn }` } onClick={ increment }>
        <FontAwesomeIcon icon={ faPlus } />
      </button>
    </div>
  )
}