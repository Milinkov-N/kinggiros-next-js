import Head from 'next/head'

import Layout from '../../src/components/layout/Layout'
import logo from '../../public/logo_icon.png'
import CollectionList from '../../src/components/CollectionList'
import { storefront } from '../../src/utils'
import { COLLECTIONS } from '../../src/consts'

export default function Home({ products }) {
  const sushiRollsTag = 'sushi_and_rolls'
  const sushiSetsTag = 'sushi_set'
  return (
    <>
      <Head>
        <title>King Giros | Супы</title>
        <link rel="shortcut icon" href={ logo.src } type="image/x-icon" />
      </Head>
      <Layout>
        <CollectionList
          key={ sushiRollsTag }
          products={ products }
          title='Суши, маки, роллы'
          sortBy={{ tag: sushiRollsTag }}
          handle={ sushiRollsTag }
        />
        <CollectionList
          key={ sushiSetsTag }
          products={ products }
          title='Суши, маки, роллы'
          sortBy={{ tag: sushiSetsTag }}
          handle='sushi_sets'
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
    products(first: 250, query: "sushi") {
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