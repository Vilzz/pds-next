import axios from 'axios'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  getSortedGroups,
  getGroups,
  searchByText,
  clearGroups,
} from '../../../redux/actions/groups.js'

import Head from 'next/head'
import Catalogheader from '../../../components/bredcrambs/Catalogheader.jsx'
import Subcatalogmenu from '../../../components/catalog/subcatalog/Subcatalogmenu.jsx'
import CardsHolder from '../../../components/products/CardsHolder.jsx'
import { Container, Row, Col } from 'react-bootstrap'

const Item = ({ groups }) => {
  const dispatch = useDispatch()
  //Получаем переменные параметры маршрута /категория(slug)/подкатегория(subslug)
  const router = useRouter()
  const { slug, subslug } = router.query

  const [products, setProducts] = useState(null)

  const [curentSubctg, setCurentCtg] = useState({})

  const [byPrice, setByPrice] = useState(false)
  // Хотел сделать лимит выдачи по подкатегориям но надо ли?????
  const [productLimit, setProductLimit] = useState('2000')

  const [searchStr, setSearchStr] = useState('')

  const [queryParams, setQueryParams] = useState({
    find: '',
    sort: '',
    subcategories: '',
  })
  useEffect(() => {
    setQueryParams({
      ...queryParams,
      sort: byPrice ? '&sort=-price' : '&sort=price',
      find: `&search=${searchStr}`,
    })
  }, [byPrice, searchStr])

  const productGroups = useSelector((state) => state.groups)

  //Заполняем state "products" товарами подкатегории, props ({groups}) from serverSideProps
  useEffect(() => {
    if (groups !== null) {
      setProducts(
        groups.data[0].groups.filter((grs, idx) => idx < parseInt(productLimit))
      )
      setQueryParams({
        ...queryParams,
        subcategories: `?subcategories=${groups.data[0]._id}`,
      })
      setCurentCtg({
        _id: groups.data[0]._id,
        name: groups.data[0].name,
        description: groups.data[0].description,
        slug: subslug,
      })
    }
    productGroups.groups !== null && dispatch(clearGroups())
  }, [groups])

  // Перезаписываем state "products" отсортированными данными from redux
  useEffect(() => {
    !productGroups.loading &&
      productGroups.groups !== null &&
      setProducts(productGroups.groups.data)
  }, [productGroups])

  // Выполняем rudux запрос для сортировки по цене, первое нажатие сортировка по возрастанию, второе по убыванию цены, При этом срабатывает useEffect и происходит перезапись state "products",
  const sortByPrice = () => {
    dispatch(getSortedGroups(queryParams, products.length))
    // Меняем иконку и направление сортировки
    setByPrice(!byPrice)
  }

  const searchFilter = (e) => {
    e.preventDefault()
    queryParams.find
      ? dispatch(searchByText(queryParams, products.length))
      : dispatch(getGroups(queryParams.subcategories, groups.length))
  }

  const clearSearch = (e) => {
    dispatch(getGroups(queryParams.subcategories, groups.length))
    setSearchStr('')
  }
  const changeLimit = (e) => {
    setProductLimit(e.target.value)
    dispatch(getGroups(queryParams.subcategories, e.target.value))
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
        name={groups.data[0].parent.name}
        subslug={subslug}
        subname={curentSubctg.name}
      />
      <Container className='pds_container'>
        <Row className='d-flex justify-content-between align-items-center mt-2 b-shadow'>
          <Col lg={3} sm={6}>
            <section className='d-md-flex justify-content-between align-items-center '>
              <div className='input-group input-group-sm d-flex align-items-center'>
                <div className='input-group-prepend'>
                  <span className='d-none d-sm-block font-size-sm text-muted text-nowrap mr-4'>
                    Показывать по:
                  </span>
                </div>
                <select
                  className='form-control form-control-sm custom-select'
                  onChange={(e) => changeLimit(e)}
                  value={productLimit}
                >
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                  <option value={500}>500</option>
                  <option value={2000}>2000</option>
                </select>
              </div>
            </section>
          </Col>
          <Col md={3}>
            <div className='form-group-sm form-group-overlay d-none d-lg-flex'>
              <input
                className='form-control form-control-sm appended-form-control'
                type='text'
                name='search'
                placeholder='Поиск'
                value={searchStr}
                onChange={(e) => setSearchStr(e.target.value)}
              />
              <div className='input-group-append-overlay'>
                <button
                  className='btn btn-sm btn-primary'
                  type='button'
                  onClick={(e) => searchFilter(e)}
                >
                  <i className='czi-search'></i>
                </button>
                <button
                  className='btn btn-sm btn-warning ml-1'
                  type='button'
                  onClick={(e) => clearSearch(e)}
                >
                  <i className='czi-close'></i>
                </button>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className='form-group-sm form-group-overlay d-none d-lg-flex'>
              {/* Добавить фильтрацию по артиклу */}
              <input
                className='form-control form-control-sm appended-form-control'
                type='text'
                name='article'
                placeholder='Артикул'
                //onChange={(e) => setSearchStr(e.target.value)}
              />
            </div>
          </Col>
          <Col md={3} sm={6}>
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
                </ul>
              </div>
            </section>
          </Col>
        </Row>
        <Row className='my-3'>
          <Col sm={12} md={3}>
            <Subcatalogmenu
              slug={slug}
              id={groups.data[0].parent._id}
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
  const { subslug } = context.params
  const groups = await axios.get(
    `${process.env.NEXT_PUBLIC_DEV_SERVER}/subcategories?slug=${subslug}&select=groups,_id,parent,name,description`
  )

  return {
    props: {
      groups: groups.data,
    },
  }
}

export default Item
