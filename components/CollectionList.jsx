import Link from 'next/link'
import Container from './Container'
import Product from './Product'
import styles from './style_modules/collection.module.css'

export default function CollectionList({ products }) {
  return (
    <div className="collection">
      <Container>
        <h2 className='heading-2'>Шаурма</h2>
        <div className={ styles.grid }>{ 
          products.edges.map(product => {
            return <Product key={ product.node.id } data={ product } />
          })
        }</div>
      </Container>
    </div>
  )
}