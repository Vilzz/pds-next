import axios from 'axios'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Catalogheader from '../../../components/bredcrambs/Catalogheader.jsx'
import Subcatalogmenu from '../../../components/catalog/subcatalog/Subcatalogmenu.jsx'
import { Container, Row, Col } from 'react-bootstrap'
const Item = ({ subcategories, parent }) => {
  const router = useRouter()
  const { slug, subslug } = router.query
  return (
    <div>
      <Head>
        <title>Про-движение | {subcategories.data.name}</title>
        <meta
          name='description'
          content={subcategories.data.description}
          lang='ru-RU'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Catalogheader
        slug={slug}
        name={parent.data[0].name}
        subslug={subslug}
        subname={subcategories.data.name}
      />
      <Container className='pds_container py-3'>
        <Row className='w-75'>
          <Col sm={12} md={5} className='mt-3'>
            <Subcatalogmenu
              subcategories={parent.data[0].subcategories}
              slug={slug}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}
export const getServerSideProps = async (context) => {
  const { slug } = context.params
  const parent = await axios.get(
    `${process.env.NEXT_PUBLIC_DEV_SERVER}/categories?slug=${slug}&select=name`
  )
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_DEV_SERVER}/subcategories/${context.params.subslug}`
  )
  return {
    props: {
      subcategories: res.data,
      parent: parent.data,
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
