import Head from 'next/head'
import BigSlider from '../components/slider/BigSlider.jsx'

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
      </div>
    </div>
  )
}
