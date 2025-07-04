import React from 'react';
import { Award, Target, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate about sustainable energy solutions and electrical innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Dynamic and results-driven Electrical Engineer with extensive expertise in 
              electrical systems, project management, and safety protocols. I demonstrate 
              proficiency in electrical drawings and enhancement, contributing to the 
              development of manufacturing processes for electronic components.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I possess a strong blend of practical and theoretical knowledge in diverse 
              electrical instruments with proven ability to manage multiple projects with 
              a high level of professionalism, specializing in motor control and power transmission.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently seeking a challenging role in electrical engineering with a 
              forward-thinking organization to leverage skills in optimizing energy 
              transmission and improving production efficiency.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Expertise
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Solar energy systems, power transmission, electrical infrastructure, 
                and building management systems
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Focus
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Optimizing energy transmission, improving production efficiency, 
                and implementing sustainable solutions
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Leadership
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Proven project management skills with experience leading 
                technical teams and coordinating with stakeholders
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};