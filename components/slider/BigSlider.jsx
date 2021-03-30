import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMainSliders } from '../../redux/actions/bigslider'
import { motion, AnimatePresence } from 'framer-motion'
import {
  leftBtnVariants,
  rightBtnVariants,
  imageVariants,
  directions,
  promoFromTop,
  promoButton,
  bgVariants,
} from './animations'
const BigSlider = () => {
  const [active, setActive] = useState(0)
  const [carouselData, setCarouselData] = useState([])
  const [showControls, setShowControls] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getMainSliders())
  }, [getMainSliders])
  const bigsliders = useSelector((state) => state.bigsliders)
  useEffect(() => {
    !bigsliders.loading &&
      bigsliders.bidsliders !== null &&
      setCarouselData([...bigsliders.bigsliders.data])
  }, [bigsliders])

  const leftBtn = () => (
    <motion.button
      className='btn btn-lg btn-light btn-pill btn-icon leftbtn'
      type='button'
      variants={leftBtnVariants}
      initial='startpoint'
      animate='endpoint'
      exit='exit'
      onClick={() => moveLeft()}
    >
      <i className='czi-arrow-left'></i>
    </motion.button>
  )

  const rightBtn = () => (
    <motion.button
      className='btn btn-lg btn-light btn-pill btn-icon rightbtn'
      type='button'
      variants={rightBtnVariants}
      initial='startpoint'
      animate='endpoint'
      exit='exit'
      onClick={() => moveRight()}
    >
      <i className='czi-arrow-right'></i>
    </motion.button>
  )
  const moveRight = () => {
    active < carouselData.length - 1 ? setActive(active + 1) : setActive(0)
  }
  const moveLeft = () => {
    active > 0 ? setActive(active - 1) : setActive(carouselData.length - 1)
  }
  const textPromoCont = carouselData.map(
    (slide, ind) =>
      ind === active && (
        <motion.div
          key={slide._id}
          variants={bgVariants}
          initial='startpoint'
          animate='endpoint'
          exit='exit'
          className='px-lg-0'
          style={slide.bgcolor}
        >
          <div className='d-lg-flex justify-content-between align-items-center pl-lg-2'>
            <motion.img
              className='d-block order-lg-2 flex-shrink-0 pds_mr-lg-n5'
              src={slide.img}
              alt={slide.alt}
              variants={imageVariants}
              initial='startpoint'
              animate='endpoint'
            />

            <div className='pds_slider-texts position-relative mx-auto py-5 px-5 mb-lg-5 order-lg-1 pds_mr-lg-n5'>
              <motion.div
                variants={promoFromTop}
                initial='startpoint'
                animate='endpoint'
                className='pb-lg-5 mb-lg-5 text-center text-lg-left text-lg-nowrap'
              >
                <motion.h2
                  variants={directions[ind]}
                  className='text-light font-weight-light pb-1'
                >
                  {slide.promotexts.promotop}
                </motion.h2>
                <motion.h1 variants={directions[ind]} className='text-light'>
                  {slide.promotexts.promocenter}
                </motion.h1>
                <motion.p
                  variants={directions[ind]}
                  className='font-size-lg text-light pb-3'
                >
                  {slide.promotexts.promolast}
                </motion.p>
                <motion.a
                  variants={promoButton}
                  href={slide.buttonpath}
                  className='btn btn-primary'
                >
                  Закажи <i className='czi-arrow-right ml-2'></i>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )
  )
  return (
    <section
      className='cz-carousel mb-4 mb-lg-5 mt-lg-5'
      style={{ overflow: 'hidden' }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className='pds_btns-holder pt-lg-5'>
        <div className='pds_btns mt-lg-5'>
          <AnimatePresence>{showControls && leftBtn()}</AnimatePresence>
          <AnimatePresence>{showControls && rightBtn()}</AnimatePresence>
        </div>
      </div>
      {textPromoCont}
    </section>
  )
}

export default BigSlider
