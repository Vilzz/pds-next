import React from 'react'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'

const Alerts = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 && (
    <div className='pds_alert-bg'>
      <motion.div
        variants={alertVariants}
        initial='startpoint'
        animate='endpoint'
        className={`pds_alert-modal pds_alert-modal-${alerts[0].alertType} col-12 col-md-6`}
      >
        {alerts.map((alert) => (
          <div className='row justify-content-md-center' key={alert.id}>
            <div className='col-12'>
              <div
                className={`alert alert-${alert.alertType} alert-with-icon pds_alerts`}
                style={{ borderRadius: '5px' }}
              >
                <div className='pds_alert-icon-box'>
                  <i className={alertsIcons[alert.alertType]}></i>
                  <span>{alert.msg}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )

const mapStateToProps = (state) => ({
  alerts: state.alerts,
})
export default connect(mapStateToProps)(Alerts)

const alertsIcons = {
  primary: 'alert-icon czi-bell',
  accent: 'alert-icon czi-security-check',
  secondary: 'alert-icon czi-time',
  success: 'alert-icon czi-check-circle',
  danger: 'alert-icon czi-close-circle',
  warning: 'alert-icon czi-security-announcement',
  info: 'alert-icon czi-announcement',
}
const alertVariants = {
  startpoint: { opacity: 0 },
  endpoint: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}
