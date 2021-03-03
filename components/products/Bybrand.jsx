import Link from 'next/link'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'

const Bybrand = () => {
  return (
    <Container>
      <Row>
        <Col xl={3} md={4} sm={6} className='mb-grid-gutter'>
          <Link href='#!'>
            <a>
              <div
                className='d-flex justify-content-center align-items-center bg-white shadow-lg rounded-3 py-3 py-sm-4'
                style={{ width: '250px', height: '150px' }}
              >
                <Image
                  width={160}
                  height={160}
                  alt='Montblanc'
                  src='/images/logos/montblanc.svg'
                />
              </div>
            </a>
          </Link>
        </Col>
        <Col xl={3} md={4} sm={6} className='mb-grid-gutter'>
          <Link href='#!'>
            <a>
              <div
                className='d-flex justify-content-center align-items-center bg-white shadow-lg rounded-3 py-3 py-sm-4'
                style={{ width: '250px', height: '150px' }}
              >
                <Image
                  width={160}
                  height={160}
                  alt='Adidas'
                  src='/images/logos/adidas.svg'
                />
              </div>
            </a>
          </Link>
        </Col>
        <Col xl={3} md={4} sm={6} className='mb-grid-gutter'>
          <Link href='#!'>
            <a>
              <div
                className='d-flex justify-content-center align-items-center bg-white shadow-lg rounded-3 py-3 py-sm-4'
                style={{ width: '250px', height: '150px' }}
              >
                <Image
                  width={120}
                  height={120}
                  alt='Bugatti'
                  src='/images/logos/bugatti-eb-1.svg'
                />
              </div>
            </a>
          </Link>
        </Col>
        <Col xl={3} md={4} sm={6} className='mb-grid-gutter'>
          <Link href='#!'>
            <a>
              <div
                className='d-flex justify-content-center align-items-center devbd shadow-lg rounded-3 py-3 py-sm-4'
                style={{ width: '250px', height: '150px' }}
              >
                <Image
                  className='logo_image'
                  width={160}
                  height={160}
                  alt='Disney'
                  src='/images/logos/disney.svg'
                />
              </div>
            </a>
          </Link>
        </Col>
        <Col xl={3} md={4} sm={6} className='mb-grid-gutter'>
          <Link href='#!'>
            <a>
              <div
                className='d-flex justify-content-center align-items-center bg-white shadow-lg rounded-3 py-3 py-sm-4'
                style={{ width: '250px', height: '150px' }}
              >
                <Image
                  width={160}
                  height={160}
                  alt='Montegrappa'
                  src='/images/logos/montegrappa.svg'
                />
              </div>
            </a>
          </Link>
        </Col>
        <Col xl={3} md={4} sm={6} className='mb-grid-gutter'>
          <Link href='#!'>
            <a>
              <div
                className='d-flex justify-content-center align-items-center bg-white shadow-lg rounded-3 py-3 py-sm-4'
                style={{ width: '250px', height: '150px' }}
              >
                <Image
                  width={160}
                  height={160}
                  alt='Sheaffer'
                  src='/images/logos/sheaffer.svg'
                />
              </div>
            </a>
          </Link>
        </Col>
        <Col xl={3} md={4} sm={6} className='mb-grid-gutter'>
          <Link href='#!'>
            <a>
              <div
                className='d-flex justify-content-center align-items-center bg-white shadow-lg rounded-3 py-3 py-sm-4'
                style={{ width: '250px', height: '150px' }}
              >
                <Image
                  width={160}
                  height={160}
                  alt='Parker'
                  src='/images/logos/parker.svg'
                />
              </div>
            </a>
          </Link>
        </Col>
        <Col xl={3} md={4} sm={6} className='mb-grid-gutter'>
          <Link href='#!'>
            <a>
              <div
                className='d-flex justify-content-center align-items-center bg-white shadow-lg rounded-3 py-3 py-sm-4'
                style={{ width: '250px', height: '150px' }}
              >
                <Image
                  width={160}
                  height={160}
                  alt='Bic'
                  src='/images/logos/bic.svg'
                />
              </div>
            </a>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Bybrand
