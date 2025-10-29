import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { StructuredData } from './components/StructuredData'

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
  title: 'کارگاه آموزشی ریاضیات گسسته و ترکیبیات | دانشگاه صنعتی شریف',
  description: 'اولین کارگاه آموزشی ریاضیات گسسته و ترکیبیات با هدف معرفی، آموزش و تعمیق مفاهیم بنیادی این شاخه از ریاضیات. مناسب برای دانش‌آموزان در سطح‌های مقدماتی تا پیشرفته.',
  keywords: [
    'ریاضیات گسسته',
    'ترکیبیات',
    'دانشگاه صنعتی شریف',
    'کارگاه آموزشی',
    'نظریه گراف',
    'شمارش',
    'توابع مولد',
    'مسابقات ریاضی',
    'هوش مصنوعی',
    'علوم داده'
  ],
  authors: [{ name: 'دانشکده علوم ریاضی دانشگاه صنعتی شریف' }],
  creator: 'دانشکده علوم ریاضی دانشگاه صنعتی شریف',
  publisher: 'دانشگاه صنعتی شریف',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sharifmathworkshop.ir'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'کارگاه آموزشی ریاضیات گسسته و ترکیبیات | دانشگاه صنعتی شریف',
    description: 'اولین کارگاه آموزشی ریاضیات گسسته و ترکیبیات با هدف معرفی، آموزش و تعمیق مفاهیم بنیادی این شاخه از ریاضیات.',
    url: 'https://sharifmathworkshop.ir',
    siteName: 'دانشگاه صنعتی شریف',
    images: [
      {
        url: '/poster.jpg',
        width: 600,
        height: 800,
        alt: 'پوستر رسمی کارگاه آموزشی ریاضیات گسسته و ترکیبیات',
      },
    ],
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'کارگاه آموزشی ریاضیات گسسته و ترکیبیات | دانشگاه صنعتی شریف',
    description: 'اولین کارگاه آموزشی ریاضیات گسسته و ترکیبیات با هدف معرفی، آموزش و تعمیق مفاهیم بنیادی این شاخه از ریاضیات.',
    images: ['/poster.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo.ico', sizes: 'any' },
      { url: '/logo.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/logo.ico',
    apple: [
      { url: '/logo.ico', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'کارگاه ریاضیات گسسته',
    'application-name': 'کارگاه ریاضیات گسسته',
    'msapplication-TileColor': '#F7F7F7',
    'theme-color': '#F7F7F7',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" className="light" style={{ colorScheme: 'light' }}>
      <head>
        <StructuredData />
      </head>
      <body className={vazir.className}>{children}</body>
    </html>
  )
}

