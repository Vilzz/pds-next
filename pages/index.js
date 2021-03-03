import Head from 'next/head'
import BigSlider from '../components/slider/BigSlider.jsx'
import Instanews from '../components/instanews/Instanews.jsx'
import Related from '../components/products/Related.jsx'
import Bybrand from '../components/products/Bybrand.jsx'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Про-движение | Главная</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div>
        <BigSlider />
        <Related />
        <Bybrand />
        <Instanews />
      </div>
    </div>
  )
}
