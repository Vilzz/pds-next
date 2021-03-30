const Sorting = () => {
  return (
    <section className='d-md-flex justify-content-between align-items-center mb-4 pb-2'>
      <div className='d-flex align-items-center'>
        <div className='d-none d-sm-block py-2 font-size-sm text-muted text-nowrap mr-2'>
          Сортировать по:
        </div>
        <ul className='nav nav-tabs font-size-sm mb-0'>
          <li className='nav-item'>
            <a className='nav-link active' href='#'>
              Популярные
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Дешевые
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Дорогие
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Sorting
