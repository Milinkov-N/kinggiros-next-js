import Image from 'next/image'
import { useState, useEffect } from 'react'
import { storefront } from '../../utils'

import OrderSummary from './OrderSummary'
import CartList from './CartList'
import Button from '../ui/Button'
import { useCart } from '../../contexts/CartContext'
import LogoImg from '../../../public/pasta.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, } from 'swiper'
import 'swiper/css'
import styles from '../style_modules/cartmodal.module.css'

export default function CartModal() {
  const [state, dispatch] = useCart()
  const [products, setProducts] = useState([])

  useEffect(() =>{
    async function getProducts() {
      const { data } = await storefront(query)

      console.log(data);

      setProducts(data.collection.products.edges)
    }

    getProducts()
  },[])

  const handler = () => {
    document.body.classList.remove('scroll-lock')
    dispatch({ type: 'SET_CLOSED' })
  }

  const openedClass = state.isOpened ? styles.opened : styles.closed

  return (
    <div className={ `${ styles.cartModal } ${ openedClass }` }>
      <div className={ styles.grid }>
        <CartModalHeader handler={ handler } />
        <div className={ styles.scroll }>
          <CartList />
          <div className="add-to-order">
            <h3 className='heading-4' style={{ marginBottom: '.75em' }}>Добавить к заказу?</h3>
            <Swiper
              className={ styles.swiper }
              slidesPerView={ 'auto' }
              spaceBetween={ 20 }
              freeMode={ true }
              modules={[FreeMode]}
            >
              {
                products.map(product => {
                  return (
                    <SwiperSlide className={ styles.swiperSlide } key={ product.node.id }>
                      <div className={ styles.addToOrderItem }>
                        <div className={ styles.imgWrapper }>
                          <Image
                            priority
                            src={ product.node.images?.edges[0]?.node?.transformedSrc || LogoImg.src }
                            alt={ product.node.images?.edges[0]?.node?.altText }
                            layout='fill'
                            objectFit='contain' 
                          />
                        </div>
                        <div>
                          <h4>{ product.node.title }</h4>
                          <span>{ Math.floor(product.node.priceRange?.minVariantPrice?.amount) } RUB</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
        <OrderSummary />
      </div>
    </div>
  )
}

function CartModalHeader({ handler }) {
  return (
    <div className={ styles.flex }>
      <h2 className={ styles.title }>Корзина</h2>
      <Button
        className={ styles.btn }
        variant='text'
        label='Закрыть'
        onClick={ handler }
      />
    </div>
  )
}

const query = `
  query relatedProducts {
    collection(handle: "cart-offer") {
      handle
      id
      descriptionHtml
      products(first: 250) {
        edges {
          node {
            id
            handle
            title
            description
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                  altText
                }
              }
            }
            tags
            priceRange {
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
    }
  }
`