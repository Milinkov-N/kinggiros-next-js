import Layout from '../../src/components/layout/Layout'
import Container from '../../src/components/layout/Container'
import Button from '../../src/components/ui/Button'
import QuantitySelector from '../../src/components/ui/QuantitySelector'
import { getSingleProduct, recursiveCatalog } from '../../src/utils'
import useProduct from '../../src/hooks/useProduct'

import styles from '../../styles/productpage.module.css'
import RelatedProducts from '../../src/components/RelatedProducts'

export default function ProductPage({ product }) {
  const {
    handleAddToCart,
    setTags,
    quantity,
    setQuantity
  } = useProduct()

  return (
    <Layout>
      <Container>
        <div className={ styles.grid }>
          <div className={ styles.productImage }>
            <img src={ product?.images?.edges[0]?.node?.transformedSrc } alt="product image" />
          </div>
          <div className={ styles.info }>
            <h2 className={ `${styles.title} heading-2` }>
              <span>{ product?.title }</span>
              { setTags(product.tags).map( item => {
                  return item
                })
              }
            </h2>
            <h3 className={ styles.price }>{ `${ Math.floor(product.priceRange.minVariantPrice.amount) } RUB` }</h3>
            <div className={ styles.description } dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
            <div className={ styles.action }>
              <QuantitySelector
                quantity={ quantity }
                setQuantity={ setQuantity }
              />
              <Button
                variant='primary'
                size='medium'
                label='В корзину'
                onClick={ () => {
                  handleAddToCart(product, quantity)
                  setQuantity(1)
                }}
              />
            </div>
          </div>
        </div>
        <RelatedProducts />
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  const products = await recursiveCatalog()

  const paths = products.map(item => {
    const product_id = String(item.node.handle)

    return {
      params: { product_id }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const { product } = await getSingleProduct(params.product_id)

  return {
    props: {
      product
    }
  }
}