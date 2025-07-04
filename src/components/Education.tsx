import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

interface EducationItem {
  type: 'degree' | 'certification';
  title: string;
  institution: string;
  details?: string;
  grade?: string;
}

const educationData: EducationItem[] = [
  {
    type: 'degree',
    title: "Bachelor's Degree in Engineering",
    institution: "Minia University",
    details: "Major: Electrical Power and Control Engineering",
    grade: "Cumulative Grade: Good"
  }
];

const certifications: EducationItem[] = [
  {
    type: 'certification',
    title: "Infrastructure Of Medium Voltage And Street lighting",
    institution: "Udemy"
  },
  {
    type: 'certification',
    title: "PLC (Programmable Logic Controller)",
    institution: "Alex University"
  },
  {
    type: 'certification',
    title: "Classic Control",
    institution: "Don Bosco Institute"
  },
  {
    type: 'certification',
    title: "How To Write Professional Emails",
    institution: "HP LIFE Online Course"
  },
  {
    type: 'certification',
    title: "Electrical Distribution",
    institution: "Helwan University"
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning and professional development in electrical engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            {educationData.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-6">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {item.institution}
                </p>
                {item.details && (
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {item.details}
                  </p>
                )}
                {item.grade && (
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.grade}
                  </p>
                )}
                <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <p className="text-green-800 dark:text-green-400 font-medium">
                    <strong>Graduation Project:</strong> Electrical power installation for indoor 
                    Buildings in Presence of KNX | <strong>Grade: Excellent</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Award className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg mt-1">
                      <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-green-600 dark:text-green-400 font-medium">
                        {cert.institution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Languages
            </h3>
          </div>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">AR</span>
              </div>
              <p className="text-gray-900 dark:text-white font-semibold">Arabic</p>
              <p className="text-gray-600 dark:text-gray-400">Native</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">EN</span>
              </div>
              <p className="text-gray-900 dark:text-white font-semibold">English</p>
              <p className="text-gray-600 dark:text-gray-400">Professional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};