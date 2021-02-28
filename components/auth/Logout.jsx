import { motion } from 'framer-motion'
import { logout } from '../../redux/actions/auth'
import { setAlert } from '../../redux/actions/alerts'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'

const Logout = ({ setLogOutModal, userName, setUserName }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const onLogout = () => {
    dispatch(logout())
    dispatch(setAlert(`Доброго дня! ${userName}`, 'accent'))
    setLogOutModal(false)
    setUserName('')
    router.push('/')
  }
  return (
    <div className='modal'>
      <motion.div
        className='modal-dialog'
        variants={logoutVariants}
        initial='startpoint'
        animate='endpoint'
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>
              <i className='navbar-tool-icon czi-sign-out mr-2'></i>
              Выход из аккаунта
            </h5>
            <button
              className='close'
              type='button'
              onClick={() => setLogOutModal(false)}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>Уже уходите, {userName} ?</div>
          <div className='pds_modal-footer row'>
            <div className='col-6'>
              <button
                className='btn btn-primary btn-block btn-shadow btn-sm'
                type='submit'
                onClick={() => onLogout()}
              >
                Выйти
              </button>
            </div>
            <div className='col-6'>
              <button
                className='btn btn-primary btn-block btn-shadow btn-sm'
                type='button'
                onClick={() => setLogOutModal(false)}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Logout

const logoutVariants = {
  startpoint: { scale: 0 },
  endpoint: {
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
}
