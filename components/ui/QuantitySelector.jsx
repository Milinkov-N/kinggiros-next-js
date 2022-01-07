import styles from './quantity.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export default function QuantitySelector() {
  return (
    <div className={ styles.quantity }>
      <button className={ `${ styles.quantityElem } ${ styles.btn }` }>
        <FontAwesomeIcon icon={ faMinus } />
      </button>
      <span className={ `${ styles.quantityElem } ${ styles.amount }` }>1</span>
      <button className={ `${ styles.quantityElem } ${ styles.btn }` }>
        <FontAwesomeIcon icon={ faPlus } />
      </button>
    </div>
  )
}