import Link from 'next/link'
import Image from 'next/image'
import Button from './ui/Button'
import styles from './style_modules/product.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf, faPepperHot } from '@fortawesome/free-solid-svg-icons'

export default function Product({ data }) {

  const product = data.node
  const price = Math.floor(product.priceRange.minVariantPrice.amount)

  const { tags } = product

  const setTags = (tags) => {
    const output = []

    for (const tag of tags) {
      switch (tag) {
        case 'spicy':
          output.push(<FontAwesomeIcon key={ tag } className={ styles.spicy } icon={ faPepperHot } />)
          break
        case 'vegetarian':
          output.push(<FontAwesomeIcon key={ tag } className={ styles.vegetarian } icon={ faLeaf } />)
          break
      }
    }

    return output
  }

  return (
    <div className={ styles.product }>
      <Link href={ `/products/${product.handle}` }>
        <a className={ styles.link }>
          <div className={ styles.imgWrapper }>
            <Image 
              priority
              className={ styles.img }
              src={ `${ product.images.edges[0].node.transformedSrc }` }
              alt={ product.title }
              layout='fill'
              objectFit='contain' 
            />
          </div>
          <header className={ styles.header }>
          <h3 className={ styles.title }>
            <span>{ product.title }</span>
            { setTags(tags).map( item => {
                return item
              })
            }
          </h3>
          </header>
        </a>
      </Link>
      <p className={ styles.description }>{ getProductComposition(product.description) }</p>
      <footer className={ styles.footer }>
        <p className="product-price">{ `${ price } RUB` }</p>
        <Button variant='primary' label='В корзину' />
      </footer>
    </div>
  )
}

const getProductComposition = ( description ) => {
  const keyWord = 'Состав:'

  const compositionIndex = description.indexOf(keyWord) + keyWord.length

  const substring = description.slice(compositionIndex)

  const substringEnd = substring.indexOf('.')

  return substring.slice(0, substringEnd).trim()
}