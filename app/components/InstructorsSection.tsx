'use client';

import { InstructorCard } from './InstructorCard';
import { INSTRUCTORS } from '../constants/instructors';

export const InstructorsSection = () => {
  return (
    <section id="instructors" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/50 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white mb-3 sm:mb-4">
            اساتید کارگاه
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INSTRUCTORS.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};
