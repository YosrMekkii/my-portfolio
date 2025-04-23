import Hero from '../app/components/home/Hero'
import FeaturedProjects from '../app/components/home/FeaturedProjects'
import { BarChart, BookOpen, Code, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="animate-fade-in">
      <Hero />
      
      {/* Main sections */}
      <section className="py-16 bg-white dark:bg-dark-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Ce que je fais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400 mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Développement Web</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Création de sites web responsifs et applications web interactives
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400 mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Génie Logiciel</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Conception et développement de solutions logicielles robustes
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400 mb-4">
                <BarChart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyse de Données</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Traitement et analyse de données pour obtenir des insights pertinents
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white dark:bg-dark-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400 mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Engagement Associatif</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Participation active dans des clubs universitaires et associations
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <FeaturedProjects />
    </div>
  )
}