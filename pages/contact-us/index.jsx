import styles from '../../styles/aboutus.module.css'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Button from '../../components/ui/Button'
import illustration from '../../public/about-us.svg'

export default function ContactUsPage() {
  return (
    <Layout>
      <Container>
          <h2 className='heading-2'>Остались вопросы или нашли проблему на сайте?</h2>
          <span className='subheading text-clr-secondary'>Напишите нам!</span>
        <div className='grid-col-2 gap-xl'>
          <div className='flex flex-col'>
            <div className='form grid-col-4 gap-md'>
              <div className={ `${ styles.inputGroup } col-span-2` }>
                <label className={ styles.label } htmlFor="firstname">Имя</label>
                <input className={ styles.input } type='text' name='firstname' placeholder='Никита' />
              </div>
              <div className={ `${ styles.inputGroup } col-span-2` }>
                <label className={ styles.label } htmlFor="secondname">Фамилия</label>
                <input className={ styles.input } type='text' name='secondname' placeholder='Милиньков' />
              </div>
              <div className={ `${ styles.inputGroup } col-span-4` }>
                <label className={ styles.label } htmlFor="email">Эл. почта</label>
                <input className={ styles.input } type='email' name='email' placeholder='example@gmail.com' />
              </div>
              <div className={ `${ styles.inputGroup } col-span-4` }>
                <label className={ styles.label } htmlFor="message">Сообщение</label>
                <textarea className={ `${ styles.input } ${ styles.textarea }` } name="message" id="message" placeholder='Ваше сообщение'></textarea>
              </div>
              <Button className='col-span-2' color='secondary' label='Отправить' />
            </div>
          </div>
          <div className='flex jc-center ai-center'>
            <div className="svg-container">
              <img src={ illustration.src } alt="illustration" />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}