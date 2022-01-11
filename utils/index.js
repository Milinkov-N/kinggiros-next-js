async function storefront(query, variables = {}) {

  const url = process.env.NEXT_PUBLIC_API_URL
  const options = { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_ACCESS_TOKEN,
      "Accept": "application/json",
    },
    body: JSON.stringify({ query, variables })
  }

  try {
    const res = await fetch(url, options)

    return res.json()
    
  } catch (e) {
    console.error(e)
  }
}

async function getSingleProduct(handle) {
  const query =  `
    query GetProductsByHandle($handle: String!) {
      product(handle: $handle) {
        id
        handle
        title
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          edges {
            node {
              altText
              transformedSrc
            }
          }
        }
      }
    }
  `

  const { data } = await storefront(query, { handle })

  return data
}

async function createCart() {
  const query = `
    mutation CreateCart {
      cartCreate {
        cart {
          id
          checkoutUrl
        }
      }
    }
  `

  try {
    const { data } = await storefront(query)

    const cart = {
      cartId: data.cartCreate?.cart?.id,
      checkoutUrl: data.cartCreate?.cart?.checkoutUrl,
    }
    
    return cart
  } catch (e) {
    console.error(e)
  }
}

async function loadCart(cartID) {
  const query = `
    query getCart($cartID: ID!) {
      cart(id: $cartID) {
        id
        checkoutUrl
        estimatedCost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              estimatedCost {
                totalAmount {
                  amount
                  currencyCode
                }
              }
              merchandise {
                ... on ProductVariant {
                  product {
                    id
                    handle
                    title
                    description
                    priceRange {
                      minVariantPrice {
                        amount
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `

  const { data } = await storefront(query, { cartID })

  return data
}

async function addToCart() {
  const query = `
    mutation AddToCart($cartId: ID!, $productId: ID!) {
      cartLinesAdd(cartId: $cartId, lines: [{quantity: 1, merchandiseId: $productId}]) {
        cart {
          id
          lines(first:10) {
            edges {
              node {
                id
                merchandise {
                  ... on ProductVariant {
                    id
                    product {
                      id
                      title
                    }
                  }
                }
              }
            }
          }   
        }
      }
    }
  `

  // TODO 
}

async function recursiveCatalog(cursor = '', initialRequest = true) {
  let data;

  if (cursor !== '') {
    const query = `{
      products(after: "${cursor}", first: 250) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }`;

    const response = await storefront(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;
      console.log('Cursor: ', cursor);

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  } else {
    const query = `{
      products(first: 250) {
        edges {
          cursor
          node {
            id
            handle
          }
        }
        pageInfo {
          hasNextPage
        }
      }
    }
    `;

    const response = await storefront(query);
    data = response.data.products.edges ? response.data.products.edges : [];

    if (response.data.products.pageInfo.hasNextPage) {
      const num = response.data.products.edges.length;
      const cursor = response.data.products.edges[num - 1].cursor;

      return data.concat(await recursiveCatalog(cursor));
    } else {
      return data;
    }
  }
}

export { storefront, getSingleProduct, createCart, loadCart, recursiveCatalog }