import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Layout from '../../src/components/layout/Layout'
import Container from '../../src/components/layout/Container'
import Button from '../../src/components/ui/Button'
import Stack from '../../src/components/layout/Stack'
import illustration from '../../public/about-us.svg'

import styles from '../../styles/contactus.module.css'

export default function ContactUsPage() {
  return (
    <Layout>
      <Container>
          <h2 className='heading-2'>Остались вопросы или нашли проблему на сайте?</h2>
        <div className={`${ styles.content } grid-col-2 gap-xl`}>
          <div className='flex flex-col'>
            <div className={ styles.info }>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium debitis tempora sapiente corrupti distinctio inventore suscipit esse voluptatum maxime perspiciatis, officia iure facilis ut impedit,</p>
              <ul className='flex flex-col gap-sm'>
                <li>
                  <Stack align='center' gap='md'>
                    <FontAwesomeIcon icon={ faLocationArrow } style={{ fontSize: '1rem' }} />
                    г. Воткинск, улица 1 Мая, 102
                  </Stack>
                </li>
                <li>
                  <Stack align='center' gap='md'>
                    <FontAwesomeIcon icon={ faPhoneAlt } style={{ fontSize: '1rem' }} />
                    8 (950) 838 99 99
                  </Stack>  
                </li>
                <li>
                  <Stack align='center' gap='md'>
                    <FontAwesomeIcon icon={ faEnvelope } style={{ fontSize: '1rem' }} />
                    spik@mail.ru
                  </Stack>
                </li>
              </ul>
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
              <img src={ illustration.src } alt="illustration" />
          </div>
        </div>
      </Container>
    </Layout>
  )
}