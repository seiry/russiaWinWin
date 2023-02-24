import type { AppProps } from 'next/app'
import './devices.min.css'
import 'normalize.css'
export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
