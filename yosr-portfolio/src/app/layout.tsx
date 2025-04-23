import { Inter, Roboto_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '../app/components/layout/Navbar'
import Footer from '../app/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata = {
  title: 'Yosr Mekki | Portfolio',
  description: 'Portfolio de Yosr Mekki, étudiante en ingénierie informatique',
}



// ✅ Typage direct dans la signature (Next.js App Router)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="bg-white dark:bg-dark-100 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}