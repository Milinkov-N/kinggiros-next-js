export async function storefront(query, variables = {}) {

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