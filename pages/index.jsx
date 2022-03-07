import Layout from '../src/components/layout/Layout'
import Hero from '../src/components/Hero'
import CollectionList from '../src/components/CollectionList'
import { storefront } from '../src/utils'
import { COLLECTIONS } from '../src/consts'

export default function Home({ products }) {
  return (
    <Layout>
      <Hero />
      {
        COLLECTIONS.map(collection => {
          if (!collection.isPage) {
            return (
              <CollectionList
                key={ collection.handle }
                products={ products }
                title={ collection.name }
                sortBy={{ tag: collection.tag }}
                handle={ collection.handle }
              />
            )
          }
        })
      }
    </Layout>
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