const Sorting = () => {
  return (
    <section className='d-md-flex justify-content-between align-items-center '>
      <div className='d-flex align-items-center'>
        <div className='d-none d-sm-block font-size-sm text-muted text-nowrap mr-2'>
          Сортировать по:
        </div>
        <ul className='nav nav-tabs font-size-sm mb-0'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Цене<i className='czi-arrow-up-circle font-size-sm ml-2'></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Sorting
