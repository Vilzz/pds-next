import Link from 'next/link'
import Image from 'next/image'
const Catalogheader = ({ slug, name, photo, subname, subslug }) => {
  return (
    <div className='bg-bgcol py-4'>
      <div className='container d-lg-flex justify-content-between py-2 py-lg-3'>
        <div className='order-lg-2 mb-3 mb-lg-0 pt-lg-2'>
          <nav>
            <ol className='breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start'>
              {!slug ? (
                <>
                  <li className='breadcrumb-item'>
                    <Link href='/'>
                      <a className='text-nowrap'>
                        <i className='czi-home'></i>Главная
                      </a>
                    </Link>
                  </li>
                  <li className='breadcrumb-item text-nowrap active'>
                    Каталог
                  </li>
                </>
              ) : (
                <>
                  <li className='breadcrumb-item'>
                    <Link href='/'>
                      <a className='text-nowrap'>
                        <i className='czi-home'></i>Главная
                      </a>
                    </Link>
                  </li>

                  <li className='breadcrumb-item text-nowrap'>
                    <Link href='/catalog'>
                      <a className='text-nowrap'>Каталог</a>
                    </Link>
                  </li>
                  {!subslug ? (
                    <li className='breadcrumb-item text-nowrap active'>
                      {name}
                    </li>
                  ) : (
                    <>
                      <li className='breadcrumb-item text-nowrap'>
                        <Link href={!slug ? '/catalog' : `/catalog/${slug}`}>
                          <a className='text-nowrap'>{name}</a>
                        </Link>
                      </li>
                      <li className='breadcrumb-item text-nowrap active'>
                        {subname}
                      </li>
                    </>
                  )}
                </>
              )}
            </ol>
          </nav>
        </div>
        <div className='order-lg-1 pr-lg-4 text-center text-lg-left'>
          <h1 className='display-6 mb-0 text_bold'>
            {photo && <Image width={40} height={40} src={photo} alt={name} />}
            <span className={photo ? 'ml-3' : 'ml-0'}>
              {!subslug ? name : subname}
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Catalogheader
