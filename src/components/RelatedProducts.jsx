// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import required modules
import { Pagination } from 'swiper'

import styles from './style_modules/RelatedProducts.module.css'
import Product from './Product'
import { storefront } from '../../src/utils'
import { useEffect, useState } from 'react'

export default function RelatedProducts() {
  const [products, setProducts] = useState([])

  useEffect(() =>{
    async function getProducts() {
      const { data } = await storefront(query)

      setProducts(data.collection.products.edges)
    }

    getProducts()
  },[])

  return (
    <div className={ styles.wrapper }>
      <h2 className='heading-2'>Рекомендуем</h2>
      <Swiper
        className={ styles.swiper }
        slidesPerView={ 1 }
        spaceBetween={ 10 }
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          620: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
      >
        {
          products.map(product => {
            return (
              <SwiperSlide className={ styles.swiperSlide } key={ product.node.id }>
                <Product
                  data={ product }
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
    
  )
}

const query = `
  query relatedProducts {
    collection(handle: "related-products") {
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