import { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { setAlert } from '../../redux/actions/alerts'
import { login, register } from '../../redux/actions/auth'

// Остановился на LOGOUT
const Account = ({ setAccountModal }) => {
  const dispatch = useDispatch()
  const router = useRouter()
  //router.push('/post/abc'
  const { loading, user, isAuthenticated } = useSelector((state) => state.auth)

  const [withActive, setWithActive] = useState({
    a: true,
    b: false,
  })

  const [showPasswords, setShowPasswords] = useState({
    a: false,
    b: false,
    c: false,
  })
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const [registerData, setRegisterData] = useState({
    name: '',
    email2: '',
    password1: '',
    password2: '',
  })

  if (!loading && user !== null) {
    if (user.data.role === 'developer' || user.data.role === 'admin') {
      router.push('/admindashboard')
    } else if (isAuthenticated) {
      router.push('/')
    }
  }

  const loginOnChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    })
  }
  const registerOnChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    })
  }
  const registerSubmit = async (e) => {
    e.preventDefault()
    const { name, email2, password1, password2 } = registerData
    if (password1 !== password2) {
      setAlert('Пароли не совпадают', 'warning', 2000)
    } else {
      const res = dispatch(
        register({ name, email: email2, password: password1 })
      )
      setAccountModal(!res)
    }
  }

  const loginSubmit = async (e) => {
    e.preventDefault()
    const res = dispatch(login(loginData))
    setAccountModal(!res)
  }
  return (
    <div className='modal'>
      <motion.div
        className='modal-dialog'
        variants={myAccVariants}
        initial='startpoint'
        animate='endpoint'
      >
        <div className='modal-content'>
          <div className='modal-header'>
            <ul className='nav nav-tabs card-header-tabs'>
              <li className='nav-item'>
                <a
                  className={withActive.a ? 'nav-link active' : 'nav-link'}
                  href='#signin'
                  onClick={() => setWithActive({ a: true, b: false })}
                >
                  <i className='czi-unlocked mr-2 mt-n1'></i>
                  Вход
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className={withActive.b ? 'nav-link active' : 'nav-link'}
                  href='#signup'
                  onClick={() => setWithActive({ a: false, b: true })}
                >
                  <i className='czi-user mr-2 mt-n1'></i>
                  Регистрация
                </a>
              </li>
            </ul>
            <button
              className='close'
              type='button'
              onClick={() => setAccountModal(false)}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body tab-content py-4'>
            <form
              className={withActive.a ? 'tab-pane show active' : 'tab-pane'}
              autoComplete='off'
              onSubmit={(e) => loginSubmit(e)}
            >
              <div className='form-group'>
                <label htmlFor='email'>Email address</label>
                <input
                  className='form-control'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='pupkin@mail.com'
                  onChange={(e) => loginOnChange(e)}
                  value={loginData.email}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Пароль</label>
                <div className='password-toggle'>
                  <input
                    className='form-control'
                    type={showPasswords.a ? 'text' : 'password'}
                    id='password'
                    name='password'
                    onChange={(e) => loginOnChange(e)}
                    value={loginData.password}
                  />
                  <label className='password-toggle-btn'>
                    <input
                      className='custom-control-input'
                      type='checkbox'
                      onChange={() =>
                        setShowPasswords({
                          ...showPasswords,
                          a: !showPasswords.a,
                        })
                      }
                    />
                    <i className='czi-eye password-toggle-indicator'></i>
                  </label>
                </div>
              </div>
              <div className='form-group d-flex flex-wrap justify-content-between'>
                <div className='custom-control custom-checkbox mb-2'>
                  <input
                    className='custom-control-input'
                    type='checkbox'
                    id='remember'
                  />
                  <label className='custom-control-label' htmlFor='remember'>
                    Запомнить меня
                  </label>
                </div>
                <a className='font-size-sm' href='#!'>
                  Забыл пароль?
                </a>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <button
                    className='btn btn-primary btn-shadow btn-block btn-sm'
                    type='submit'
                  >
                    Войти
                  </button>
                </div>
                <div className='col-6'>
                  <button
                    className='btn btn-primary btn-shadow btn-block btn-sm'
                    type='button'
                    onClick={() => setAccountModal(false)}
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            </form>

            <form
              className={withActive.b ? 'tab-pane show active' : 'tab-pane'}
              autoComplete='off'
              onSubmit={(e) => registerSubmit(e)}
            >
              <div className='form-group'>
                <label htmlFor='name'>Полное имя</label>
                <input
                  className='form-control'
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Иван Пупкин'
                  onChange={(e) => registerOnChange(e)}
                  value={registerData.name}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email2'>Электронная почта</label>
                <input
                  className='form-control'
                  type='email'
                  id='email2'
                  name='email2'
                  placeholder='pupkin@mail.com'
                  onChange={(e) => registerOnChange(e)}
                  value={registerData.email2}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password1'>Пароль</label>
                <div className='password-toggle'>
                  <input
                    className='form-control'
                    type={showPasswords.b ? 'text' : 'password'}
                    id='password1'
                    name='password1'
                    onChange={(e) => registerOnChange(e)}
                    value={registerData.password1}
                  />
                  <label className='password-toggle-btn'>
                    <input
                      className='custom-control-input'
                      type='checkbox'
                      onChange={() =>
                        setShowPasswords({
                          ...showPasswords,
                          b: !showPasswords.b,
                        })
                      }
                    />
                    <i className='czi-eye password-toggle-indicator'></i>
                  </label>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='password2'>Подтвердить пароль</label>
                <div className='password-toggle'>
                  <input
                    className='form-control'
                    type={showPasswords.c ? 'text' : 'password'}
                    id='password2'
                    name='password2'
                    onChange={(e) => registerOnChange(e)}
                    value={registerData.password2}
                  />
                  <label className='password-toggle-btn'>
                    <input
                      className='custom-control-input'
                      type='checkbox'
                      onChange={() =>
                        setShowPasswords({
                          ...showPasswords,
                          c: !showPasswords.c,
                        })
                      }
                    />
                    <i className='czi-eye password-toggle-indicator'></i>
                  </label>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <button
                    className='btn btn-primary btn-shadow btn-block btn-sm'
                    type='submit'
                  >
                    Зарегистрироваться
                  </button>
                </div>
                <div className='col-6'>
                  <button
                    className='btn btn-primary btn-shadow btn-block btn-sm'
                    type='button'
                    onClick={() => setAccountModal(false)}
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Account

const myAccVariants = {
  startpoint: { scale: 0 },
  endpoint: {
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
}
