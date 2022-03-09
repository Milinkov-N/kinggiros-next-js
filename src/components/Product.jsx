import Link from 'next/link'
import Image from 'next/image'

import LogoImg from '../../public/logo_2022.png'
import Button from './ui/Button'
import useProduct from '../hooks/useProduct'

import styles from './style_modules/product.module.css'

export default function Product({ data }) {
  const product = data.node
  const price = Math.floor(product.priceRange.minVariantPrice.amount)

  const {
    setTags,
    handleAddToCart,
  } = useProduct()

  return (
    <div className={ styles.product }>
      <Link href={ `/products/${ product.handle }` }>
        <a className={ styles.link }>
          <div className={ styles.imgWrapper }>
            <Image
              priority
              src={ `${ product.images?.edges[0]?.node.transformedSrc || LogoImg.src }` }
              alt={ product.title }
              layout='fill'
              objectFit='contain' 
            />
          </div>
          <div className={ styles.header }>
            <h3 className={ styles.title }>
              <span>{ product.title }</span>
              { setTags(product.tags).map(item => item) }
            </h3>
          </div>
        </a>
      </Link>
      <p className={ styles.description }>
        { product.description }
      </p>
      <div className={ styles.footer }>
        <p className="product-price">{ `${ price } RUB` }</p>
        <Button
          variant='primary'
          label='В корзину'
          onClick={ () => handleAddToCart(product) }
        />
      </div>
    </div>
  )
}