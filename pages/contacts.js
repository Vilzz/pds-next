import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Container } from 'react-bootstrap'

const PDSMap = dynamic(() => import('../components/contacts/Pdsmap'), {
  ssr: false,
})
const Contacts = () => {
  return (
    <Container className='mb-5'>
      {/* <Head>
        <title>Про-движение | Контакты</title>
        <link rel='icon' href='/favicon.ico' />
      </Head> */}
      <h1 className='display-4 text-center py-4'>Контактная информация</h1>
      <PDSMap />
    </Container>
  )
}

export default Contacts
