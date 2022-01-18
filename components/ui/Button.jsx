import Link from 'next/link'

export default function Button({
  className,
  size,
  color,
  href,
  onClick,
  label,
  children
}) {
  let btnClass = []
  const sizeSelector = `btn-${size}`
  const colorSelector = `btn-${color}`

  className && btnClass.push(className)

  size ? btnClass.push(sizeSelector) : btnClass.push('btn-medium')

  color ? btnClass.push(colorSelector) : btnClass.push('btn-white')

  btnClass = btnClass.join(' ')


  const AsLink = () => (
    <Link href={ href || '/' }>
      <a className={ btnClass }>{ label || children }</a>
    </Link>
  )

  const AsButton = () => (
    <button className={ `btn ${ btnClass }` } onClick={ onClick }>
      { label || children }
    </button>
  )

  return href ? <AsLink /> : <AsButton /> 
}