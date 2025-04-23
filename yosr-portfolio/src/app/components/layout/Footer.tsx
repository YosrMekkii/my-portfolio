import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-100 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="font-bold text-xl text-primary-600 dark:text-primary-400">
              Yosr Mekki
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Étudiante en ingénierie informatique
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/YosrMekki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yosr-mekki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:yosr.mekki@esprit.tn"
              className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Yosr Mekki. Tous droits réservés.
        </div>
      </div>
    </footer>
  )
}