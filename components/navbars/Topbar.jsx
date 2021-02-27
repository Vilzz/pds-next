import { Container } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import UsefullLinks from './UsefullLinks.jsx'
import { connect } from 'react-redux'
import { getTextSliders } from '../../redux/actions/textslider'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Topbar = ({ getTextSliders, textslidersLoading, textsliders }) => {
  const [rollerText, setRollerText] = useState([])
  const [active, setActive] = useState(0)
  useEffect(() => {
    getTextSliders()
  }, [getTextSliders])

  useEffect(() => {
    !textslidersLoading &&
      textsliders !== null &&
      setRollerText([...textsliders.data.map((string) => string.text)])
  }, [textslidersLoading, textsliders])

  const topbarPromoLeftClick = () => {
    active > 0 ? setActive(active - 1) : setActive(rollerText.length - 1)
  }
  const topbarPromoRightClick = () => {
    active < rollerText.length - 1 ? setActive(active + 1) : setActive(0)
  }
  const carousel =
    rollerText.length > 0
      ? rollerText.map((text, idx) =>
          idx === active ? (
            <AnimatePresence key={idx}>
              <motion.div
                variants={variants}
                initial='startpoint'
                animate='endpoint'
                exit='exit'
                style={{ display: 'inline-block' }}
                className='topbar-promo'
              >
                {text}
              </motion.div>
            </AnimatePresence>
          ) : (
            <div key={idx} style={{ display: 'none' }}>
              {text}
            </div>
          )
        )
      : []

  return (
    <div className='topbar topbar-dark bg-dark'>
      <Container>
        <UsefullLinks />
        <div className='topbar-text text-nowrap d-none d-md-inline-block'>
          <i className='czi-support'></i>
          <span className='text-muted mr-1'>Контактный номер</span>
          <Link href='tel:88463210404'>
            <a className='topbar-link'>+7 (846) 321 0404</a>
          </Link>
        </div>
        <div className='topbar-text d-none d-md-inline-block'>
          <motion.i
            whileHover={{ x: -3 }}
            transition={{ type: 'spring' }}
            className='czi-arrow-left mr-2'
            onClick={() => topbarPromoLeftClick()}
          ></motion.i>

          <div style={{ display: 'inline-block' }}>{carousel}</div>

          <motion.i
            whileHover={{ x: 3 }}
            transition={{ type: 'spring' }}
            className='czi-arrow-right ml-2'
            onClick={() => topbarPromoRightClick()}
          ></motion.i>
        </div>
        <div className='ml-3 text-nowrap'>
          <Link href='/contacts'>
            <a className='topbar-link mr-4 d-none d-md-inline-block'>
              <i className='czi-location'></i>
              Наш адрес
            </a>
          </Link>
        </div>
      </Container>
    </div>
  )
}
const mapStateToProps = (state) => ({
  textslidersLoading: state.textsliders.loading,
  textsliders: state.textsliders.textsliders,
})
export default connect(mapStateToProps, { getTextSliders })(Topbar)

const variants = {
  startpoint: {
    opacity: 0,
  },
  endpoint: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
}
