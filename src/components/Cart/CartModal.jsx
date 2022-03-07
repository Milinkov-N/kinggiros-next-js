import Image from 'next/image'

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
              <SwiperSlide className={ styles.swiperSlide }>
                <div className={ styles.addToOrderItem }>
                  <div className={ styles.imgWrapper }>
                    <Image
                      priority
                      src={ LogoImg.src }
                      alt={ 'img' }
                      layout='fill'
                      objectFit='contain' 
                    />
                  </div>
                  <div>
                    <h4>Кока-кола</h4>
                    <span>200 RUB</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={ styles.swiperSlide }>
                <div className={ styles.addToOrderItem }>
                  <div className={ styles.imgWrapper }>
                    <Image
                      priority
                      src={ LogoImg.src }
                      alt={ 'img' }
                      layout='fill'
                      objectFit='contain' 
                    />
                  </div>
                  <div>
                    <h4>Фанта</h4>
                    <span>200 RUB</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={ styles.swiperSlide }>
                <div className={ styles.addToOrderItem }>
                  <div className={ styles.imgWrapper }>
                    <Image
                      priority
                      src={ LogoImg.src }
                      alt={ 'img' }
                      layout='fill'
                      objectFit='contain' 
                    />
                  </div>
                  <div>
                    <h4 className='text'>Картошка фри</h4>
                    <span>200 RUB</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className={ styles.swiperSlide }>
                <div className={ styles.addToOrderItem }>
                  <div className={ styles.imgWrapper }>
                    <Image
                      priority
                      src={ LogoImg.src }
                      alt={ 'img' }
                      layout='fill'
                      objectFit='contain' 
                    />
                  </div>
                  <div>
                    <h4>Соус</h4>
                    <span>200 RUB</span>
                  </div>
                </div>
              </SwiperSlide>
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