import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Liddell Stor-It | Portable Storage Containers in Paragould, AR',
  description: 'Convenient portable storage containers delivered to your location in Paragould, Arkansas. Perfect for moving, renovation, or extra storage needs.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-32x32.png',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
