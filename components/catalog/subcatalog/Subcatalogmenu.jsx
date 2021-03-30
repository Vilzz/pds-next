import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCategory } from '../../../redux/actions/categories.js'
const Subcatalogmenu = ({ slug, id, subslug }) => {
  const dispatch = useDispatch()

  const [menuItems, setMenuItems] = useState([])
  useEffect(() => {
    dispatch(getCategory(id))
  }, [getCategory, id])

  const { category, loading } = useSelector((state) => state.categories)

  useEffect(() => {
    !loading &&
      category !== null &&
      setMenuItems(
        category.data.subcategories.map(({ _id, name, slug, groups }) => {
          return { _id, name, slug, counts: groups.length }
        })
      )
  }, [category, loading])
  return (
    <div className='widget widget-links py-3'>
      <ul className='widget-list'>
        {menuItems.map((sctg) => (
          <li
            className={
              sctg.slug === subslug
                ? 'widget-list-item active'
                : 'widget-list-item'
            }
            key={sctg._id}
            style={{ letterSpacing: '-0.8px' }}
          >
            <Link href={`/catalog/${slug}/${sctg.slug}`}>
              <a className='px-2 widget-list-link font-size-sm d-flex justify-content-between align-items-center'>
                <span>
                  <i className='czi-arrow-right-circle mr-2'></i>
                  {sctg.name}
                </span>
                <span
                  className='text-light badge badge-shadow badge-pill badge-info font-size-xs'
                  style={{ minWidth: '36px', fontWeight: '600' }}
                >
                  {sctg.counts}
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Subcatalogmenu
