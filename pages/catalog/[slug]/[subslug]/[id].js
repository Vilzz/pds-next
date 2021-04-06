import axios from 'axios'
import { useRouter } from 'next/router'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Catalogheader from '../../../../components/bredcrambs/Catalogheader.jsx'
const Product = ({ group, subcategory }) => {
  const router = useRouter()
  const { id, slug, subslug } = router.query
  return (
    <div>
      <Head>
        <title>Про-движение | {group.data.name}</title>
        <meta name='description' content={group.data.name} lang='ru-RU' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Catalogheader
        slug={slug}
        subslug={subslug}
        name={subcategory.data[0].name}
        subname={subcategory.data[0].name}
      />
      <Container className='my-4'>
        <Row className='devbd'>
          <h2>Тут будет что-то</h2>
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
                  alt={group.data.name}
                />
              </Col>
            </Row>
            <Row>
              <h6>Описание:</h6>
              <p className='font-size-sm'>{group.data.description}</p>
            </Row>
          </Col>
          <Col sm={12} md={6}>
            <div className='h-100 bg-light rounded-lg py-5 px-4 px-sm-5 devbd'>
              <Link href='#'>
                <a className='product-meta d-block font-size-sm pb-2'>
                  {subcategory.data[0].name}
                </a>
              </Link>

              <h1 className='h2'>{group.data.name}</h1>
              <Row className='align-items-center'>
                <Col>Артикул: {group.data.article}</Col>
                <Col>
                  <div className='h2 font-weight-normal text-accent text-right'>
                    <small>Цена: </small>
                    {group.data.price}
                    <small>руб.</small>
                  </div>
                </Col>
              </Row>

              <div className='form-group d-flex flex-wrap align-items-center pt-4 pb-2'>
                <select
                  className='custom-select mr-3 mb-3'
                  style={{ width: '5rem' }}
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                </select>
                <Button
                  variant='primary'
                  className='btn-shadow mr-3 mb-3'
                  type='submit'
                >
                  <i className='czi-cart font-size-lg mr-2'></i>Заказать
                </Button>
                <button
                  className='btn btn-icon btn-secondary mb-3'
                  type='submit'
                  data-toggle='tooltip'
                  title='Add to Wishlist'
                >
                  <i className='czi-heart font-size-lg'></i>
                </button>
              </div>

              <Row>
                <Col>
                  <h6>Материалы:</h6>
                  <ul className='list-unstyled font-size-sm pt-2 mb-0'>
                    {group.data.material.split(';').map((mt) => (
                      <li key={mt}>
                        <i className='czi-check-circle text-success mr-2'></i>
                        {mt}
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col>
                  <h6>Размеры:</h6>
                  <ul className='list-unstyled font-size-sm pt-2 mb-0'>
                    {group.data.product_size.split(';').map((sz) => (
                      <li key={sz}>
                        <i className='czi-check-circle text-info mr-2'></i>
                        {sz}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
              <Row className='d-flex justify-content-center align-items-end'>
                <Link href={`/catalog/${slug}/${subslug}`}>
                  <a className='btn btn-info'>
                    <i className='czi-reply font-size-lg mr-2'></i>В каталог
                  </a>
                </Link>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export const getServerSideProps = async (context) => {
  const { id, subslug } = context.params
  const product = await axios.get(
    `${process.env.NEXT_PUBLIC_DEV_SERVER}/groups/${id}`
  )
  const subctg = await axios.get(
    `${process.env.NEXT_PUBLIC_DEV_SERVER}/subcategories?slug=${subslug}&select=name,parent,-groups&limit=1`
  )
  return {
    props: {
      group: product.data,
      subcategory: subctg.data,
    },
  }
}
export default Product
