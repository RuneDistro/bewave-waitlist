/* eslint-disable react-refresh/only-export-components */
import './global.css'

import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'Bewave',
  description:
    'Bewave é a distribuidora musical onde o artista verá essas principais características: facilidade e controle total da sua carreira.',
  keywords: [
    'bewave',
    'bewave digital music',
    'music',
    'artist',
    'música',
    'artista',
    'distribuidora musical',
    'bewave distribuidora digital',
  ],
  authors: [
    {
      name: 'Lucas Gabriel',
      url: 'https://github.com/LuquinhasGCZJ',
    },
    {
      name: 'Murilo Loiola',
      url: 'https://github.com/murilo-dan',
    },
    {
      name: 'Pietro Rhyan',
      url: 'https://github.com/PietroRhyan',
    },
  ],
  applicationName: 'Bewave',
  icons: {
    icon: './favicon.ico',
    apple: './apple-touch-icon.png',
    shortcut: './apple-touch-icon.png',
  },
}

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body id="root" className={`${montserrat.className} ${inter.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
