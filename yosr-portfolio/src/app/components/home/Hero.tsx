'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-200 dark:to-dark-300 opacity-50 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Bonjour, je suis{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
              Yosr Mekki
            </span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Étudiante en ingénierie informatique passionnée par le développement web et mobile
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link 
              href="/projects"
              className="px-6 py-3 bg-primary-600 text-white rounded-lg shadow-md hover:bg-primary-700 transition-colors duration-300 flex items-center"
            >
              Voir mes projets
              <ArrowRight className="ml-2" size={16} />
            </Link>
            
            <Link 
              href="/contact"
              className="px-6 py-3 bg-white dark:bg-dark-200 text-primary-600 dark:text-primary-400 rounded-lg shadow-md border border-primary-100 dark:border-dark-300 hover:bg-gray-50 dark:hover:bg-dark-300 transition-colors duration-300"
            >
              Me contacter
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}