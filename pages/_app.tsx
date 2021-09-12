import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/header/Header'
import MeetupProvider from '../store/MeetupProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (<MeetupProvider>
    <Header />
    <Component {...pageProps} />
  </MeetupProvider>)
}
export default MyApp
