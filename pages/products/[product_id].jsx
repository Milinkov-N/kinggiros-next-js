import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import styles from './productpage.module.css'
import { Button } from '../../components/ui/Button'
import QuantitySelector from '../../components/ui/QuantitySelector'
import productImage from '../../public/pasta.jpg'

export default function ProductPage() {
  const router = useRouter()
  const { product_id } = router.query
  return (
    <Layout>
      <Container className={ styles.grid }>
        <div className={ styles.productImage }>
          <img src={ productImage.src } alt="product image" />
        </div>
        <div className={ styles.info }>
          <h2 className={ styles.title }>Шаурма с курицей стандарт</h2>
          <h3 className={ styles.price }>170 RUB</h3>
          <div className={ styles.description }>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia doloribus quia eos maxime possimus id autem sapiente nobis fugit animi.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, animi! Voluptatibus aliquid vitae assumenda repudiandae!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, accusantium.</p>
          </div>
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