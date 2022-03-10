import styles from '../style_modules/Form.module.css'

export default function Form({ className, children }) {
  return (
    <form className={ className ? className : '' }>
      { children }
    </form>
  )
}

function Input({ className, name, placeholder, type, label, required }) {
  return (
    <div className={ `${ styles.inputGroup } ${ className ? className : '' }` }>
      <label
        className={ styles.label }
        htmlFor={ name }
      >
        { label }
      </label>
      <input
        className={ styles.input }
        type={ type }
        name={ name }
        placeholder={ placeholder }
        required={ required }
      />
    </div>
  )
}

Form.Input = Input