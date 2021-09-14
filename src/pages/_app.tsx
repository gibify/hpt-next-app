import '../styles/globals.scss'

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { AuthProvider } from '../contexts/AuthContext';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  )
}

export default MyApp
