const Footersocial = () => {
  return (
    <div className='widget pb-2 mb-4'>
      <h3 className='widget-title text-light pb-1'>Мы в сети</h3>
      <div className='d-flex flex-wrap'>
        {socials.map(({ id, clname, link }) => (
          <a
            key={id}
            className='social-btn sb-light sb-twitter ml-2 mb-2'
            href={link}
          >
            <i className={`czi-${clname}`}></i>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footersocial

const socials = [
  {
    id: 1,
    clname: 'twitter',
    link: '#!',
  },
  {
    id: 2,
    clname: 'facebook',
    link: '#!',
  },
  {
    id: 3,
    clname: 'instagram',
    link: '#!',
  },
  {
    id: 4,
    clname: 'pinterest',
    link: '#!',
  },
  {
    id: 5,
    clname: 'youtube',
    link: '#!',
  },
]
