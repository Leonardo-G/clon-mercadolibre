import type { AppProps } from 'next/app'  

import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AuthProvider } from '../context/Auth/AuthProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
