import './globals.css'
import type { Metadata } from 'next'
import {Providers}  from '@/redux/providers'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <div className='container mx-auto'>
        <Providers>
          {children}
        </Providers>
        </div>
      </body>
    </html>
  )
}
