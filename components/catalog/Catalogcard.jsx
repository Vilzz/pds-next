import Link from 'next/link'
import styles from '../../styles/Catalog.module.scss'
const Catalogcard = ({ photo, name, subcategories, catalog_slug }) => {
  return (
    <div className={styles.pds_catalog_card}>
      <div className={styles.pds_catalog_vieport}>
        <div className={styles.pds_card_title}>
          <Link href={`/catalog/${catalog_slug}`}>
            <a>
              <img className='pds-icon' src={photo} alt={name} />
            </a>
          </Link>

          <h2 className='h5 text-left ml-3'>
            <Link href={`/catalog/${catalog_slug}`}>
              <a>{name}</a>
            </Link>
          </h2>
        </div>
        <ul className={styles.pds_catalog_list}>
          {subcategories.map(({ _id, name, slug }) => (
            <li className='font-size-sm' key={_id}>
              <Link href={`/catalog/${catalog_slug}/${slug}`}>
                <a className='nav-link-style'>
                  <i className='czi-arrow-right-circle mr-2'></i>
                  {name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Catalogcard
