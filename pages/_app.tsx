import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ResponsiveAppBar from './appbar'
export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <Component {...pageProps} />
  </>
}
