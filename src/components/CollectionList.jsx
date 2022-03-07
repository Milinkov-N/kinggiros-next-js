import Container from './layout/Container'
import Product from './Product'
import styles from './style_modules/collection.module.css'

export default function CollectionList({ products, title, sortBy, handle }) {
  return (
    <section className={ styles.section } id={ handle }>
      <Container>
        <h2 className={ `heading-2 ${ styles.title }` }>{ title }</h2>
        <div className={ styles.grid }>{ 
          products.edges.map(product => {
            let isSorted

            product.node.tags.forEach(tag => {
              if (tag === sortBy.tag) {
                isSorted = true

                return
              }
            })

            return isSorted && <Product key={ product.node.id } data={ product } />
          })
        }</div>  
      </Container>
    </section>
  )
}