export default function Container(props) {
  const containerClass = `container ${ props?.className }`

  return (
    <div className={ containerClass }>
      { props.children }
    </div>
  )
}