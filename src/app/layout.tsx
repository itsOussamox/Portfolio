import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { gilroy } from './lib/font'



export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={gilroy.className}>{children}</body>
    </html>
  )
}
