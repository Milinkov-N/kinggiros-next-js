import '../styles/globals.css'
import '../styles/pf-square-sans-pro.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import CartProvider from '../src/contexts/CartContext'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
