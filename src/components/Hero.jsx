import styles from './style_modules/hero.module.css'
import Container from './layout/Container'
import Button from './ui/Button'

export default function Hero() {
  return (
    <div className={ styles.hero }>
      <Container className={ styles.container }>
        <h1 className={`heading-1 ${ styles.title }`}>
          Вкуснейшие еда и напитки в 
          <span>King Giros</span>
        </h1>
        <p className='subheading'>
          Мы первое кафе по приготовлению шаурмы, а также самая крупная доставка в г. Воткинске... И скоро будем самой быстрой!
        </p>
        <Button
          label='Перейти к витрине'
          variant='primary'
          size='large'
          glowing
        />
      </Container>
    </div>
  )
}