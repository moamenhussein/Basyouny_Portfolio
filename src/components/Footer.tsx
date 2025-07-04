import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© 2025 Mohamed Hussien Bassiony. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and passion for electrical engineering.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};