'use client';

import { FC } from 'react';
import { Instructor } from '../types';
import Image from 'next/image';

interface InstructorCardProps {
  instructor: Instructor;
}

export const InstructorCard: FC<InstructorCardProps> = ({ instructor }) => {
  const { name, affiliation, picture } = instructor;
  
  return (
    <article className="rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-200" style={{ backgroundColor: '#F7F7F7' }}>
      <div className="text-center">
        <div className="w-40 h-40 rounded-full mx-auto mb-4 flex items-center justify-center bg-gray-100 overflow-hidden">
          <Image
            src={picture || '/instructors/placeholder.svg'}
            alt={name}
            width={160}
            height={160}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = '/instructors/placeholder.svg';
            }}
          />
        </div>
        <h3 className="text-xl font-bold text-black mb-2">
          {name}
        </h3>
        <p className="text-sm text-gray-600">
          {affiliation}
        </p>
      </div>
    </article>
  );
};
