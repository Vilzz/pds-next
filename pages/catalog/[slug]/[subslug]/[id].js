import axios from 'axios'
import { useRouter } from 'next/router'
import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'
import Head from 'next/head'
const Product = ({ group }) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
      <Head>
        <title>Про-движение | {group.data.name}</title>
        <meta name='description' content={group.data.name} lang='ru-RU' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Container className='tmp'>
        <Row className='devbd'>
          <h2>{group.data.name}</h2>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <Row>
              <Col md={2} className='p-0'>
                <div
                  className='devbd'
                  style={{
                    width: '100px',
                    height: '100px',
                  }}
                ></div>
                <div
                  className='devbd'
                  style={{
                    width: '100px',
                    height: '100px',
                  }}
                ></div>
                <div
                  className='devbd'
                  style={{
                    width: '100px',
                    height: '100px',
                  }}
                ></div>
              </Col>
              <Col md={10}>
                <Image
                  width={400}
                  height={400}
                  src={group.data.big_img}
                  alt='Текст'
                />
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={6}></Col>
        </Row>
      </Container>
    </div>
  )
}
export const getServerSideProps = async (context) => {
  const { id } = context.params
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_DEV_SERVER}/groups/${id}`
  )
  return {
    props: {
      group: product.data,
    },
  }
}
export default Product
