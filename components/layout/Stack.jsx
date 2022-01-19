export default function Stack({
  direction,
  gap,
  justify,
  align,
  className,
  children
}) {
  let stackClasses = ['flex']

  const directionSelector = direction && `flex-${ direction }`
  const gapSelector = gap && `gap-${ gap }`
  const justifySelector = justify && `jc-${ justify }`
  const alignSelector = align && `ai-${ align }`

  stackClasses.push(directionSelector, gapSelector, justifySelector, alignSelector, className)

  stackClasses = stackClasses.filter(el => el != null)
  stackClasses = stackClasses.join(' ')

  return (
    <div className={ stackClasses }>
      { children }
    </div>
  )
}