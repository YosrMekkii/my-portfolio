'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Moon, Sun } from 'lucide-react'

const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/about', label: 'À propos' },
  { href: '/projects', label: 'Projets' },
  { href: '/experience', label: 'Expérience' },
  { href: '/skills', label: 'Compétences' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const pathname = usePathname()

  // Toggle dark mode
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' || 
          (!('theme' in localStorage) && 
           window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        setIsDarkMode(true)
      } else {
        document.documentElement.classList.remove('dark')
        setIsDarkMode(false)
      }
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setIsDarkMode(true)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-100/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl text-primary-600 dark:text-primary-400">
              YM
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`transition-colors duration-300 ${
                  pathname === link.href 
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-200 shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`block py-2 text-base ${
                  pathname === link.href 
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}