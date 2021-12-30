import Link from 'next/link'
import Container from './Container'
import Product from './Product'
import styles from './collection.module.css'

export default function CollectionList({ products }) {
  return (
    <div className="collection">
      <Container>
        <Link  href='/#shaurma'>
          <a name='shaurma'>
            <h2 className={ styles.title }>
              <span>Шаурма</span>
            </h2>
          </a>
        </Link>
        <div className={ styles.grid }>{ 
          products.edges.map(product => {
            return <Product key={ product.node.id } data={ product } />
          })
        }</div>
      </Container>
    </div>
  )
}