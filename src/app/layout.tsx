/* eslint-disable camelcase */
/* eslint-disable react-refresh/only-export-components */
import './global.css'

import type { Metadata } from 'next'
import {
  Nunito_Sans,
  Wix_Madefor_Display,
  Wix_Madefor_Text,
} from 'next/font/google'
import { Navbar } from '../components/navbar'

export const metadata: Metadata = {
  title: 'Home | Bewave',
  description:
    'A Bewave facilita a conexão entre artistas e as principais plataformas digitais, oferecendo distribuição global e suporte especializado',
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

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-nunito-sans',
})

const madeforDisplay = Wix_Madefor_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-madefor-display',
})

const madeforText = Wix_Madefor_Text({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        id="root"
        className={`${madeforText.className} ${madeforDisplay.variable} ${nunitoSans.variable} bg-black text-marfin`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
