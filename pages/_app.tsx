import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
    {process.env.TIME}
    <br/>
    {process.env.NEXT_PUBLIC_REPO}
    <Component {...pageProps} />
  </div>
}

export default MyApp
