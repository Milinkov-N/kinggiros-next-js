import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import logo from '../public/logo_icon.png'
import CollectionList from '../components/CollectionList'

export default function Home() {
  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/85b1b8f8c9.js" crossorigin="anonymous"></script>
        <title>King Giros</title>
        <link rel="shortcut icon" href={ logo.src } type="image/x-icon" />
      </Head>
      <Layout>
        <Hero />
        <CollectionList />
      </Layout>
    </>
    
  )
}
