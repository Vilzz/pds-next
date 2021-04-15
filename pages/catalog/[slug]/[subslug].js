import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getGroups, searchByText, clearGroups } from '../../../redux/actions/groups.js'
import Head from 'next/head'
import Catalogheader from '../../../components/bredcrambs/Catalogheader.jsx'
import Subcatalogmenu from '../../../components/catalog/subcatalog/Subcatalogmenu.jsx'
import CardsHolder from '../../../components/products/CardsHolder.jsx'
import { Container, Row, Col } from 'react-bootstrap'

const Item = ({ parent, groups }) => {
  const dispatch = useDispatch()

  const [products, setProducts] = useState(null)
  
  const [byPrice, setByPrice] = useState(false)
  
  const [searchString, setSearchString] = useState('')
  
  const productGroups = useSelector((state) => state.groups)
  //Заполняем state "products" товарами подкатегории, props ({groups}) from serverSideProps
  useEffect(() => {
    groups !== null && setProducts(groups.data[0].groups)
    productGroups.groups !== null && dispatch(clearGroups())
  }, [groups])

  // Перезаписываем state "products" отсортированными данными from redux
  useEffect(() => {
    !productGroups.loading &&
      productGroups.groups !== null &&
      setProducts(productGroups.groups.data)
  }, [productGroups])

  const [curentSubctg, setCurentCtg] = useState([])
  //Получаем переменные параметры маршрута /категория(slug)/подкатегория(subslug)
  const router = useRouter()
  const { slug, subslug } = router.query

  useEffect(() => {
    parent !== null &&
      setCurentCtg(
        parent.data.subcategories.filter((item) => item.slug === subslug)[0]
      )
  }, [subslug])
  // Выполняем rudux запрос для сортировки по цене, первое нажатие сортировка по возрастанию, второе по убыванию цены, При этом срабатывает useEffect и происходит перезапись state "products",
  const sortByPrice = () => {
    dispatch(
      getGroups(groups.data[0]._id, byPrice ? '&sort=-price' : '&sort=price',products.length)
    )
    // Меняем отображаемую иконку и направление сортировки
    setByPrice(!byPrice)
  }
  const searchFilter = (e) => {
    e.preventDefault()
    dispatch(
      searchByText(searchString,groups.data[0]._id)
    )
    
  }
  
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
            <div className='form-group-sm form-group-overlay d-none d-lg-flex'>
              <input
                className='form-control form-control-sm appended-form-control'
                type='text'
                name='search'
                placeholder='Поиск'
                onChange = {e => setSearchString(e.target.value)}
              />
              <div className='input-group-append-overlay'>
                <button 
                  className='btn btn-sm btn-primary' 
                  type='button' 
                  onClick={e=>searchFilter(e)}
                >
                  <i className='czi-search'></i>
                </button>
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
                    <a
                      className='nav-link'
                      href='#'
                      onClick={() => sortByPrice()}
                    >
                      Цене
                      {byPrice ? (
                        <i className='czi-arrow-down font-size-xs ml-2'></i>
                      ) : (
                        <i className='czi-arrow-up font-size-xs ml-2'></i>
                      )}
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
              groups={products}
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
    `${process.env.NEXT_PUBLIC_DEV_SERVER}/subcategories?slug=${subslug}&select=groups,_id`
  )

  return {
    props: {
      parent: parent.data,
      groups: groups.data,
    },
  }
}

export default Item
