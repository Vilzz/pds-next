import Image from 'next/image'
import Link from 'next/link'
const CardsHolder = ({ groups: { groups }, slug, subslug, subname }) => {
  return (
    <div
      className='row no-gutters mx-n3'
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
              title='Add to wishlist'
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

              <div className='product-price'>
                <span className='text-accent'>
                  {group.price}
                  <small> руб. </small>
                </span>
              </div>
              <div className='card-footer'>
                <button
                  className='btn btn-primary btn-shadow btn-sm'
                  type='button'
                  data-toggle='toast'
                  data-target='#cart-toast'
                >
                  подробнее...
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardsHolder
