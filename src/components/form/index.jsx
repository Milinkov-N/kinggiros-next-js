import styles from '../style_modules/Form.module.css'

export default function Form({ className, children, onSubmit }) {
  return (
    <form className={ className ? className : '' } onSubmit={ onSubmit }>
      { children }
    </form>
  )
}

function Input({ className, name, placeholder, type, label, required, onSelect }) {
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
        onSelect={ onSelect }
      />
    </div>
  )
}

Form.Input = Input