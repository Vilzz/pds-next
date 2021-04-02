import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'
import Account from '../auth/Account.jsx'
import Logout from '../auth/Logout.jsx'

const Middlebar = () => {
  const auth = useSelector((state) => state.auth)
  const { isAuthenticated, loading, user } = auth
  const [userName, setUserName] = useState(
    !loading && user !== null ? user.data.name : ''
  )
  const [accountModal, setAccountModal] = useState(false)
  const [logoutModal, setLogOutModal] = useState(false)

  const acountMenuItem = (setAccountModal, setLogOutModal, isAuthenticated) =>
    isAuthenticated ? (
      <a
        className='navbar-tool ml-1 ml-lg-0 mr-n1 mr-lg-2'
        href='#!'
        onClick={() => setLogOutModal(true)}
      >
        <div className='navbar-tool-icon-box'>
          <i className='navbar-tool-icon czi-sign-out'></i>
        </div>

        <div className='navbar-tool-text ml-n2'>
          <small>Выход</small>Мой аккаунт
        </div>
      </a>
    ) : (
      <a
        className='navbar-tool ml-1 ml-lg-0 mr-n1 mr-lg-2'
        href='#!'
        onClick={() => setAccountModal(true)}
      >
        <div className='navbar-tool-icon-box'>
          <i className='navbar-tool-icon czi-sign-in'></i>
        </div>

        <div className='navbar-tool-text ml-n2'>
          <small>Вход/Регистрация</small>Мой аккаунт
        </div>
      </a>
    )

  return (
    <>
      <div className='navbar navbar-expand-lg navbar-light bg-light'>
        <Container>
          <Link href='/'>
            <a
              className='navbar-brand d-none d-lg-block mr-3 flex-shrink-0'
              style={{ minWidth: '7rem' }}
            >
              <Image
                width={200}
                height={52}
                src='/images/small/logo.jpg'
                alt='Про-движение'
              />
            </a>
          </Link>
          <Link href='/'>
            <a
              className='navbar-brand d-lg-none mr-2'
              style={{ minWidth: '2.125rem' }}
            >
              <Image
                width={200}
                height={52}
                src='/images/logo.jpg'
                alt='Про-движение'
              />
            </a>
          </Link>

          <div className='input-group-overlay d-none d-lg-flex mx-4'>
            <input
              className='form-control appended-form-control'
              type='text'
              placeholder='Поиск в каталоге'
            />
            <div className='input-group-append-overlay'>
              <span className='input-group-text'>
                <i className='czi-search'></i>
              </span>
            </div>
          </div>

          <div className='navbar-toolbar d-flex align-items-center'>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarCollapse'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <a className='navbar-tool d-lg-none' href='#!'>
              <div className='navbar-tool-icon-box'>
                <i className='navbar-tool-icon czi-search'></i>
              </div>
            </a>
            {acountMenuItem(setAccountModal, setLogOutModal, isAuthenticated)}
            <a className='navbar-tool ml-3' href='#!'>
              <div className='navbar-tool-icon-box bg-secondary'>
                <span className='navbar-tool-label'>4</span>
                <i className='navbar-tool-icon czi-cart'></i>
              </div>
              <div className='navbar-tool-text'>
                <small>Моя карзина</small>$265.00
              </div>
            </a>
          </div>
        </Container>
      </div>
      <AnimatePresence>
        {accountModal && (
          <motion.div
            variants={myAccVariants}
            initial='startpoint'
            animate='endpoint'
            exit='exit'
          >
            <Account
              setAccountModal={setAccountModal}
              isAuthenticated={isAuthenticated}
              loading={loading}
              user={user}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {logoutModal && (
          <motion.div
            variants={myAccVariants}
            initial='startpoint'
            animate='endpoint'
            exit='exit'
          >
            <Logout
              setLogOutModal={setLogOutModal}
              userName={userName}
              setUserName={setUserName}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Middlebar

const myAccVariants = {
  startpoint: {
    opacity: 0,
  },
  endpoint: {
    opacity: 1,
    transition: {
      duration: 0.3,
      easy: 'easeIn',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      easy: 'easeOut',
    },
  },
}
