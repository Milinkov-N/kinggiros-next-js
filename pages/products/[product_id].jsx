import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Container from '../../components/Container'

export default function ProductPage() {
  const router = useRouter()
  const { product_id } = router.query
  return (
    <Layout>
      <Container>
        <h2>{ product_id }</h2>
      </Container>
    </Layout>
  )
}