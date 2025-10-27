import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const vazir = localFont({
  src: [
    {
      path: './fonts/Vazir.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Vazir-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-vazir',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'دانشکده ریاضی دانشگاه صنعتی شریف',
  description: 'اولین کارگاه آموزشی ریاضیات گسسته و ترکیبیات',
  icons: {
    icon: '/logo.ico',
    shortcut: '/logo.ico',
    apple: '/logo.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className="light" style={{ colorScheme: 'light' }}>
      <body className={vazir.className}>{children}</body>
    </html>
  )
}

