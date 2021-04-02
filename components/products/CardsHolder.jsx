import Image from 'next/image'
import Link from 'next/link'
const CardsHolder = ({ groups: { groups }, slug, subslug, subname }) => {
  return (
    <div
      className='row no-gutters mx-n3 subcatalog'
      style={{ height: '80vh', overflow: 'scroll' }}
    >
      {groups.map((group) => (
        <div className='col-xl-3 col-lg-6 col-md-4 col-sm-6 mb-3'>
          <div className='card product-card card-static pb-3'>
            <button
              className='btn-wishlist btn-sm'
              type='button'
              data-toggle='tooltip'
              data-placement='left'
              title='Добавить в хотелки'
            >
              <i className='czi-heart'></i>
            </button>
            <Link href={`/catalog/${slug}/${subslug}/${group._id}`}>
              <a className='card-img-top py-2 overflow-hidden'>
                <Image
                  width={200}
                  height={200}
                  src={group.small_img}
                  alt={group.name}
                />
              </a>
            </Link>

            <div className='card-body p-2'>
              <Link href={`/catalog/${slug}/${subslug}`}>
                <a className='product-meta d-block font-size-xs pb-1'>
                  {subname}
                </a>
              </Link>
              <div style={{ minHeight: '70px' }}>
                <h3 className='product-title font-size-sm'>
                  <Link href={`/catalog/${slug}/${subslug}/${group._id}`}>
                    <a>{group.name}</a>
                  </Link>
                </h3>
              </div>
              <div style={{ minHeight: '120px' }}>
                {group.brand && (
                  <div className='card-info px-2'>
                    <span className='font-size-sm'>Бренд:</span>
                    <span className='text-accent'>{group.brand}</span>
                  </div>
                )}
                <div className='card-info px-2'>
                  <span className='font-size-sm'>Артикул:</span>
                  <span className='text-accent'>{group.article}</span>
                </div>
                <div className='product-price d-flex justify-content-between px-2'>
                  <span className='font-size-sm'>Цена:</span>
                  <span className='text-accent'>
                    {group.price}
                    <small> руб. </small>
                  </span>
                </div>
                <div className='card-info px-2 pb-3'>
                  <span className='font-size-sm'>Остаток: </span>
                  <span
                    className={
                      group.stock !== null && group.stock.free === 0
                        ? 'text-danger'
                        : 'text-accent'
                    }
                  >
                    {group.stock !== null && group.stock.free} шт.
                  </span>
                </div>
              </div>

              <div className='card-footer d-flex justify-content-center'>
                <Link href={`/catalog/${slug}/${subslug}/${group._id}`}>
                  <a
                    className='btn btn-primary btn-shadow btn-sm'
                    type='button'
                  >
                    подробнее...{' '}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardsHolder
