import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Catalog.module.scss'
const Catalogcard = ({ photo, name, subcategories, catalog_slug }) => {
  return (
    <div className={styles.pds_catalog_card}>
      <div className={styles.pds_catalog_vieport}>
        <div className={styles.pds_card_title}>
          <div className={styles.pds_icon_container}>
            <Link href={`/catalog/${catalog_slug}`}>
              <a>
                <Image width={100} height={100} src={photo} alt={name} />
              </a>
            </Link>
          </div>

          <h6 className='text-left text_bold ml-3'>
            <Link href={`/catalog/${catalog_slug}`}>
              <a>{name}</a>
            </Link>
          </h6>
        </div>
        <ul className={styles.pds_catalog_list}>
          {subcategories.map(({ _id, name, slug }) => (
            <li className='font-size-xs text_bold' key={_id}>
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
