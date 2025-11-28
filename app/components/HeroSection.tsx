'use client';

import { WorkshopTimeline } from './WorkshopTimeline';
import { Button } from './ui/Button';
import { WORKSHOP_CONFIG } from '../constants/workshop';
import Image from 'next/image';
const SHARIF_UNIVERSITY_URL = 'http://sharif.ir/';

export const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
        <div className="flex justify-center items-center mb-10">
        <a
            href={SHARIF_UNIVERSITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="دانشگاه صنعتی شریف"
          >
            <Image
              src="/logo.svg"
              alt="دانشگاه صنعتی شریف"
              width={180}
              height={180}
              className="w-64 h-64 sm:w-38 sm:h-38 md:w-40 md:h-40"
            />
          </a>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-700 font-normal">
            {WORKSHOP_CONFIG.organizer}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-10">
            {WORKSHOP_CONFIG.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-red-500 mb-8 max-w-3xl mx-auto px-4">
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
          <p className="text-sm sm:text-base text-red-500 mt-4">
            کارگاه ویژه دانش آموزان پایه هفتم تا دوازدهم می‌باشد.
          </p>
        </div>

        <div className="mt-20 text-center">
          <div className="flex justify-center px-4 mb-4">
            <Button href={WORKSHOP_CONFIG.registrationLinks.sharifFamily}>
              ثبت‌نام حضوری برای خانواده محترم شریف
            </Button>
          </div>
          <p className="text-sm sm:text-base text-red-500">
            ۲۵ درصد تخفیف ویژه فرزندان اساتید و کارمندان محترم دانشگاه صنعتی شریف (لطفا کپی حکم و صفحه اول شناسنامه فرزند به{' '}
            <a 
              href="mailto:discretemathematics1404@gmail.com" 
              className="underline hover:text-red-700 transition-colors"
            >
              ایمیل
            </a>
            {' '}موجود در سایت ارسال شود).
          </p>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black-500 mb-4 ">
              جدول زمانی کارگاه
            </h2>

          </div>
          <WorkshopTimeline />
        </div>
      </div>
    </section>
  );
};
