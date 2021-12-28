import Link from 'next/link'
import Container from './Container'
import Product from './Product'
import styles from '../styles/collection.module.css'
import hotDogImg from '../public/hotdog.png'

export default function CollectionList() {
  const data = [
    {
      title: 'Хотдог супер-пупер-дупер-острый',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sint hic, assumenda fugiat illum nemo.',
      handler: '/categories',
      imageSrc: hotDogImg,
      price: '135',
      tags: [ 'spicy', 'spicy', 'spicy', 'spicy', 'vegetarian' ]
    },
    {
      title: 'Хотдог острый',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sint hic, assumenda fugiat illum nemo.',
      handler: '/categories',
      imageSrc: hotDogImg,
      price: '1 350',
      tags: [ 'spicy', 'vegetarian' ]
    },
    {
      title: 'Хотдог острый',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sint hic, assumenda fugiat illum nemo.',
      handler: '/categories',
      imageSrc: hotDogImg,
      price: '135',
      tags: [ 'spicy', 'vegetarian' ]
    },
    {
      title: 'Хотдог острый',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sint hic, assumenda fugiat illum nemo.',
      handler: '/categories',
      imageSrc: hotDogImg,
      price: '135',
      tags: [ 'spicy', 'vegetarian' ]
    },
    {
      title: 'Хотдог острый',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sint hic, assumenda fugiat illum nemo.',
      handler: '/categories',
      imageSrc: hotDogImg,
      price: '135',
      tags: [ 'spicy', 'vegetarian' ]
    },
    {
      title: 'Хотдог острый',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sint hic, assumenda fugiat illum nemo.',
      handler: '/categories',
      imageSrc: hotDogImg,
      price: '135',
      tags: [ 'spicy', 'vegetarian' ]
    },
  ]


  return (
    <div className="collection">
      <Container>
        <Link  href='/#shaurma'>
          <a name='shaurma'>
            <h2 className={ styles.title }>
              <span>Хотдоги</span>
            </h2>
          </a>
        </Link>
        <div className={ styles.grid }>{ 
          data.map(product => {
            return <Product key={ product } data={ product } />
          })
        }</div>
      </Container>
    </div>
  )
}