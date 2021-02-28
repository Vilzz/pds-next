const Spinner = ({ stl }) => {
  return (
    <div className='row d-flex justify-content-center align-items-center'>
      <div className='col-6 mt-5 mb-5'>
        <div className='spinner-border' style={stl}>
          <span className='sr-only'>Загрузка...</span>
        </div>
      </div>
    </div>
  )
}

export default Spinner
