'use client'

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../data/experienceData';

export default function ExperiencePage() {
  return (
    <div className="animate-fade-in py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Mon Expérience</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Découvrez mon parcours professionnel et mes stages.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary-200 dark:border-primary-800 pl-8 ml-4 md:ml-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-12 relative"
              >
                {/* Timeline dot */}
                <div className="absolute w-5 h-5 bg-primary-600 dark:bg-primary-400 rounded-full -left-[44px] top-0 border-4 border-white dark:border-dark-100"></div>
                
                {/* Experience card */}
                <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <h3 className="text-xl font-semibold">{experience.title}</h3>
                    <div className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm">
                      <Calendar size={14} className="mr-1" />
                      {experience.date}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Briefcase size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
                      {experience.company}
                    </div>
                    <div className="hidden md:block text-gray-400 dark:text-gray-500">•</div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-primary-600 dark:text-primary-400" />
                      {experience.location}
                    </div>
                    <div className="hidden md:block text-gray-400 dark:text-gray-500">•</div>
                    <div>{experience.duration}</div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {experience.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Certificates section */}
        <div className="max-w-4xl mx-auto mt-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-center"
          >
            Certificats
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Certificat de participation au concours Hackathon",
              "Certificat de participation à SPRING BOOT workshop",
              "Certificat de participation à ANGULAR workshop",
              "Certificat de réussite d'anglais de base avec KING'S COLLEGE LONDON"
            ].map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-5 flex items-center"
              >
                <div className="mr-4 p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-white">{certificate}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}