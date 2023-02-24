import type { AppProps } from 'next/app'
import './devices.min.css'

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
