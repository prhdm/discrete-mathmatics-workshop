'use client';

import { Users } from 'lucide-react';
import { FC } from 'react';
import { Instructor } from '../types';
import { cn } from '../utils/cn';

interface InstructorCardProps {
  instructor: Instructor;
}

const COLOR_CLASSES = {
  green: {
    bg: 'bg-green-100 dark:bg-green-900',
    text: 'text-green-600 dark:text-green-400',
  },
  blue: {
    bg: 'bg-blue-100 dark:bg-blue-900',
    text: 'text-blue-600 dark:text-blue-400',
  },
  pink: {
    bg: 'bg-pink-100 dark:bg-pink-900',
    text: 'text-pink-600 dark:text-pink-400',
  },
  purple: {
    bg: 'bg-purple-100 dark:bg-purple-900',
    text: 'text-purple-600 dark:text-purple-400',
  },
} as const;

export const InstructorCard: FC<InstructorCardProps> = ({ instructor }) => {
  const { name, affiliation, color } = instructor;
  const colors = COLOR_CLASSES[color];
  
  return (
    <article className="bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200 dark:border-gray-700">
      <div className="text-center">
        <div className={cn('w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center', colors.bg)}>
          <Users className={cn('h-10 w-10', colors.text)} aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-black dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {affiliation}
        </p>
      </div>
    </article>
  );
};
