import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Col, Container, Row } from 'react-bootstrap'
import Instanews from '@/components/instanews/Instanews'

const PDSMap = dynamic(() => import('@/components/contacts/Pdsmap'), {
  ssr: false,
})
const Contacts = () => {
  return (
    <>
      <Container className='mb-5'>
        <Head>
          <title>Про-движение | Контакты</title>
          <link rel='icon' href='/favicon.ico' />
          <meta
            name='description'
            content='Контактная информация ООО Про-движение'
          />
        </Head>
        <Row className='d-flex justify-content-start'>
          <h2 className='text-center py-md-3'>Контактная информация</h2>
        </Row>
        <Row className='d-flex align-items-center'>
          <Col md={4}>
            <div className='card border-0 box-shadow'>
              <div className='card-body'>
                <ul className='list-unstyled mb-0'>
                  <li className='media pb-3 border-bottom'>
                    <i className='czi-location font-size-lg mt-2 mb-0 text-primary'></i>
                    <div className='media-body pl-3'>
                      <span className='font-size-ms text-muted'>Наш адрес</span>
                      <p className='lead text-muted'>
                        Самарская обл. г. Самара Полевой проезд дом 12
                      </p>
                    </div>
                  </li>
                  <li className='media pt-2 pb-3 border-bottom'>
                    <i className='czi-phone font-size-lg mt-2 mb-0 text-primary'></i>
                    <div className='media-body pl-3'>
                      <span className='font-size-ms text-muted'>
                        Наш телефон
                      </span>
                      <p className='lead text-muted'>
                        <a href='tel:+184725276533'>+7 222 3567687</a>
                      </p>
                    </div>
                  </li>
                  <li className='media pt-2 pb-3 border-bottom'>
                    <i className='czi-mail font-size-lg mt-2 mb-0 text-primary'></i>
                    <div className='media-body pl-3'>
                      <span className='font-size-ms text-muted'>
                        Наша почта
                      </span>
                      <p className='text-muted lead'>
                        <a href='mailto:email@example.com'>email@example.com</a>
                      </p>
                    </div>
                  </li>
                  <li className='media pt-2 pb-3'>
                    <i className='czi-telegram font-size-lg mt-2 mb-0 text-primary'></i>
                    <div className='media-body pl-3'>
                      <span className='font-size-ms text-muted'>
                        Наш телеграм
                      </span>
                      <p className='text-muted lead'>
                        <a href='tg://msg?text=pro-dvijenie'>Про-движение</a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={8}>
            <PDSMap />
          </Col>
        </Row>
      </Container>
      <Instanews />
    </>
  )
}

export default Contacts
