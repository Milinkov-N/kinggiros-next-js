import styles from '../../styles/aboutus.module.css'
import Container from '../../components/Container'
import Layout from '../../components/Layout'
import Logo from '../../public/logo.png'
import shaurmaImage from '../../public/shaurmaC.png'
import hotdogImage from '../../public/hot-dogC.png'

export default function AboutUsPage() {
  return (
    <Layout>
      <Container>
        <h1 className="heading-2">Мы <span>King Giros</span> и...</h1>
        <section className='flex flex-col gap-md margin-v-xl'>
          <div className={ styles.card }>
              <div className="image">
                  <img src={ shaurmaImage.src } alt="image" />
              </div>
              <div>
                <p>...Мы первое кафе по приготовлению шаурмы, а также самая крупная доставка в г. Воткинске</p>
                <p>И скоро будет самой быстрой!</p>
              </div>
          </div>
          <div className={ `${styles.card} ${ styles.right }` }>
              <p>...Работаем для вас с 2014 года!</p>
              <div className="image">
                  <img src={ hotdogImage.src } alt="image" />
              </div>
          </div>
          <div className={ `${styles.card} ${ styles.center }` }>
              <p>Получив многолетний опыт мы пришли к идеальному вкусу. Заказывая у нас, Вы получаете, вкусный продукт из лучших ингредиентов и качественный сервис</p>
              <div className="image">
                  <img src={ Logo.src } alt="image" />
              </div>
          </div>
        </section>
      </Container>
    </Layout>
  )
}