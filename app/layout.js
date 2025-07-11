import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Resilienza Dashboard - Business Intelligence',
  description: 'Comprehensive business intelligence platform for luxury villa management in Huelva, Spain',
  keywords: 'villa management, business intelligence, Huelva, Spain, luxury accommodation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  )
}