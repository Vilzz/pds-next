import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => {
  return (
    <div className={styles.pds_container}>
      <main>{children}</main>
    </div>
  )
}

export default Layout
