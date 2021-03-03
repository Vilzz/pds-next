import Link from 'next/link'
const Footermenu = ({ menudata }) => {
  return (
    <div className='widget widget-links widget-light pb-2 mb-4'>
      <h3 className='widget-title text-light'>{menudata.header}</h3>
      <ul className='widget-list'>
        {menudata.menus.map(({ _id, name, slug }) => (
          <li className='widget-list-item' key={_id}>
            <Link href={!slug ? '#!' : `/catalog/${slug}`}>
              <a className='widget-list-link'>{name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footermenu
