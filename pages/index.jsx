import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import logo from '../public/logo_icon.png'
import CollectionList from '../components/CollectionList'
import { storefront } from '../utils'

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>King Giros</title>
        <link rel="shortcut icon" href={ logo.src } type="image/x-icon" />
      </Head>
      <Layout>
        <Hero />
        <CollectionList products={ products } />
      </Layout>
    </>
    
  )
}

export async function getStaticProps() {
  
  const { data } = await storefront(productsQuery)

  return {
    props: {
      products: data.products
    }
  }
}

const productsQuery = `
  query Products {
    products(first: 3) {
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