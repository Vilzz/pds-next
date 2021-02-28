import Link from 'next/link'
import { Container } from 'react-bootstrap'
const Pagesnav = () => {
  return (
    <div className='navbar navbar-expand-lg navbar-light bg-light mt-n2 pt-0 pb-2 mb-2'>
      <Container>
        <div className='collapse navbar-collapse'>
          <hr className='d-lg-none mt-3mb-2' />
          <ul className='navbar-nav mega-navpr-lg-2mr-lg-2'>
            <li className='nav-item dropdown'>
              <Link href='/catalog'>
                <a className='nav-link dropdown-toggle pl-0'>
                  <i className='czi-view-grid mr-2'></i>Каталог
                </a>
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav'>
            {menuItems.map((item, idx) => (
              <li className='nav-item' key={idx}>
                <Link href={item.urlTo}>
                  <a
                    className='nav-link text-left'
                    style={{ fontSize: '13px', fontWeight: 'bold' }}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default Pagesnav

const menuItems = [
  {
    name: 'Сувениры и подарки',
    urlTo: '/gifts',
  },
  {
    name: 'Полиграфия и печать',
    urlTo: '/printings',
  },
  {
    name: 'Наружная реклама',
    urlTo: '/outdoors',
  },
  {
    name: 'Интерьерная печать',
    urlTo: '/interiers',
  },
  {
    name: 'Нанесения логотипа',
    urlTo: '/logoworks',
  },
  {
    name: 'Организация праздников',
    urlTo: '/holydays',
  },
]
