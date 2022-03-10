import Image from 'next/image'

import Form from '../../src/components/form'
import Container from '../../src/components/layout/Container'
import Layout from '../../src/components/layout/Layout'
import Button from '../../src/components/ui/Button'
import { useCartItems, useCartState } from '../../src/contexts/CartContext'

import styles from '../../styles/CheckoutPage.module.css'

export default function CheckoutPage() {
  return (
    <Layout>
      <Container>
        <Form className={ styles.form }>
          <ContactInfo />
          <OrderDetails />
        </Form>
      </Container>
    </Layout>
  )
}


function ContactInfo() {
  return (
    <div>
      <h2 className='heading-3'>Контактная информация</h2>
      <div className={ styles.formInputs }>
        <Form.Input
          name='firstname'
          placeholder='Никита'
          type='text'
          label='Имя'
          required
        />
        <Form.Input
          name='lastname'
          placeholder='Милиньков'
          type='text'
          label='Фамилия'
        />
        <Form.Input
          className='col-span-2'
          name='adress'
          placeholder='ул. 1 Мая, 28 п.6 кв. 74'
          type='text'
          label='Адрес'
          required
        />
        <Form.Input
          className='col-span-2'
          name='email'
          placeholder='example@gmail.com'
          type='email'
          label='Эл. почта'
        />
        <Form.Input
          className='col-span-2'
          name='phone'
          placeholder='8 (982) 992-39-59'
          type='tеl'
          label='Телефон'
          required
        />
      </div>
      
    </div>
   )
}

function OrderDetails() {
  const [items] = useCartItems()
  const state = useCartState()
  
  return (
    <div>
      <h2 className='heading-3'>Детали заказа</h2>
      <div>
        {
          items.map(item => (
            <div className={ styles.item } key={ item.id }>
              <div className={ styles.imgWrapper }>
                <Image
                  priority
                  src={ item.images.edges[0].node.transformedSrc }
                  alt={ item.title }
                  layout='fill'
                  objectFit='contain' 
                />
              </div>
              <div className={ styles.itemInfo }>
                <h3 className={ styles.itemName }>{ item.title }</h3>
                <div className={ styles.flex }>
                  <span className={ styles.itemPrice }>{ Math.floor(item.priceRange.minVariantPrice.amount) * item.amount } RUB</span>
                </div>              
              </div>
            </div>
          ))
        }
      </div>
      <div className={ styles.orderSummary }>
        <table className={ styles.summaryTable }>
          <tbody>
            <tr className={ styles.tableRow }>
              <td>Подытог</td>
              <td>{ `${ state.subtotal } RUB` }</td>
            </tr>
            <tr className={ styles.tableRow }>
              <td>Доставка</td>
              <td>{ state.shipping } RUB</td>
            </tr>
            <tr className={ styles.tableRow }>
              <td>Итого</td>
              <td>{ `${ state.total } RUB` }</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button
        className={ styles.checkoutBtn }
        href={ '/checkout' }
        variant='secondary'
        label='Подтвердить заказ'
      />
    </div>
  )
}