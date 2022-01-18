import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import styles from './productpage.module.css'
import Button from '../../components/ui/Button'
import QuantitySelector from '../../components/ui/QuantitySelector'
import productImage from '../../public/pasta.jpg'
import { getSingleProduct, recursiveCatalog } from '../../utils'
import { useEffect, useState } from 'react'

export default function ProductPage() {
  const router = useRouter()
  const { product_id } = router.query

  const [product, setProduct] = useState({})

  async function fetchProduct() {
    const { product } = await getSingleProduct(product_id)

    setProduct(product)
  }
  useEffect(() => fetchProduct(), [])

  console.log(product)

  return (
    <Layout>
      <Container className={ styles.grid }>
        <div className={ styles.productImage }>
          <img src={ product?.images?.edges[0]?.node?.transformedSrc } alt="product image" />
        </div>
        <div className={ styles.info }>
          <h2 className={ styles.title }>{ product?.title }</h2>
          <h3 className={ styles.price }>170 RUB</h3>
          <div className={ styles.description } dangerouslySetInnerHTML={{__html: product.descriptionHtml }} />
          <div className={ styles.action }>
            <QuantitySelector />
            <Button
              color='black'
              size='medium'
              label='В корзину'
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