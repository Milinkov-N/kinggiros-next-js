import Link from 'next/link'

export default function Button({
  className,
  variant,
  size,
  color,
  href,
  onClick,
  disabled,
  glowing,
  label,
  children,
  ...all
}) {
  let btnClass = []
  const variantSelector = variant ? `btn-${variant}` : 'btn-primary'
  const sizeSelector = size ? `btn-${size}` : 'btn-medium'
  const colorSelector = color ? `btn-${color}` : ''

  className && btnClass.push(className)
  glowing && btnClass.push(`btn-${variant}-glowing`)
  btnClass.push(variantSelector, sizeSelector, colorSelector)
  btnClass = btnClass.join(' ')


  const AsLink = () => (
    <Link href={ href || '/' }>
      <a className={ `btn ${btnClass}` } {...all}>{ label || children }</a>
    </Link>
  )

  const AsButton = () => (
    <button
      className={ `btn ${ btnClass }` }
      onClick={ onClick }
      disabled={ disabled }
      {...all}
    >
      { label || children }
    </button>
  )

  return href ? <AsLink /> : <AsButton /> 
}