import '../styles/globals.scss'
import styles from '../styles/App.module.scss';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Header title={pageProps.title} route={pageProps.route}/>

      <Component {...pageProps} />

      <Footer />
    </div>
  )
}

export default MyApp
