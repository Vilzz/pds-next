const Spinner = ({ stl }) => {
  return (
    <div className='col-12 d-flex flex-column justify-content-start align-items-center mt-5'>
      <h3 className='mb-5'>Загрузка...</h3>
      <div className='spinner-border' style={stl}>
        <span className='sr-only'>Загрузка...</span>
      </div>
    </div>
  )
}

export default Spinner
