import Link from 'next/link'
import Container from './Container'
import Product from './Product'
import styles from '../styles/collection.module.css'

export default function CollectionList() {
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
        <div className={ styles.grid }>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </Container>
    </div>
  )
}