import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
const Product = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Container className='tmp'>
      <h2>{id}</h2>
    </Container>
  )
}

export default Product
