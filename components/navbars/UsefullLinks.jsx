import React, { useState } from 'react'

const UsefullLinks = () => {
  const [showLinks, setShowLinks] = useState(false)
  const onMouseEnter = () => {
    setShowLinks(true)
  }
  const onMouseLeave = () => {
    setShowLinks(false)
  }
  const show = () => {
    return showLinks ? { display: 'block' } : { display: 'none' }
  }
  return (
    <div className='topbar-text dropdown d-md-none ml-1'>
      <a
        className='topbar-link dropdown-toggle'
        href='#!'
        data-toggle='dropdown'
        onMouseEnter={onMouseEnter}
      >
        Полезные ссылки
      </a>
      <ul className='dropdown-menu' style={show()} onMouseLeave={onMouseLeave}>
        {usefullLinks.map((lnk, idx) => (
          <li key={idx}>
            <a className='dropdown-item' href={lnk.href}>
              <i className={lnk.cls}></i>
              {lnk.txt}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsefullLinks

const usefullLinks = [
  {
    href: 'tel:00331697720',
    txt: 'Контактный номер',
    cls: 'czi-support text-muted mr-2',
  },
  {
    href: '/contacts',
    txt: 'Наш адрес',
    cls: 'czi-location text-muted mr-2',
  },
]
