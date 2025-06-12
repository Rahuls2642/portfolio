import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Ecommerce website',
      description: 'A full-featured online shopping platform built with React and Node.js',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['React', 'Node.js', 'MongoDB'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website with animations and responsive design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      tags: ['React', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: 'https://github.com/Rahuls2642/portfolio26'
    },
    {
      title: 'Weather App',
      description: 'A responsive web application that provides real-time weather information for any city worldwide. The app fetches weather data using a public API and displays current conditions such as temperature, humidity, wind speed',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7LThne1oiSixSMi-C6LWIa2H4B460mP07g&s',
      tags: ['HTML','CSS','Java script'],
      liveLink: 'https://weatherapp2642.netlify.app/',
      githubLink: 'https://github.com/Rahuls2642/Weather'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-gray-600 hover:text-gray-700"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
