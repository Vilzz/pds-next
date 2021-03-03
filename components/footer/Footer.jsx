import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFooterCategories } from '../../redux/actions/categories'
import { aboutUs, profileMenu } from './helpers'
import Footersocial from './Footersocial.jsx'
import Footercopyright from './Footercopyright.jsx'
import Footermail from './Footermail.jsx'
import Footermenu from './Footermenu.jsx'

const Footer = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFooterCategories())
  }, [])
  const footercats = useSelector((state) => state.categories.footercats)
  return (
    <footer className='bg-dark pt-5'>
      <Container>
        <Row className='pb-2'>
          <Col sm={6} md={4}>
            {footercats !== null && (
              <Footermenu
                menudata={{
                  header: 'Каталог подарков и сувениров',
                  menus: [...footercats.data],
                }}
              />
            )}
          </Col>
          <Col sm={6} md={4}>
            <Footermenu menudata={profileMenu} />
            <Footermenu menudata={aboutUs} />
          </Col>
          <Col md={4}>
            <Footermail />
            <Footersocial />
            <Footercopyright />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
