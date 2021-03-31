import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const PreviewCard = ({ product, subslug, subcatalogname }) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className='card product-card card-static pb-3 devbd'>
      <button
        className='btn-wishlist btn-sm'
        type='button'
        data-toggle='tooltip'
        data-placement='left'
        title='Нравиться'
      >
        <i className='czi-heart'></i>
      </button>
      <Link href={`/catalog/${slug}/${subslug}`}>
        <a className='card-img-top d-block overflow-hidden'>
          <Image
            width={200}
            height={200}
            src={product.small_img}
            alt={product.name}
            quality={100}
            className='incardimg'
          />
        </a>
      </Link>
      <div className='card-body py-2'>
        <Link href={`/catalog/${slug}/${subslug}`}>
          <a className='product-meta d-block font-size-xs pb-1'>
            {subcatalogname}
          </a>
        </Link>

        <h3 className='product-title font-size-sm'>
          <Link href={`/catalog/${slug}/${subslug}/${product._id}`}>
            <a>{product.name}</a>
          </Link>
        </h3>
        <div className='product-price'>
          <span className='text-accent'>
            {product.price}
            <small> руб.</small>
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
  )
}

export default PreviewCard
