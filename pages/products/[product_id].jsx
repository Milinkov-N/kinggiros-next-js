import Layout from '../../components/Layout'
import Container from '../../components/Container'
import styles from '../../styles/productpage.module.css'
import Button from '../../components/ui/Button'
import QuantitySelector from '../../components/ui/QuantitySelector'
import { getSingleProduct, recursiveCatalog } from '../../utils'
import useProduct from '../../src/hooks/useProduct'

export default function ProductPage({ product }) {
  const {
    handleAddToCart,
    setTags,
    quantity,
    setQuantity
  } = useProduct(product, styles)

  return (
    <Layout>
      <Container className={ styles.grid }>
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
          <h3 className={ styles.price }>170 RUB</h3>
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
                handleAddToCart(product.id, quantity)
                setQuantity(1)
              }}
            />
          </div>
        </div>
        <div className="related-products"></div>
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