import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Container, Row, Col } from 'react-bootstrap'
import SubcatalogPreview from '../../components/catalog/subcatalog/SubcatalogPreview.jsx'
import Catalogheader from '../../components/bredcrambs/Catalogheader.jsx'
import Sorting from '../../components/catalog/subcatalog/Sorting.jsx'

const Subcatalog = ({ category }) => {
  const [subctgPreviews, setSubctgPreviews] = useState([])
  useEffect(() => {
    setSubctgPreviews(
      category.data[0].subcategories.map((sctg) => {
        return { name: sctg.name, groups: sctg.groups, subslug: sctg.slug }
      })
    )
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
      <Container className='pds_container py-3 tmp'>
        <Row className='justify-content-end'>
          <Sorting />
        </Row>
        <Row className='w-100'>
          <Col sm={12} md={12} className='mt-3 pb-5'>
            {subctgPreviews.map((preview, idx) => (
              <SubcatalogPreview preview={preview} key={preview.name} />
            ))}
          </Col>
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
