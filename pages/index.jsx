import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import logo from '../public/logo_icon.png'
import CollectionList from '../components/CollectionList'
import { storefront } from '../utils'
import { COLLECTIONS } from '../src/consts'

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>King Giros</title>
        <link rel="shortcut icon" href={ logo.src } type="image/x-icon" />
      </Head>
      <Layout>
        <Hero />
        {
          COLLECTIONS.map(collection => (
            <CollectionList
              products={ products }
              title={ collection.name }
              sortBy={{ tag: collection.handle }}
            />
          ))
        }
        {/* <CollectionList
          products={ products }
          title='Шаурма'
          sortBy={{ tag: 'shaurma' }}
        />
        <CollectionList
          products={ products }
          title='Пицца'
          sortBy={{ tag: 'pizza' }}
        />
        <CollectionList
          products={ products }
          title='Бургеры'
          sortBy={{ tag: 'burger' }}
        />
        <CollectionList
          products={ products }
          title='Чебуреки'
          sortBy={{ tag: 'cheburek' }}
        />
        <CollectionList
          products={ products }
          title='Напитки'
          sortBy={{ tag: 'beverage' }}
        />
        <CollectionList
          products={ products }
          title='Закуски'
          sortBy={{ tag: 'snack' }}
        />
        <CollectionList
          products={ products }
          title='Добавки'
          sortBy={{ tag: 'addon' }}
        />
        <CollectionList
          products={ products }
          title='Сладкое'
          sortBy={{ tag: 'sweet' }}
        />
        <CollectionList
          products={ products }
          title='Комбо'
          sortBy={{ tag: 'combo' }}
        />
        <CollectionList
          products={ products }
          title='Суши, маки, роллы'
          sortBy={{ tag: 'sushi_and_rolls' }}
        />
        <CollectionList
          products={ products }
          title='Суши-сеты'
          sortBy={{ tag: 'sushi_set' }}
        /> */}
      </Layout>
    </>
    
  )
}

export async function getStaticProps() {
  const { data } = await storefront(productsQuery)

  return {
    props: {
      products: data.products,
    }
  }
}

const productsQuery = `
  query Products {
    products(first: 250) {
      edges {
        node {
          id
          handle
          title
          description
          images(first: 1) {
            edges {
              node {
                transformedSrc
                altText
              }
            }
          }
          tags
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`