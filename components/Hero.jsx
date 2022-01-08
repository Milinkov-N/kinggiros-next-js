import styles from './style_modules/hero.module.css'
import Image from 'next/image'
import Container from './Container'
import { Button } from './ui/Button'
import heroImg from '../public/hero.jpg'

export default function Hero() {
  return (
    <div className={ styles.hero }>
      <div className={ styles.bgImage }>
        {/* <Image priority src={ heroImg } alt='hero backgound image'></Image> */}
      </div>
      <Container className={ styles.container }>
        <h1 className={ styles.title }>Вкуснейшие еда и напитки в <span>King Giros</span></h1>
        <p className={ styles.subtitle }>Мы первое кафе по приготовлению шаурмы, а также самая крупная доставка в г. Воткинске... И скоро будем самой быстрой!</p>
        <Button
        label='Перейти к витрине'
        size='large'
        color='secondary'
      />
      </Container>
    </div>
  )
}