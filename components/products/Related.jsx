import { Row, Col, Container } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

const Related = () => {
  return (
    <Container>
      <Row className='gallery'>
        <Col xl={4} sm={6} className='mb-grid-gutter'>
          <Link href='/images/products/medium/md_6079.60_4.jpg'>
            <a
              className='gallery-item rounded-3'
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <div
                style={{
                  position: 'relative',
                  width: '200px',
                  height: '200px',
                }}
              >
                <Image
                  layout='fill'
                  objectFit='contain'
                  src='/images/products/medium/md_6079.60_4.jpg'
                  alt='Ручка'
                  quality={100}
                />
              </div>

              <span className='gallery-item-caption'>Заголовок</span>
            </a>
          </Link>
        </Col>
        <Col xl={4} sm={6} className='mb-grid-gutter'>
          <Link href='/images/products/medium/md_6079.60_4.jpg'>
            <a
              className='gallery-item rounded-3'
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <div
                style={{
                  position: 'relative',
                  width: '200px',
                  height: '200px',
                }}
              >
                <Image
                  layout='fill'
                  objectFit='contain'
                  src='/images/products/medium/md_6079.60_4.jpg'
                  alt='Ручка'
                  quality={100}
                />
              </div>

              <span className='gallery-item-caption'>Заголовок</span>
            </a>
          </Link>
        </Col>
        <Col xl={4} sm={6} className='mb-grid-gutter'>
          <Link href='/images/products/medium/md_6079.60_4.jpg'>
            <a
              className='gallery-item rounded-3'
              data-sub-html='<h6 class="fs-sm text-light">Gallery image caption</h6>'
            >
              <div
                style={{
                  position: 'relative',
                  width: '400px',
                  height: '200px',
                }}
              >
                <Image
                  layout='fill'
                  objectFit='contain'
                  src='/images/products/large/6079.60_4.jpg'
                  alt='Ручка'
                  quality={100}
                />
              </div>

              <span className='gallery-item-caption'>Заголовок</span>
            </a>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Related
