import Head from 'next/head'

import Layout from '../../src/components/layout/Layout'
import logo from '../../public/logo_icon.png'
import CollectionList from '../../src/components/CollectionList'
import { storefront } from '../../src/utils'
import { COLLECTIONS } from '../../src/consts'

export default function Home({ products }) {
  const { handle, name, tag } = COLLECTIONS.find(collection => collection.tag === 'first_course')

  return (
    <>
      <Head>
        <title>King Giros | Горячее</title>
        <link rel="shortcut icon" href={ logo.src } type="image/x-icon" />
      </Head>
      <Layout>
        <CollectionList
          key={ handle }
          products={ products }
          title={ name }
          sortBy={{ tag }}
          handle={ handle }
        />
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
  query getFirstCourseProducts {
    products(first: 250, query: "first_course") {
      edges {
        node {
          handle
          id
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
          variants(first: 3) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`