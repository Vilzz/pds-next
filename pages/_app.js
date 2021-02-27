import { Provider } from 'react-redux'
import { useEffect } from 'react'
import { createWrapper } from 'next-redux-wrapper'
import store from '../redux/store'
import setAuthToken from '../utils/setAuthToken'
import { loadUser } from '../redux/actions/auth'
import Layout from '../components/Layout.jsx'
import Mainnav from '../components/navbars/Mainnav.jsx'
import Alerts from '../components/alerts/Alerts.jsx'
import '../styles/globals.scss'

if (typeof window !== 'undefined') {
  localStorage.token && setAuthToken(localStorage.token)
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={store}>
      <Alerts />
      <Mainnav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
const makestore = () => store
const wrapper = createWrapper(makestore)
export default wrapper.withRedux(MyApp)
