// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Eczar } from 'next/font/google'
import { Cabin } from 'next/font/google'
import './styles.css'

const eczar = Eczar({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eczar',
})
const cabin = Cabin({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabin',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={eczar.variable + ' ' + cabin.variable}>
        {children}
      </body>
    </html>
  )
}
