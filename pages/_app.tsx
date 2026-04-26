import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jet = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${jet.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
