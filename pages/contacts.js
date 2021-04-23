import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Container } from 'react-bootstrap'

const PDSMap = dynamic(() => import('../components/contacts/Pdsmap'), {
  ssr: false,
})
const Contacts = () => {
  return (
    <Container>
      {/* <Head>
        <title>Про-движение | Контакты</title>
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
      <h1 className='container mb-5'>Контактная информация</h1>
      <PDSMap />
    </Container>
  )
}

export default Contacts
