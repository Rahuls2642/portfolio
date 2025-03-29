import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe } from 'lucide-react';

export const About = () => {
  const skills = [
    { name: 'Development', icon: <Code />, description: 'Expert in React, Node.js, and modern web technologies' },
    { name: 'Design', icon: <Palette />, description: 'Creating beautiful, intuitive user interfaces' },
    { name: 'Web Solutions', icon: <Globe />, description: 'Building scalable and responsive web applications' }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a passionate web developer and designer with a keen eye for detail and a drive for creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 p-8 rounded-lg text-center"
            >
              <div className="inline-block p-4 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};