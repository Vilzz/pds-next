import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import Subcatalogmenu from '../../components/catalog/subcatalog/Subcatalogmenu.jsx'
import Catalogheader from '../../components/bredcrambs/Catalogheader.jsx'

const Subcatalog = ({ category }) => {
  const [firstfour, setFirstfour] = useState([])
  useEffect(() => {
    setFirstfour(category.data[0].subcategories.map((sctg) => sctg._id))
  }, [category])
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <Head>
        <title>Про-движение | {category.data[0].name} </title>
        <meta
          name='description'
          content={category.data[0].description}
          lang='ru-RU'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Catalogheader
        slug={slug}
        name={category.data[0].name}
        photo={category.data[0].photo}
      />
      <Container className='devbd pds_container py-3 tmp'>
        <Row className='devbd w-100'>
          <Col sm={12} md={3} className='devbd mt-3'>
            <Subcatalogmenu
              subcategories={category.data[0].subcategories}
              slug={slug}
            />
          </Col>
          <Col sm={12} md={9}></Col>
        </Row>
      </Container>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const { slug } = context.params
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_DEV_SERVER}/categories?slug=${slug}`
  )
  return {
    props: {
      category: res.data,
    },
  }
}

export default Subcatalog
