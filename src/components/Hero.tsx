import React from 'react';
import { MapPin, Mail, Phone, Linkedin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                MOHAMED HUSSIEN
                <span className="block text-4xl lg:text-5xl text-blue-600 dark:text-blue-400">
                  BASSIONY
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                ELECTRICAL ENGINEER
              </p>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
              Dynamic and results-driven Electrical Engineer with extensive expertise in 
              electrical systems, project management, and safety protocols. Specializing 
              in solar energy projects, power transmission, and building management systems.
            </p>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>+966548810747</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Al Riyadh, Saudi Arabia</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>m.hussien3887@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn Profile</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-colors duration-200"
              >
                View Experience
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6 opacity-20"></div>
              <img
                src="/pesoooo.jpg"
                alt="Mohamed Hussien Bassiony"
                className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};