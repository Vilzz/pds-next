import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Catalogheader from '../../../components/bredcrambs/Catalogheader.jsx'
import Subcatalogmenu from '../../../components/catalog/subcatalog/Subcatalogmenu.jsx'
import CardsHolder from '../../../components/products/CardsHolder.jsx'
import Sorting from '../../../components/catalog/subcatalog/Sorting.jsx'
import { Container, Row, Col } from 'react-bootstrap'
const Item = ({ parent, groups }) => {
  const [curentSubctg, setCurentCtg] = useState([])
  const router = useRouter()
  const { slug, subslug } = router.query
  useEffect(() => {
    parent !== null &&
      setCurentCtg(
        parent.data.subcategories.filter((item) => item.slug === subslug)[0]
      )
  }, [subslug])
  return (
    <div>
      <Head>
        <title>Про-движение|{curentSubctg.name}</title>
        <meta
          name='description'
          content={curentSubctg.description}
          lang='ru-RU'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Catalogheader
        slug={slug}
        name={parent.data.name}
        subslug={subslug}
        subname={curentSubctg.name}
      />
      <Container className='pds_container'>
        <Row className='d-flex justify-content-end align-items-center mt-2'>
          <Col md={4}>
            <div className='input-group-sm input-group-overlay d-none d-lg-flex'>
              <input
                className='form-control appended-form-control'
                type='text'
                placeholder='Поиск'
              />
              <div className='input-group-append-overlay'>
                <span className='input-group-text'>
                  <i className='czi-search'></i>
                </span>
              </div>
            </div>
          </Col>
          <Col md={4} className='ml-5'>
            <section className='d-md-flex justify-content-between align-items-center '>
              <div className='d-flex align-items-center'>
                <div className='d-none d-sm-block font-size-sm text-muted text-nowrap'>
                  Сортировать по:
                </div>
                <ul className='nav nav-tabs font-size-sm mb-0'>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      Цене
                      <i className='czi-arrow-up font-size-xs ml-2 d-none'></i>
                      <i className='czi-arrow-down font-size-xs ml-2'></i>
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link' href='#'>
                      Названию
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </Col>
        </Row>
        <Row className='my-3'>
          <Col sm={12} md={3}>
            <Subcatalogmenu
              slug={slug}
              id={parent.data._id}
              subslug={subslug}
            />
          </Col>
          <Col>
            <CardsHolder
              groups={groups.data[0]}
              slug={slug}
              subslug={subslug}
              subname={curentSubctg.name}
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export const getServerSideProps = async (context) => {
  const { slug, subslug } = context.params
  const parent = await axios.post(
    `${process.env.NEXT_PUBLIC_DEV_SERVER}/categories/${slug}`
  )
  const groups = await axios.get(
    `${process.env.NEXT_PUBLIC_DEV_SERVER}/subcategories?slug=${subslug}&select=groups`
  )
  return {
    props: {
      parent: parent.data,
      groups: groups.data,
    },
  }
}

// export const getStaticPaths = async () => {
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_DEV_SERVER}/subcategories`
//   )
//   const subcategories = res.data
//   const subslugs = subcategories.data.map((subslug) => ({
//     subslug: subslug.slug,
//     slug: subslug.parent.slug,
//   }))
//   const paths = subslugs.map((item) => ({
//     params: { subslug: item.subslug, slug: item.slug },
//   }))
//   return {
//     paths,
//     fallback: false,
//   }
// }

export default Item
