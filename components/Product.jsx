import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui/Button'
import styles from './style_modules/product.module.css'

export default function Product({ data }) {

  const product = data.node
  const price = Math.floor(product.priceRange.minVariantPrice.amount)


  const myLoader= ({ src, width, quality }) => `${ src }?w=${ width }&q=${ quality || 75 }`

  return (
    <div className={ styles.product }>
      <Link href={ `/products/${product.handle}` }>
        <a className={ styles.link }>
          <div className={ styles.imgWrapper }>
            <Image 
              priority
              loader= { myLoader } 
              src={ `${ product.images.edges[0].node.transformedSrc }` }
              width={ 500 } 
              height={ 500 } 
              alt={ product.title } 
            />
          </div>
          <header className={ styles.header }>
          <h3 className={ styles.title }>
            <span>{ product.title }</span>
            {/* { setTags(tags).map( item => {
                return item
              })
            } */}
          </h3>
          </header>
        </a>
      </Link>
      <p className={ styles.description }>{ getProductComposition(product.description) }</p>
      <footer className={ styles.footer }>
        <p className="product-price">{ `${ price } RUB` }</p>
        <Button label='В корзину' color='secondary' />
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

  // const { tags } = data

  // const setTags = (tags) => {
  //   const output = []

  //   for (const tag of tags) {
  //     switch (tag) {
  //       case 'spicy':
  //         output.push(<i key={ tag } aria-hidden className={ `fas fa-pepper-hot ${ styles.spicy }` }></i>)
  //         break
  //       case 'vegetarian':
  //         output.push(<i key={ tag } aria-hidden className={ `fas fa-leaf ${ styles.vegetarian }` }></i>)
  //         break
  //     }
  //   }

  //   return output
  // }
  // console.log(product)