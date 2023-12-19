import '../styles/globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fanpool'
}

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
