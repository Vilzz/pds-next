import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

const Product = ({ group, subcategory }) => {
  const [image, setImage] = useState('')
  useEffect(() => {
    group !== null && setImage(group.data.big_img)
  }, [group])
  const router = useRouter()
  const { id, slug, subslug } = router.query
  return (
    <div>
      <Head>
        <title>Про-движение | {group.data.name}</title>
        <meta name='description' content={group.data.name} lang='ru-RU' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Container className='my-4'>
        <Row className='bg-bgcol'>
          <h2>Тут будет что-то</h2>
        </Row>
        <Row>
          <Col sm={12} md={6} className='pt-4'>
            <Row className='mb-5'>
              <Col md={2} className='thumbs-holder p-0'>
                {group.data.attachments.length > 0 &&
                  group.data.attachments.map((attach, idx) => (
                    <div
                      className='p-2 thumb-img'
                      onClick={() => setImage(attach)}
                      key={attach}
                    >
                      <Image
                        src={attach}
                        width={group.data.attachments.length > 5 ? 50 : 70}
                        height={group.data.attachments.length > 5 ? 50 : 70}
                        alt='Product thumb'
                      />
                    </div>
                  ))}
              </Col>
              <Col md={10} className='pt-3'>
                <Image
                  width={500}
                  height={500}
                  src={image ? image : group.data.big_img}
                  alt={group.data.name}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>Описание:</h6>
                <p className='font-size-sm'>{group.data.description}</p>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={6}>
            <div className='h-100 bg-light rounded-lg pt-4 px-4 px-sm-5'>
              <Link href={`/catalog/${slug}/${subslug}`}>
                <a className='product-meta d-block font-size-sm pb-2'>
                  {subcategory.data[0].name}
                </a>
              </Link>

              <h1 className='h3'>{group.data.name}</h1>
              <Row className='align-items-center'>
                <Col md={6}>
                  <div className='h2 font-weight-normal text-accent text-right d-flex justify-content-between'>
                    <span>
                      <small>Цена:</small>
                    </span>
                    <span>
                      {group.data.price}
                      <small> руб.</small>
                    </span>
                  </div>
                </Col>
                <Col md={6}>
                  <div className='d-flex justify-content-between'>
                    <span>Артикул:</span> <span>{group.data.article}</span>
                  </div>
                </Col>
                {!group.products && (
                  <Col md={12} className='d-flex justify-content-between'>
                    <span>Доступный остаток: </span>
                    <span
                      className={
                        group.data.stock.free < 0
                          ? 'text-danger'
                          : 'text-success'
                      }
                    >
                      {group.data.stock.free} <small> шт.</small>
                    </span>
                  </Col>
                )}
              </Row>
              <hr className='my-3' />
              {group.data.products.length > 0 && (
                <div>
                  {group.data.products.map((product) => (
                    <Row key={product._id}>
                      <Col md={7} className='d-flex justify-content-between'>
                        <span className='font-size-sm'>
                          Размер: {product.size_code}
                        </span>
                        <span className='text-accent'>
                          {product.price}
                          <small> руб.</small>
                        </span>
                      </Col>
                      <Col md={5} className='d-flex justify-content-between'>
                        <span className='font-size-sm'>Остаток: </span>
                        <span
                          className={
                            product.stock.free > 0
                              ? 'text-success font-weight-normal'
                              : 'text-danger'
                          }
                        >
                          {product.stock.free} <small> шт.</small>
                        </span>
                      </Col>
                    </Row>
                  ))}
                </div>
              )}

              <div className='form-group d-flex flex-wrap align-items-center pt-4 pb-2'>
                {group.data.products.length > 0 && (
                  <select
                    className='custom-select mr-3 mb-3'
                    style={{ width: '5rem' }}
                  >
                    {group.data.products.map((product) => (
                      <option value={product.size_code}>
                        {product.size_code}
                      </option>
                    ))}
                  </select>
                )}
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
                  <ul className='list-unstyled font-size-sm mb-3'>
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
                  <ul className='list-unstyled font-size-sm mb-0'>
                    {group.data.product_size.split(';').map((sz) => (
                      <li key={sz}>
                        <i className='czi-check-circle text-info mr-2'></i>
                        {sz}
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
              <hr />
              {group.data.pack && (
                <Row className='mt-3'>
                  <Col sm={12}>
                    <h6>Упаковка:</h6>
                  </Col>
                  <Col
                    sm={10}
                    className='d-flex justify-content-between font-size-sm'
                  >
                    <span>Количество штук в упаковке -</span>
                    <span> {group.data.pack.amount}</span>
                  </Col>
                  <Col
                    sm={10}
                    className='d-flex justify-content-between font-size-sm'
                  >
                    <span>Размер упаковки - </span>
                    <span>
                      {group.data.pack.sizex}cm x{group.data.pack.sizey}cm
                    </span>
                  </Col>
                  <Col
                    sm={10}
                    className='d-flex justify-content-between font-size-sm'
                  >
                    <span>Обьем упаковки - </span>
                    <span>{group.data.pack.volume}</span>
                  </Col>
                  <Col
                    sm={10}
                    className='d-flex justify-content-between font-size-sm'
                  >
                    <span>Вес упаковки - </span>
                    <span>{group.data.pack.weight}</span>
                  </Col>
                </Row>
              )}

              <Row className='d-flex justify-content-center align-items-end mt-5'>
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
