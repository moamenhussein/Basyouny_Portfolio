import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  project?: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Senior Electromechanical Engineer",
    company: " Power Transmission line Contract Company",
    period: " APRIL 2025- PRESEN",
    location: "Al Riyadh, Saudi Arabia",
    project: "Deployment Of Hybrid PV And Diesel Power Plants With Storage, NEOM - BAJDAH. Jinkly Solar",
     responsibilities: [
      " Led and supervised the successful completion of all mechanical tasks, including tracker installation, modules installation, and robot assembly, ensuring high standards of precision and efficiency.",
      " Supervised and ensured the successful execution of all electrical works on-site, including the installation and termination of solar cables, low voltage (LV), and medium voltage (MV) power cables, in full compliance with project specifications and safety standards ",
      "Negotiating the project issues with the main contractors and finding solutions to the problems at site.",
      "Activity Planning and Calculating the manpower, material required and duration . ",
       "Conducted all required testing and commissioning for electrical systems to verify functionality, safety, and compliance with project specifications and industry standards. "
    ]
  },
  {
    title: "Senior Electromechanical Engineer",
    company: "Power Transmission line Contract Company",
    period: "JUNE 2024 - PRESENT",
    location: "Al Riyadh, Saudi Arabia",
    project: "1125 MW Saad 2 Solar Energy PV Project, Al Riyadh. Jinkly Solar",
    responsibilities: [
      "Solar Tracker Installation, worked as site manager in Arctech tracker installation and completed 208MW tracker installation under supervision",
      "Torquing and PV module Installation experienced in torquing in all parts of structure and Jinkly solar PV module installation",
      "Contributed to various additional activities, demonstrating adaptability and willingness to learn new tasks",
      "Negotiating project issues with main contractors and finding solutions to problems at site"
    ]
  },
  {
    title: "Electrical Engineer",
    company: "Power Transmission line Contract Company",
    period: "SEP 2023 – MAY 2024",
    location: "Al Riyadh, Saudi Arabia",
    project: "350 MW Saad 1 Solar Energy PV Project, Al Riyadh. Jinko",
    responsibilities: [
      "Spearheaded the installation of electrical activities, ensuring precision and compliance",
      "Conducted thorough reviews of executive drawings with the technical office team",
      "Managed project milestones, adhering to specified timetables with commitment to quality",
      "Managed directly and provided engineering and technical support to all electrical work groups at site",
      "Coordinated with quality engineer to conduct meticulous quality inspections",
      "Compiled and generated weekly and monthly progress reports"
    ]
  },
  {
    title: "Electrical Infrastructure Engineer",
    company: "Elsewedy Engineering Industries",
    period: "OCT 2022 - JUN 2023",
    location: "Egypt",
    project: "Hayah Karima – Developing the Electricity Network (MV - LV)",
    responsibilities: [
      "Provided comprehensive day-to-day field supervision at the site",
      "Ensured all construction performed to quality standards in compliance with design specifications",
      "Coordinated and optimized arrangement of daily activities for construction crews",
      "Reviewed quotes, material requests, procured items, deliveries and on-site production",
      "Performed inspections at completion of each construction phase",
      "Determined and recommended labor force, materials, and equipment requirements"
    ]
  },
  {
    title: "BMS Site Engineer",
    company: "Advansys projects",
    period: "SEP 2021 - AUG 2022",
    location: "Saudi Arabia",
    project: "New Ministry of Defense (KAYAN 110), Octagon Project",
    responsibilities: [
      "Responsible for Installation, Troubleshooting, and Configuration of electrical, mechanical systems",
      "Managed lighting panels, HVAC system according to project needs",
      "Responsible for projects delivery and leading a team of technicians",
      "Collaborated with Projects Departments to deliver detailed project plans",
      "System Programming and configuration using Johnson Controls software (METASYS, CCT)",
      "Ensured regular & proper verification, performance, implementation of building management system"
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A track record of successful project delivery in electrical engineering and renewable energy
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {exp.company}
                  </p>
                  {exp.project && (
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-medium">
                      Project: {exp.project}
                    </p>
                  )}
                </div>
                <div className="flex flex-col lg:items-end space-y-2">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
