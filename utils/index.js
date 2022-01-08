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

export { storefront, createCart, loadCart }