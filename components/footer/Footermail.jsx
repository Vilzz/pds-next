const Footermail = () => {
  return (
    <div className='widget pb-2 mb-4'>
      <h3 className='widget-title text-light pb-1'>Будь на связи!</h3>
      <form className='input-group input-group-overlay flex-nowrap'>
        <div className='input-group-prepend-overlay'>
          <span className='input-group-text text-muted font-size-base'>
            <i className='czi-mail'></i>
          </span>
        </div>
        <input
          type='email'
          placeholder='Электронная почта'
          className='form-control prepended-form-control'
        />
        <div className='input-group-append'>
          <button className='btn btn-primary' type='submit'>
            Подпишись
          </button>
        </div>
      </form>
      <small className='form-text text-light opacity-50'>
        *Подписывайся на нашу рассылку и будь в курсе промоакций
      </small>
    </div>
  )
}

export default Footermail
