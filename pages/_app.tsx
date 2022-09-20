import type { AppProps } from 'next/app'  

import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AuthProvider } from '../context/Auth/AuthProvider'
import { HistoryProvider } from '../context/History/HistoryProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HistoryProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </HistoryProvider>
  )
}

export default MyApp
