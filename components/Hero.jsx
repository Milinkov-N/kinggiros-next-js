import style from '../styles/hero.module.css'
import Image from 'next/image'
import Container from './Container'
import { ButtonLarge } from './Button'
import heroImg from '../public/hero.jpg'

export default function Hero() {
  return (
    <div className={ style.hero }>
      <div className={ style.bgImage }>
        <Image priority src={ heroImg } alt='hero backgound image'></Image>
      </div>
      <Container className={ style.container }>
        <h1 className={ style.title }>Вкуснейшие еда и напитки в <span>King Giros</span></h1>
        <p className={ style.subtitle }>Мы первое кафе по приготовлению шаурмы, а также самая крупная доставка в г. Воткинске... И скоро будем самой быстрой!</p>
        <ButtonLarge label="Перейти к витрине" />
      </Container>
    </div>
  )
}