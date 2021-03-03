const Instanews = () => {
  return (
    <div className='container-fluid px-0'>
      <div className='row no-gutters'>
        {twoBlocks.map(({ id, link, title, text, icon, color }) => (
          <div className='col-md-6' key={id}>
            <a
              href={link}
              className={`card border-0 rounded-0 text-decoration-none py-md-4 bg-faded-${color}`}
            >
              <div className='card-body text-center'>
                <i className={`${icon} h3 mt-2 mb-4 text-${color}`}></i>
                <h3 className='h5 mb-1'>{title}</h3>
                <p className='text-muted font-size-sm'>{text}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Instanews
const twoBlocks = [
  {
    id: 1,
    link: '#!',
    title: 'Наш блог',
    text: 'Последние новости, новинки, акции',
    icon: 'czi-edit',
    color: 'primary',
  },
  {
    id: 2,
    link: 'https://www.instagram.com/pdsamara/',
    title: 'Подпишись на инстаграм',
    text: 'Будь на связи! Будь всегда с нами!',
    icon: 'czi-instagram',
    color: 'accent',
  },
]
