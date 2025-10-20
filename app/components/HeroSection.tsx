'use client';

import { WorkshopTimeline } from './WorkshopTimeline';
import { TypewriterText } from './TypewriterText';
import { Button } from './ui/Button';
import { WORKSHOP_CONFIG } from '../constants/workshop';

export const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl mb-4 text-white font-normal">
            {WORKSHOP_CONFIG.organizer}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-6 animate-fade-in min-h-[3rem] sm:min-h-[4rem] md:min-h-[5rem] lg:min-h-[6rem]">
            <TypewriterText 
              text={WORKSHOP_CONFIG.title}
              typingSpeed={60}
              deletingSpeed={40}
              pauseTime={2000}
              className="inline-block"
            />
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-black dark:text-white mb-8 max-w-3xl mx-auto px-4">
            {WORKSHOP_CONFIG.certificate}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button href={WORKSHOP_CONFIG.registrationLinks.onsite}>
              ثبت‌نام حضوری
            </Button>
            <Button href={WORKSHOP_CONFIG.registrationLinks.virtual}>
              ثبت‌نام مجازی
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
              جدول زمانی کارگاه
            </h2>

          </div>
          <WorkshopTimeline />
        </div>
      </div>
    </section>
  );
};
