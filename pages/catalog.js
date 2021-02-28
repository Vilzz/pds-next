import axios from 'axios'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Catalogcard from '../components/catalog/Catalogcard.jsx'

const Catalog = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Про-движение | Каталог</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='description'
          lang='ru-RU'
          content="Подарки, сувениры для бизнеса. Компания 'Про-движение' деловые подарки. Нанесение логотипа, брендирование"
        />
      </Head>
      <Container className='py-5' fluid style={{ backgroundColor: '#f1f1f1' }}>
        <h1 className='display-5 text-center text_bold'>
          Каталог сувениров и подарков
        </h1>
        <hr className='mt-5' />
        <div className='row ml-5 mr-lg-5 justify-content-md-center align-items-center pds_catalog tmp'>
          {categories !== null &&
            categories.data.map(({ name, photo, _id, subcategories, slug }) => (
              <Catalogcard
                name={name}
                photo={photo}
                subcategories={subcategories}
                catalog_slug={slug}
                key={_id}
              />
            ))}
        </div>
      </Container>
    </>
  )
}
export const getStaticProps = async (ctx) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_DEV_SERVER}/categories`
  )
  return { props: { categories: res.data } }
}
export default Catalog
