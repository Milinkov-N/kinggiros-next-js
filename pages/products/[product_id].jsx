import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import styles from './productpage.module.css'
import { Button } from '../../components/ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
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
            <div className={ styles.quantity }>
              <button className={ `${ styles.quantityElem } ${ styles.btn }` }>
                <FontAwesomeIcon icon={ faMinus } />
              </button>
              <span className={ `${ styles.quantityElem } ${ styles.amount }` }>1</span>
              <button className={ `${ styles.quantityElem } ${ styles.btn }` }>
                <FontAwesomeIcon icon={ faPlus } />
              </button>
            </div>
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