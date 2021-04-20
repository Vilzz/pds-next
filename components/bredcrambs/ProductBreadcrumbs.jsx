import Link from 'next/link'
const ProductBreadcrumbs = ({
  slug,
  slugname,
  subslug,
  subslugname,
  product,
  id,
}) => {
  return (
    <div className='bg-bgcol py-1'>
      <div className='container d-lg-flex justify-content-start py-1 py-lg-2'>
        <nav>
          <ol className='breadcrumb flex-lg-nowrap justify-content-center justify-content-lg-start'>
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
            <li className='breadcrumb-item text-nowrap'>
              <Link href={`/catalog/${slug}`}>
                <a className='text-nowrap'>{slugname}</a>
              </Link>
            </li>
            <li className='breadcrumb-item text-nowrap'>
              <Link href={`/catalog/${slug}/${subslug}`}>
                <a className='text-nowrap'>{subslugname}</a>
              </Link>
            </li>
            <li className='breadcrumb-item text-nowrap active'>{product}</li>
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default ProductBreadcrumbs
