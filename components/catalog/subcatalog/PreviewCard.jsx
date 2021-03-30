import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const PreviewCard = ({ product, subslug, subcatalogname }) => {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div class='card product-card card-static pb-3'>
      <button
        class='btn-wishlist btn-sm'
        type='button'
        data-toggle='tooltip'
        data-placement='left'
        title='Нравиться'
      >
        <i class='czi-heart'></i>
      </button>
      <Link href={`/catalog/${slug}/${subslug}`}>
        <a class='card-img-top d-block overflow-hidden'>
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
      <div class='card-body py-2'>
        <Link href={`/catalog/${slug}/${subslug}`}>
          <a class='product-meta d-block font-size-xs pb-1'>{subcatalogname}</a>
        </Link>

        <h3 class='product-title font-size-sm'>
          <a href='grocery-single.html'>{product.name}</a>
        </h3>
        <div class='product-price'>
          <span class='text-accent'>
            {product.price}
            <small> руб.</small>
          </span>
        </div>
        <div className='card-footer'>
          <button
            class='btn btn-primary btn-shadow btn-sm'
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
