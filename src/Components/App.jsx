import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const App = () => {
  const apps = [
    {
      name: 'Wix',
      category: 'No Code Platform',
      image: '/framer.avif'
    },
    {
      name: 'Figma',
      category: 'Design Platform',
      image: '/framer.avif'
    },
    {
      name: 'Notion',
      category: 'Documentation',
      image: '/framer.avif'
    },
    {
      name: 'Lemon Squeezy',
      category: 'Payment Platform',
      image: '/framer.avif'
    },
    {
      name: 'Slack',
      category: 'Collaboration',
      image: '/framer.avif'
    },
    {
      name: 'ChatGPT',
      category: 'OpenAI',
      image: '/framer.avif'
    }
  ]

  return (
    <section className="rounded-full bg-white lg:mr-40 mb-10 p-2">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Apps</h1>
        <p className="text-gray-500 text-lg">
          Apps and Resources. All you need to success
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-[1000px]">
        {apps.map((app, index) => (
          <Link
            key={index}
            to="/apps"
            className="border border-gray-200 rounded-2xl p-2 hover:shadow-md transition-all duration-300 group"
          >
            <div className="flex items-start gap-4 mb-4 p-2">
              <img 
                src={app.image} 
                alt={app.name} 
                className="w-12 h-12 object-contain rounded-md"
              />
              <div>
                <h2 className="text-xl font-semibold text-gray-600">
                  {app.name}
                </h2>
                <p className="text-gray-500 text-sm">{app.category}</p>
              </div>
            </div>
            
          </Link>
        ))}
      </div>
    </section>
  )
}

export default App