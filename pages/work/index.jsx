import styles from '../../styles/contactus.module.css'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Button from '../../components/ui/Button'
import illustration from '../../public/work.svg'

export default function WorkPage() {
  return (
    <Layout>
      <Container>
          <h2 className='heading-2'>Работа с нами</h2>
        <div className={`${ styles.content } grid-col-2 gap-xl`}>
          <div className='flex flex-col'>
            <div className={ styles.info }>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium debitis tempora sapiente corrupti distinctio inventore suscipit esse voluptatum maxime perspiciatis, officia iure facilis ut impedit,</p>
            </div>
            <div className={ `${ styles.form } grid-col-4 gap-md` }>
              <div className={ `${ styles.inputGroup } col-span-2` }>
                <label className={ styles.label } htmlFor="firstname">Имя</label>
                <input className={ styles.input } type='text' name='firstname' placeholder='Никита' />
              </div>
              <div className={ `${ styles.inputGroup } col-span-2` }>
                <label className={ styles.label } htmlFor="secondname">Фамилия</label>
                <input className={ styles.input } type='text' name='secondname' placeholder='Милиньков' />
              </div>
              <div className={ `${ styles.inputGroup } col-span-4` }>
                <label className={ styles.label } htmlFor="phone">Телефон</label>
                <input className={ styles.input } type='phone' name='email' placeholder='8 (800) 555 35-35' />
              </div>
              <div className={ `${ styles.inputGroup } col-span-4` }>
                <label className={ styles.label } htmlFor="email">Эл. почта</label>
                <input className={ styles.input } type='email' name='email' placeholder='example@gmail.com' />
              </div>
              <div className={ `${ styles.inputGroup } col-span-4` }>
                <label className={ styles.label } htmlFor="email">Вакансии</label>
                <select className={ styles.input } name="vacancy" id="vacancy">
                  <option value="kassir">Кассир</option>
                  <option value="chief">Повар</option>
                </select>
              </div>
              {/* <div className={ `${ styles.inputGroup } col-span-4` }>
                <label className={ styles.label } htmlFor="message">Сообщение</label>
                <textarea className={ `${ styles.input } ${ styles.textarea }` } name="message" id="message" placeholder='Ваше сообщение'></textarea>
              </div> */}
              <Button className='col-span-2' color='secondary' label='Отправить' />
            </div>
          </div>
          <div className='flex jc-center ai-center'>
              <img src={ illustration.src } alt="illustration" />
          </div>
        </div>
      </Container>
    </Layout>
  )
}