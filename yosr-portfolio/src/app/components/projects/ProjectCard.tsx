'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

// ✅ Typage du projet
type Project = {
    title: string
    description: string
    image?: string
    tags: string[]
    github?: string
    demo?: string
  }

  type ProjectCardProps = {
    project: Project
  }

  const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-dark-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <div className="relative h-48 w-full bg-gray-200 dark:bg-dark-300">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-400 dark:text-gray-600">
              Aucune image
            </div>
          )}
        </div>
  
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
  
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </p>
  
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-dark-300 text-gray-700 dark:text-gray-300 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
  
          <div className="flex justify-start space-x-4 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 flex items-center"
              >
                <Github size={18} className="mr-1" />
                <span>Code</span>
              </a>
            )}
  
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 flex items-center"
              >
                <ExternalLink size={18} className="mr-1" />
                <span>Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    )
  }
  
  export default ProjectCard
  