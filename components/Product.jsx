import Link from 'next/link'
import Image from 'next/image'
import { Button } from './Button'
import styles from '../styles/product.module.css'

export default function Product({ data }) {
  const { tags } = data

  const setTags = (tags) => {
    const output = []

    console.log(tags)

    for (const tag of tags) {
      console.log(tag)
      switch (tag) {
        case 'spicy':
          output.push(<i key={ tag } aria-hidden className={ `fas fa-pepper-hot ${ styles.spicy }` }></i>)
          break
        case 'vegetarian':
          output.push(<i key={ tag } aria-hidden className={ `fas fa-leaf ${ styles.vegetarian }` }></i>)
          break
      }
    }

    return output
  }

  return (
    <div className={ styles.product }>
      <Link href={ data.handler }>
        <a className={ styles.link }>
          <div className={ styles.imgWrapper }>
            <Image priority src={ data.imageSrc } alt='product image' />
          </div>
          <header className={ styles.header }>
          <h3 className={ styles.title }>
            <span>{ data.title }</span>
            { setTags(tags).map( item => {
                return item
              })
            }
          </h3>
          {/* <div className={ styles.tags }>
            { setTags(tags).map( item => {
              return item
            }) }
          </div> */}
          </header>
        </a>
      </Link>
      <p className={ styles.description }>{ data.description }</p>
      <footer className={ styles.footer }>
        <p className="product-price">{ `${ data.price } RUB` }</p>
        <Button label='В корзину' color='secondary' />
      </footer>
    </div>
  )
}