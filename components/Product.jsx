import Link from 'next/link'
import Image from 'next/image'
import { Button } from './Button'
import hotDogImg from '../public/hotdog.png'
import styles from '../styles/product.module.css'

export default function Product() {
  return (
    <div className={ styles.product }>
      <Link href='/categories'>
        <a className={ styles.link }>
          <div className={ styles.imgWrapper }>
            <Image priority src={ hotDogImg } alt='product image' />
          </div>
          <h3 className={ styles.title }>Хотдог острый</h3>
        </a>
      </Link>
      <p className={ styles.description }>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sint hic, assumenda fugiat illum nemo.</p>
      <footer className={ styles.footer }>
        <p className="product-price">135 RUB</p>
        <Button label='В корзину' color='secondary' />
      </footer>
    </div>
  )
}