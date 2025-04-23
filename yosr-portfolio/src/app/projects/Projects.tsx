import { projects } from '../data/projectData'
import ProjectCard from '../components/projects/ProjectCard'

export const metadata = {
  title: 'Projets | Yosr Mekki',
  description: 'Découvrez les projets réalisés par Yosr Mekki'
}

export default function ProjectsPage() {
  return (
    <div className="animate-fade-in py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Mes Projets</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Découvrez les différents projets sur lesquels j'ai travaillé, 
            combinant ma passion pour la technologie et la résolution de problèmes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}