import Link from 'next/link'
const Subcatalogmenu = ({ subcategories, slug }) => {
  return (
    <div className='widget widget-links mt-3'>
      <ul className='widget-list'>
        {subcategories.map((sctg) => (
          <li className='widget-list-item' key={sctg._id}>
            <Link href={`/catalog/${slug}/${sctg.slug}`}>
              <a className='widget-list-link font-size-sm'>
                <i className='czi-arrow-right-circle mr-2'></i>
                {sctg.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Subcatalogmenu
