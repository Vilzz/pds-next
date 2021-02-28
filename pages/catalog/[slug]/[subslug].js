import axios from 'axios'
import { useRouter } from 'next/router'
import Head from 'next/head'
const Item = ({ subcategories }) => {
  const router = useRouter()
  const { slug, subslug } = router.query
  return (
    <div>
      <Head>
        <title>Про-движение | {subcategories.data.name}</title>
        <meta
          name='description'
          content={subcategories.data.description}
          lang='ru-RU'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <h1 className='display-3'>{subcategories.data.name}</h1>
      <h3>{slug}</h3>
    </div>
  )
}
export const getServerSideProps = async (context) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_DEV_SERVER}/subcategories/${context.params.subslug}`
  )
  return {
    props: {
      subcategories: res.data,
    },
  }
}

// export const getStaticPaths = async () => {
//   const res = await axios.get(
//     `${process.env.NEXT_PUBLIC_DEV_SERVER}/subcategories`
//   )
//   const subcategories = res.data
//   const subslugs = subcategories.data.map((subslug) => ({
//     subslug: subslug.slug,
//     slug: subslug.parent.slug,
//   }))
//   const paths = subslugs.map((item) => ({
//     params: { subslug: item.subslug, slug: item.slug },
//   }))
//   return {
//     paths,
//     fallback: false,
//   }
// }

export default Item
