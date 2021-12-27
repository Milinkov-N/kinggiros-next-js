import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/85b1b8f8c9.js" crossorigin="anonymous"></script>
      </Head>
      <Layout>
        <Hero />
        <Nav />
      </Layout>
    </>
    
  )
}
