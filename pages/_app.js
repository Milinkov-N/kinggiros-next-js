import '../styles/globals.css'
import '../styles/pf-square-sans-pro.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/85b1b8f8c9.js" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} />
    </> 
  )
}

export default MyApp
