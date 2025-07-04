import React from 'react';
import { Wrench, Users, Brain, Clock, MessageSquare, Target, FileText, Zap } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
}

const technicalSkills: Skill[] = [
  { name: "AutoCAD", icon: <FileText className="w-6 h-6" />, level: 90 },
  { name: "ETAP", icon: <Zap className="w-6 h-6" />, level: 85 },
  { name: "Revit", icon: <FileText className="w-6 h-6" />, level: 80 },
  { name: "Dialux", icon: <Zap className="w-6 h-6" />, level: 85 },
  { name: "Microsoft Office", icon: <FileText className="w-6 h-6" />, level: 95 },
];

const professionalSkills: Skill[] = [
  { name: "Site Management", icon: <Users className="w-6 h-6" />, level: 95 },
  { name: "Workplace Safety", icon: <Wrench className="w-6 h-6" />, level: 90 },
  { name: "Technical Communication", icon: <MessageSquare className="w-6 h-6" />, level: 88 },
  { name: "Critical Thinking", icon: <Brain className="w-6 h-6" />, level: 92 },
  { name: "Leadership", icon: <Users className="w-6 h-6" />, level: 90 },
  { name: "Time Management", icon: <Clock className="w-6 h-6" />, level: 93 },
  { name: "Problem Solving", icon: <Target className="w-6 h-6" />, level: 94 },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center space-x-4 mb-4">
      <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
        {skill.icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
        {skill.name}
      </h3>
    </div>
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-right">
      {skill.level}%
    </p>
  </div>
);

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set combining technical expertise with strong leadership capabilities
          </p>
        </div>

        <div className="space-y-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Professional Skills
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {professionalSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};